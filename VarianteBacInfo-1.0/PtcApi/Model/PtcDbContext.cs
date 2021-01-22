using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace PtcApi.Model
{
  public class PtcDbContext : IdentityDbContext<IdentityUser>
  {
    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }

	public PtcDbContext(DbContextOptions<PtcDbContext> options) : base(options)
	{

	}
  }
}
