const router = require("express").Router();
const {
    createCustomer,
    userLogin,
    findAllUsersForAdmin,
    fromToRouteMoneyAdd,
    findAllDrivers,
    routeDetail,
    getAllCreatedFrom,
    getAllCreatedTo,
    createBooking,

} = require("../Controller/authFunctions");
const employeeAuth = require("../middleware/employeeAuth");

//create user
router.post("/user-reg", createCustomer);

//login user
router.post("/login-customer", async (req, res) => {
    await userLogin(req.body, ["Customer"], res);
  });

router.post("/login-driver", async (req, res) => {
    await userLogin(req.body, ["Driver"], res);
  });

router.post("/login-admin", async (req, res) => {
    await userLogin(req.body, ["Admin"], res);
  }); 
  
router.post("/login-operator", async (req, res) => {
    await userLogin(req.body, ["Operator"], res);
  });

//get all users by admin
router.get("/all-users", employeeAuth, findAllUsersForAdmin);

//create new route for driverId
router.post("/create-new-route-for-driver", employeeAuth, fromToRouteMoneyAdd);

//find all the drivers 
router.get("/all-drivers", employeeAuth, findAllDrivers);

//find the router detail fro the to and from data for customer
router.get("/route-detail/:from/:to", routeDetail);

//find all the from routes
router.get("/find-from-routes", getAllCreatedFrom );

//find all the to routes
router.get("/find-to-routes", getAllCreatedTo );

//create booking 
router.post("/create-new-booking", employeeAuth, createBooking);

module.exports = router;