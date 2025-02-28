namespace BoltAPI.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public decimal Balance { get; set; }
    }

    public class TransferRequest
    {
        public int SenderId { get; set; }
        public int ReceiverId { get; set; }
        public decimal Amount { get; set; }
    }
}
