using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SecretShop.Web.Model;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SecretShop.Web.Controllers
{
    [Route("api/[controller]")]
    public class BotCreationController : Controller
    {
        [HttpPost("[action]")]
        public void Login(SteamLoginModel model)
        {

        }
    }
}
