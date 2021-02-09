using System.Collections.Generic;

namespace BacuLaInfo.Web.Api.Model
{
  public class AppUserAuth
  {
    public AppUserAuth()
    {
      UserName = "Not authorized";
      BearerToken = string.Empty;
	  Claims = new List<AppUserClaim>();
    }

    public string UserName { get; set; }
    public string BearerToken { get; set; }
    public bool IsAuthenticated { get; set; }
	public List<AppUserClaim> Claims { get; set; }	
 }
}
