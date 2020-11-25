using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace webf.Areas.Customer.Controllers
{
    public class HomePageController : Controller
    {
        // GET: Customer/HomePage
        public ActionResult HomePage()
        {
            return View();
        }
        public ActionResult ListProduct()
        {
            return View();
        }
        public ActionResult AddHouse()
        {
            return View();
        }
        public ActionResult Login()
        {
            return View();
        }
        public ActionResult ViewAllHouse()
        {
            return View();
        }
        public ActionResult ViewDetailHouse()
        {
            return View();
        }
    }
}