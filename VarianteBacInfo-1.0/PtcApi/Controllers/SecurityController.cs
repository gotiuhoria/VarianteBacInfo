using System;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PtcApi.Security;
using PtcApi.Model;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace PtcApi.Controllers
{
  [Route("api/[controller]")]
  public class SecurityController : Controller
  {
	private readonly JwtSettings _settings;
	private readonly PtcDbContext _context;
	private readonly UserManager<IdentityUser> _userManager;
	private readonly SignInManager<IdentityUser> _signInManager;

	public SecurityController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager, JwtSettings settings, PtcDbContext context)
	{
		_userManager = userManager;
		_signInManager = signInManager;
		_settings = settings;
		_context = context;
	}

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody]AppUser user)
    {
			//AppUserAuth auth = new AppUserAuth();
			//SecurityManager mgr = new SecurityManager(_settings);

			//auth = mgr.ValidateUser(user);

			//IActionResult ret;
			//if (auth.IsAuthenticated)
			//{
			//	ret = StatusCode(StatusCodes.Status200OK, auth);
			//}
			//else
			//{
			//	ret = StatusCode(StatusCodes.Status404NotFound,
			//						"Invalid User Name/Password.");
			//}

			//return ret;
			try
			{
				AppUserAuth auth = new AppUserAuth();
				var result = await _userManager.FindByNameAsync(user.UserName);

				if (result != null)
				{
					var signInResult = await _signInManager.PasswordSignInAsync(result, user.Password, false, false);

					if (signInResult.Succeeded)
					{
						auth.UserName = user.UserName;
						var claims = await _userManager.GetClaimsAsync(result);
						foreach (var claim in claims)
						{
							auth.Claims.Add(new AppUserClaim
							{
								UserId = result.Id,
								ClaimType = claim.Type,
								ClaimValue = claim.Value
							});
						}
						auth.IsAuthenticated = true;
						auth.BearerToken = new SecurityManager(_settings, _context).BuildJwtToken(auth);
						return StatusCode(StatusCodes.Status200OK, auth);
					}
				}
				else
				{
					return StatusCode(StatusCodes.Status404NotFound, "Invalid User Name/Password.");
				}

				return null;
			}
			catch (Exception e)
			{
				return StatusCode(StatusCodes.Status404NotFound, "Invalid User Name/Password.");
			}
			
    }
    

		[HttpPost("register")]
		public async Task<IActionResult> Register([FromBody]AppUser user)
		{
			var identityUser = new IdentityUser
			{
				UserName = user.UserName,
				Email = ""
			};

			var result = await _userManager.CreateAsync(identityUser, user.Password);

			IActionResult ret;
			if (result.Succeeded)
			{
				var appUser = await _userManager.FindByNameAsync(user.UserName);
				//await _userManager.AddClaimAsync(appUser, new Claim("CanAddProduct", "false"));
				//await _userManager.AddClaimAsync(appUser, new Claim("CanAccessProducts", "true"));
				//await _userManager.AddClaimAsync(appUser, new Claim("CanAddProduct", "true"));
				//await _userManager.AddClaimAsync(appUser, new Claim("CanSaveProduct", "true"));
				//await _userManager.AddClaimAsync(appUser, new Claim("CanAccessCategories", "true"));
				ret = StatusCode(StatusCodes.Status200OK);
			}
			else
			{
				ret = StatusCode(StatusCodes.Status404NotFound,
								"Invalid User Name/Password.");
			}

			return ret;
		}
  }
}
