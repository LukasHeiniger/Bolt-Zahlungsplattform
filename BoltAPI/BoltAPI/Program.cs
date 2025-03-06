using BoltAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace BoltAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // CORS konfigurieren
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowLocalhost", builder =>
                    builder.WithOrigins("http://127.0.0.1:5500") // Erlaube den Frontend-Ursprung
                           .AllowAnyMethod()   // Erlaube alle HTTP-Methoden (GET, POST, etc.)
                           .AllowAnyHeader()); // Erlaube alle Header
            });

            // Füge DbContext und Controller hinzu
            builder.Services.AddDbContext<BoltDbContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
            builder.Services.AddControllers();

            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // CORS Middleware hinzufügen
            app.UseCors("AllowLocalhost"); // CORS-Policy aktivieren

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.MapControllers();

            app.Run();
        }
    }
}
