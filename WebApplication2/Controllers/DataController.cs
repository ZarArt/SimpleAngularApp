using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    public class DataController : Controller
    {
        // GET: Data
        public JsonResult GetLastContact()
        {
            Contact c = null;

            using (MyDatabaseEntities dc = new MyDatabaseEntities())
            {
                c = dc.Contacts.OrderByDescending(a => a.ContactID).Take(1).FirstOrDefault();
            }

            return new JsonResult { Data = c, JsonRequestBehavior = JsonRequestBehavior.AllowGet};
        }

        public JsonResult UserLogin(LoginData login)
        {
            using (MyDatabaseEntities dc = new MyDatabaseEntities())
            {
                var user = dc.Users.Where(a => a.UserName.Equals(login.UserName) && a.Password.Equals(login.Password)).FirstOrDefault();
                return new JsonResult { Data = user, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
            }
        }

        public JsonResult GetEmployeeList()
        {
            List<Employee> Employees = new List<Employee>();
            using (MyDatabaseEntities dc = new MyDatabaseEntities())
            {
                Employees = dc.Employees.OrderBy(a => a.FirstName).ToList();
            }
            return new JsonResult { Data = Employees, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
    }
}