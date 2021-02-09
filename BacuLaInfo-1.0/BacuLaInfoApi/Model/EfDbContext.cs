using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BacuLaInfo.Web.Api.Model
{
  public class EfDbContext : IdentityDbContext<IdentityUser>
  {
    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }

	public EfDbContext(DbContextOptions<EfDbContext> options) : base(options)
	{

	}
  }
}
