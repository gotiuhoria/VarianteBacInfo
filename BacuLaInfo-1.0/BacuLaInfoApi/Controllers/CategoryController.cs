using System;
using System.Linq;
using BacuLaInfo.Web.Api.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BacuLaInfo.Web.Api.Controllers
{
  [Route("api/[controller]")]
  public class CategoryController : Controller
	{

	  private readonly EfDbContext _context;

	  public CategoryController(EfDbContext context)
	  {
		  _context = context;
	  }

	  // GET api/values
	[HttpGet]
    public IActionResult Get()
    {
      IActionResult ret;

      try
      {
        
          if (_context.Categories.Any())
          {
	          // NOTE: Declare 'list' outside the using to avoid 
            // it being disposed before it is returned.
            var list = _context.Categories.OrderBy(p => p.CategoryName).ToList();
            ret = StatusCode(StatusCodes.Status200OK, list);
          }
          else
          {
            ret = StatusCode(StatusCodes.Status404NotFound,
                           "Can't Find Categories");
          }
        
      }
      catch (Exception ex)
      {
		ret = StatusCode(StatusCodes.Status500InternalServerError, new Exception("Exception trying to get all Categories", ex));
      }

      return ret;
    }
  }
}
