using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SecretShop.Web.Models
{
    public class LoginModel
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Secret { get; set; }
        public LoginStatus status { get; set; }
    }

    public enum LoginStatus
    {
        Success,
        RequireSecret,
        RequirePassword,
        Fail,
        PendingStart,
        Pending
    }
}
