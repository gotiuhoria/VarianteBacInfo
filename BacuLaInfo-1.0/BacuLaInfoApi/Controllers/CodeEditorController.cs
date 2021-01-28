using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace PtcApi.Controllers
{
	[Route("api/[controller]")]
	public class CodeEditorController : Controller
	{
		[HttpPost]
		public IActionResult ValidateCode([FromBody]string editorContent)
		{
			return StatusCode(StatusCodes.Status200OK);
		}
	}
}
