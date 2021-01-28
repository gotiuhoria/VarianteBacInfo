using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace PtcApi.Controllers
{
	[Route("api/[controller]")]
	public class CodeEditorController : Controller
	{
		[HttpPost("validate")]
		public IActionResult Validate([FromBody]string editorContent)
		{
			return StatusCode(StatusCodes.Status200OK);
		}
	}
}
