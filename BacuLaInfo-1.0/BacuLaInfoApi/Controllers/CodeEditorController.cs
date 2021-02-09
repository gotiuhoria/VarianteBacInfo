using System;
using System.Diagnostics;
using System.IO;
using BacuLaInfo.Web.Api.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BacuLaInfo.Web.Api.Controllers
{
	[Route("api/[controller]")]
	public class CodeEditorController : Controller
	{
		[HttpPost("validate")]
		public IActionResult Validate([FromBody]EditorContent editorContent)
		{

			if (System.IO.File.Exists(@"D:\test1.c"))
			{
				System.IO.File.Delete(@"D:\test1.c");
			}

			// WriteAllText creates a file, writes the specified string to the file,
			// and then closes the file.    You do NOT need to call Flush() or Close().
			System.IO.File.WriteAllText(@"D:\test1.c", editorContent.Content);

			Process process = new Process();
			process.StartInfo.FileName = @"C:\MinGW\bin\gcc.exe";
			process.StartInfo.Arguments = "D:\\test1.c -o D:\\main.exe";
			process.StartInfo.UseShellExecute = false;
			process.StartInfo.RedirectStandardOutput = true;
			process.StartInfo.RedirectStandardError = true;
			process.Start();
			//* Read the output (or the error)
			string output = process.StandardOutput.ReadToEnd();
			Console.WriteLine(output);
			string err = process.StandardError.ReadToEnd();
			Console.WriteLine(err);
			process.WaitForExit();

			process.StartInfo.FileName = @"D:\main.exe";
			process.StartInfo.UseShellExecute = false;
			process.StartInfo.RedirectStandardOutput = true;
			process.StartInfo.RedirectStandardError = true;
			process.Start();
			//* Read the output (or the error)
			string output2 = process.StandardOutput.ReadToEnd();
			Console.WriteLine(output2);
			string err2 = process.StandardError.ReadToEnd();
			Console.WriteLine(err2);
			process.WaitForExit();

			ValidationResult validationResult = new ValidationResult();
			validationResult.Result = output2;

			return StatusCode(StatusCodes.Status200OK, validationResult);
		}
	}
}
