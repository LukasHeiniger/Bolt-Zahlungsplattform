using BoltAPI.Data;
using BoltAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BCrypt.Net;

namespace BoltAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly BoltDbContext _context;
        private readonly AuthService _authService;

        public UserController(BoltDbContext context, AuthService authService)
        {
            _context = context;
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<ActionResult<User>> RegisterUser([FromBody] User user)
        {
            if (_context.Users.Any(u => u.Username == user.Username))
            {
                return Conflict("Benutzername existiert bereits.");
            }

            user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password); // Passwort hashen
            user.Balance = 1000m;

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Username == request.Username);

            if (user == null)
            {
                return Unauthorized("Benutzername oder Passwort ist falsch.");
            }

            // Passwort-Hash mit dem eingegebenen Passwort vergleichen
            bool isPasswordValid = BCrypt.Net.BCrypt.Verify(request.Password, user.Password);

            if (!isPasswordValid)
            {
                return Unauthorized("Benutzername oder Passwort ist falsch.");
            }

            var token = _authService.GenerateJwtToken(user);

            
            return Ok(new { token, id = user.Id, username = user.Username });
        }


        [HttpGet("search")]
        public async Task<ActionResult<IEnumerable<User>>> SearchUsers([FromQuery] string query)
        {
            var users = await _context.Users
                .Where(u => u.Username.Contains(query) || u.Id.ToString() == query)
                .ToListAsync();

            if (users.Count == 0)
            {
                return NotFound("Keine Benutzer gefunden.");
            }

            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound("Benutzer wurde nicht gefunden.");
            }

            return user;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUserBalance(int id, [FromBody] decimal amount)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound("Benutzer wurde nicht gefunden.");
            }

            user.Balance += amount;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPost("transfer")]
        public async Task<IActionResult> TransferMoney([FromBody] TransferRequest request)
        {
            var sender = await _context.Users.FindAsync(request.SenderId);
            var receiver = await _context.Users.FindAsync(request.ReceiverId);

            if (sender == null || receiver == null)
            {
                return NotFound("Sender oder Empfänger wurde nicht gefunden.");
            }

            if (sender.Balance < request.Amount)
            {
                return BadRequest("Nicht genug Guthaben für die Überweisung.");
            }

            sender.Balance -= request.Amount;
            receiver.Balance += request.Amount;

            var transaction = new Transaction
            {
                SenderId = request.SenderId,
                ReceiverId = request.ReceiverId,
                Amount = request.Amount,
                Timestamp = DateTime.Now
            };
            _context.Transactions.Add(transaction);

            await _context.SaveChangesAsync();

            return Ok("Überweisung erfolgreich durchgeführt.");
        }

        [HttpGet("{id}/transactions")]
        public async Task<ActionResult<IEnumerable<object>>> GetTransactionsForUser(int id)
        {
            var transactions = await _context.Transactions
                .Where(t => t.SenderId == id)
                .Join(_context.Users,
                    t => t.ReceiverId,
                    u => u.Id,
                    (t, u) => new
                    {
                        u.Username,
                        t.Amount,
                        t.Timestamp
                    })
                .OrderByDescending(t => t.Timestamp)
                .ToListAsync();

            return Ok(transactions);
        }
    }
}
