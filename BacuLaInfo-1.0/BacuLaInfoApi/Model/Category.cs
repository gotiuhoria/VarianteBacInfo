using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BacuLaInfo.Web.Api.Model
{
  [Table("Category", Schema = "dbo")]
  public partial class Category
  {
    public int CategoryId { get; set; }

    [Required()]
    [StringLength(30)]
    public string CategoryName { get; set; }
  }
}
