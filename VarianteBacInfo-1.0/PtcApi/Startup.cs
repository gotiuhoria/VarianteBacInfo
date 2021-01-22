using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json.Serialization;
using PtcApi.Model;
using PtcApi.Security;

namespace PtcApi
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddDbContext<PtcDbContext>(config => config.UseSqlServer(@"Server=DESKTOP-PO5O6HA\SQLEXPRESS;
		                 Database=PTC-Pluralsight;
		                 Trusted_Connection=True;
		                 MultipleActiveResultSets=true"));

			services.AddIdentity<IdentityUser, IdentityRole>()
				.AddEntityFrameworkStores<PtcDbContext>()
				.AddDefaultTokenProviders();

			// Get JWT Token Settings from JwtSettings.json file
			JwtSettings settings;
			settings = GetJwtSettings();
			// Create singleton of JwtSettings
			services.AddSingleton(settings);
			// Register Jwt as the Authentication service
			services.AddAuthentication(options =>
			{
				options.DefaultAuthenticateScheme = "JwtBearer";
				options.DefaultChallengeScheme = "JwtBearer";
			})
			.AddJwtBearer("JwtBearer", jwtBearerOptions =>
			{
				jwtBearerOptions.TokenValidationParameters =
			  new TokenValidationParameters
			  {
				  ValidateIssuerSigningKey = true,
				  IssuerSigningKey = new SymmetricSecurityKey(
				  Encoding.UTF8.GetBytes(settings.Key)),
				  ValidateIssuer = true,
				  ValidIssuer = settings.Issuer,

				  ValidateAudience = true,
				  ValidAudience = settings.Audience,

				  ValidateLifetime = true,
				  ClockSkew = TimeSpan.FromMinutes(
						 settings.MinutesToExpiration)
			  };
			});
			services.AddAuthorization(cfg =>
			cfg.AddPolicy("CanAccessProducts", p =>
				p.RequireClaim("CanAccessProducts", "true")));

			services.AddControllers();


		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{

			app.UseCors(
			  options => options.WithOrigins(
				"http://localhost:4200").AllowAnyMethod().AllowAnyHeader()
			);



			app.UseRouting();

			app.UseAuthentication();

			app.UseAuthorization();

			app.UseEndpoints(endpoints =>
			{
				endpoints.MapDefaultControllerRoute();
			});
		}

		public JwtSettings GetJwtSettings()
		{
			JwtSettings settings = new JwtSettings();

			settings.Key = Configuration["JwtSettings:key"];
			settings.Audience = Configuration["JwtSettings:audience"];
			settings.Issuer = Configuration["JwtSettings:issuer"];
			settings.MinutesToExpiration =
			 Convert.ToInt32(
				Configuration["JwtSettings:minutesToExpiration"]);

			return settings;
		}
	}
}
