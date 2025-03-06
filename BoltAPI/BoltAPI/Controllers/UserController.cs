using BoltAPI.Data;
using BoltAPI.Models;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BoltAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly BoltDbContext _context;

        public UserController(BoltDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<ActionResult<User>> RegisterUser([FromBody] User user)
        {
            if (_context.Users.Any(u => u.Username == user.Username))
            {
                return Conflict("Benutzername existiert bereits.");
            }

            user.Balance = 1000m;

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Username == request.Username && u.Password == request.Password);

            if (user == null)
            {
                return Unauthorized("Benutzername oder Passwort ist falsch.");
            }

            return Ok(new { user.Id, user.Username });
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

            await _context.SaveChangesAsync();

            return Ok("Überweisung erfolgreich durchgeführt.");
        }
    }
}
