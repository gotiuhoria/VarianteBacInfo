using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PtcApi.Model;

namespace PtcApi.Controllers
{
  [Route("api/[controller]")]
  public class CategoryController : BaseApiController
  {

	  private readonly PtcDbContext _context;

	  public CategoryController(PtcDbContext context)
	  {
		  _context = context;
	  }

	  // GET api/values
	[HttpGet]
    public IActionResult Get()
    {
      IActionResult ret = null;
      List<Category> list = new List<Category>();

      try
      {
        
          if (_context.Categories.Count() > 0)
          {
            // NOTE: Declare 'list' outside the using to avoid 
            // it being disposed before it is returned.
            list = _context.Categories.OrderBy(p => p.CategoryName).ToList();
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
        ret = HandleException(ex,
             "Exception trying to get all Categories");
      }

      return ret;
    }
  }
}
