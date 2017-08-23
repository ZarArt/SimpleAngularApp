//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApplication2
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public partial class User
    {
        public int UserID { get; set; }
        [Required(ErrorMessage="User name required", AllowEmptyStrings = false)]
        public string UserName { get; set; }
        [Required(ErrorMessage = "Password required", AllowEmptyStrings = false)]
        public string Password { get; set; }
        [Required(ErrorMessage = "Fullname required", AllowEmptyStrings = false)]
        public string FullName { get; set; }
        [RegularExpression(@"^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$", ErrorMessage ="Email ID is not valid")]
        public string EmailID { get; set; }
        [Required(ErrorMessage = "Gender required", AllowEmptyStrings = false)]
        public string Gender { get; set; }
    }
}
