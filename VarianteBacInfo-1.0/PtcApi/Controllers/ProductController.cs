using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using PtcApi.Model;
using Microsoft.AspNetCore.Authorization;

namespace PtcApi.Controllers
{
  [Route("api/[controller]")]
  [Authorize]
  public class ProductController : Controller
  {

	  private readonly EfDbContext _context;

	  public ProductController(EfDbContext context)
	  {
		  _context = context;
	  }
	  
	
	[HttpGet]
	[Authorize(Policy ="CanAccessProducts")]
    public IActionResult Get()
    {
      IActionResult ret;

      try
      {
        
          if (_context.Products.Any())
          {
	          var list = _context.Products.OrderBy(p => p.ProductName).ToList();
	          ret = StatusCode(StatusCodes.Status200OK, list);
          }
          else
          {
            ret = StatusCode(StatusCodes.Status404NotFound, "Can't Find Products");
          }
        
      }
      catch (Exception ex)
      {
        ret = StatusCode(StatusCodes.Status500InternalServerError, new Exception("Exception trying to get all products", ex));

      }

      return ret;
    }

    [HttpGet("{id}", Name = "Get")]
    public IActionResult Get(int id)
    {
      IActionResult ret;

      try
      {
	      var entity = _context.Products.Find(id);
	      if (entity != null)
          {
            ret = StatusCode(StatusCodes.Status200OK, entity);
          }
          else
          {
            ret = StatusCode(StatusCodes.Status404NotFound,
                     "Can't Find Product: " + id);
          }
      }
      catch (Exception ex)
      {
		ret = StatusCode(StatusCodes.Status500InternalServerError, new Exception("Exception trying to retrieve a single product.", ex));
      }

      return ret;
    }

    [HttpPost]
    public IActionResult Post([FromBody]Product entity)
    {
      IActionResult ret;

      try
      {
        
          if (entity != null)
          {
            _context.Products.Add(entity);
            _context.SaveChanges();
            ret = StatusCode(StatusCodes.Status201Created,
                entity);
          }
          else
          {
            ret = StatusCode(StatusCodes.Status400BadRequest, "Invalid object passed to POST method");
          }
        
      }
      catch (Exception ex)
      {
        ret = StatusCode(StatusCodes.Status500InternalServerError, new Exception("Exception trying to insert a new product", ex)); ;
      }

      return ret;
    }

    [HttpPut]
    public IActionResult Put([FromBody]Product entity)
    {
      IActionResult ret = null;

      try
      {
        
          if (entity != null)
          {
            _context.Update(entity);
            _context.SaveChanges();
            ret = StatusCode(StatusCodes.Status200OK, entity);
          }
          else
          {
            ret = StatusCode(StatusCodes.Status400BadRequest, "Invalid object passed to PUT method");
          }
        
      }
      catch (Exception ex)
      {
	      if (entity != null)
		      ret = StatusCode(StatusCodes.Status500InternalServerError, new Exception("Exception trying to update product: " + entity.ProductId, ex));
      }

      return ret;
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      IActionResult ret;

      try
      {
        
          var entity = _context.Products.Find(id);
          if (entity != null)
          {
            _context.Products.Remove(entity);
            _context.SaveChanges();
          }
          ret = StatusCode(StatusCodes.Status200OK, true);
        
      }
      catch (Exception ex)
      {
		ret = StatusCode(StatusCodes.Status500InternalServerError, new Exception("Exception trying to delete product: " + id, ex));
      }

      return ret;
    }
  }
}
