using BoltAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace BoltAPI.Data
{
    public class BoltDbContext : DbContext
    {
        public BoltDbContext(DbContextOptions<BoltDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }

        public DbSet<Transaction> Transactions { get; set; }

    }
}
