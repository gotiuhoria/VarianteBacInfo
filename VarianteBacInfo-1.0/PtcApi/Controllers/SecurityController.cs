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

	private JwtSettings _settings = null;
	private readonly UserManager<IdentityUser> _userManager;
	private readonly SignInManager<IdentityUser> _signInManager;

	public SecurityController(JwtSettings settings, UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
	{
		_settings = settings;
		_userManager = userManager;
		_signInManager = signInManager;
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

			var result = await _userManager.FindByNameAsync(user.UserName);

			if (result != null)
			{
				var signInResult = await _signInManager.PasswordSignInAsync(result, user.Password, false, false);

				if (signInResult.Succeeded)
				{
					return StatusCode(StatusCodes.Status200OK);
				}
			}
			else
			{
				return StatusCode(StatusCodes.Status404NotFound, "Invalid User Name/Password.");
			}

			return null;
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
