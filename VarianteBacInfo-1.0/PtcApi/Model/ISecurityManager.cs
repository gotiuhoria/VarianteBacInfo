using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace PtcApi.Model
{
	public interface ISecurityManager
	{
		Task<AppUserAuth> BuildAppUserAuth(IdentityUser user);
		string BuildJwtToken(AppUserAuth authUser);
	}
}