using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;

namespace PtcApi.Model
{
	public class SecurityManager : ISecurityManager
	{
		private readonly JwtSettings _settings;
		private readonly EfDbContext _context;
		private readonly UserManager<IdentityUser> _userManager;
		public SecurityManager(JwtSettings settings, EfDbContext context, UserManager<IdentityUser> userManager)
		{
			_settings = settings;
			_context = context;
			_userManager = userManager;
		}

		public async Task<AppUserAuth> BuildAppUserAuth(IdentityUser user)
		{
			var userAuth = new AppUserAuth();

			userAuth.UserName = user.UserName;
			var claims = await _userManager.GetClaimsAsync(user);
			foreach (var claim in claims)
			{
				userAuth.Claims.Add(new AppUserClaim
				{
					UserId = user.Id,
					ClaimType = claim.Type,
					ClaimValue = claim.Value
				});
			}
			userAuth.IsAuthenticated = true;
			userAuth.BearerToken = BuildJwtToken(userAuth);

			return userAuth;

		}

		public string BuildJwtToken(AppUserAuth authUser)
		{
			var key = new SymmetricSecurityKey(
			  Encoding.UTF8.GetBytes(_settings.Key));

			// Create standard JWT claims
			var jwtClaims = new List<Claim>();
			
			foreach(var claim in authUser.Claims)
			{
				jwtClaims.Add(new Claim(claim.ClaimType, claim.ClaimValue));
			}

			// Create the JwtSecurityToken object
			var token = new JwtSecurityToken(
			  _settings.Issuer,
			  _settings.Audience,
			  jwtClaims,
			  DateTime.UtcNow,
			  DateTime.UtcNow.AddMinutes(
				  _settings.MinutesToExpiration),
			  new SigningCredentials(key,
						  SecurityAlgorithms.HmacSha256)
			);

			// Create a string representation of the Jwt token
			return new JwtSecurityTokenHandler().WriteToken(token); ;
		}
	}
}
