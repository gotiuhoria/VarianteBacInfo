using System;
using System.Threading.Tasks;
using BacuLaInfo.Web.Api.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace BacuLaInfo.Web.Api.Controllers
{
  [Route("api/[controller]")]
  public class SecurityController : Controller
  { 
	
	private readonly UserManager<IdentityUser> _userManager;
	private readonly SignInManager<IdentityUser> _signInManager;
	private readonly ISecurityManager _securityManager;

	public SecurityController(
		UserManager<IdentityUser> userManager, 
		SignInManager<IdentityUser> signInManager, 
		ISecurityManager securityManager)
	{
		_userManager = userManager;
		_signInManager = signInManager;
		_securityManager = securityManager;
	}

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody]AppUser user)
    {
	    try
	    {
		    var result = await _userManager.FindByNameAsync(user.UserName);

		    if (result != null)
		    {
			    var signInResult = await _signInManager.PasswordSignInAsync(result, user.Password, false, false);

			    if (signInResult.Succeeded)
			    {
				    var auth = await _securityManager.BuildAppUserAuth(result);
				    return StatusCode(StatusCodes.Status200OK, auth);
			    }

			    return StatusCode(StatusCodes.Status404NotFound, "Invalid User Name/Password.");
		    }

		    return StatusCode(StatusCodes.Status404NotFound, "Invalid User Name/Password.");


	    }
	    catch (Exception e)
	    {
		    return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
	    }
    }
    
	[HttpPost("register")]
	public async Task<IActionResult> Register([FromBody]AppUser user)
	{
		var identityUser = new IdentityUser
		{
			UserName = user.UserName
		};

		var result = await _userManager.CreateAsync(identityUser, user.Password);

		return StatusCode(result.Succeeded ? StatusCodes.Status201Created : StatusCodes.Status409Conflict);
	}

	[HttpPost("validate")]
	public IActionResult Validate([FromBody]EditorContent content)
	{
		return StatusCode(StatusCodes.Status200OK);
	}

	}
}
