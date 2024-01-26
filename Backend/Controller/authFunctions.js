const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require ('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const nodemailer = require('nodemailer');
const moment = require('moment');
const registerUser = require("../dataBase/registerUser");
const customer = require("../dataBase/customer");
const driver = require("../dataBase/driver");
const operator = require("../dataBase/operator");
const fromToMoney = require("../dataBase/fromToMoney");
const bookingDetail = require("../dataBase/bookingDetail");


/* create User */
const createCustomer = async (req, res) => {
    
    try {
        const { email, role, phoneNum } = req.body;
        const userExiest = await registerUser.findOne({ $or: [{ email },  {phoneNum}] })
        if(userExiest){
            return res.status(400).json({error:"User Already exiest with this email"});
        }
        // Generate a random username
        const generateRandomUsername = () => {
            const charsetForUsername = '1234567890';
            let userNameNum = '';
            for (let i = 0; i < 3; i++) {
                const randomIndex = Math.floor(Math.random() * charsetForUsername.length);
                userNameNum += charsetForUsername[randomIndex];
            }
            const userNameFront = email.split('@')[0];
            return userNameFront + userNameNum;
        };

        // Generate a random password
        const generateRandomPassword = () => {
            const charsetForPassword = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let password = '';
            for (let i = 0; i < 10; i++) { // Increase password length to 10 characters
                const randomIndex = Math.floor(Math.random() * charsetForPassword.length);
                password += charsetForPassword[randomIndex];
            }
            return password;
        };

        const userName = generateRandomUsername();
        const password = generateRandomPassword();

        const customerId = uuidv4();

        const newCustomer = new registerUser({ // Assuming Customer is the mongoose model
            id: customerId,
            userName,
            email,
            password,
            phoneNum,
            role,
         });
    
        await newCustomer.save();

        if(role === "Driver"){
            const newDriverForHisSchema = new driver({ 
                id: customerId,
                userName,
                email,
                phoneNum,
                role,
                availability:false,
                rating:0
             });
        
            await newDriverForHisSchema.save();
        }else if(role === "Customer"){
            const newCustomerForHisSchema = new customer({ 
                id: customerId,
                userName,
                email,
                phoneNum,
                role,
             });

             await newCustomerForHisSchema.save();
        }else if(role === "Operator"){
            const newOperatorForHisSchema = new operator({ 
                id: customerId,
                userName,
                email,
                phoneNum,
                role,
             });

             await newOperatorForHisSchema.save();
        }
       
        // Send email to the customer with their username and password
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'demoemail1322@gmail.com',
                pass: 'znsdgrmwzskpatwz'
            }
        });

        const mailOptions = {
            from: 'demoemail1322@gmail.com',
            to: email,
            subject: 'Welcome to Our Service',
            html: `
            <p>Hello,</p>
            <p>Welcome to our service! Below are your login details:</p>
            <p>Username: ${userName}</p>
            <p>Password: ${password}</p>
            <p>Please keep this information secure.</p>
            <p>Thank You!</p>
            `
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.error('Email sending error:', error);
                return res.status(500).json({ error: 'Failed to send email', newUser:newCustomer });
            } else {
                console.log('Email sent:', info.response);
                res.status(201).json({ newUser:newCustomer, emailSent: true });
            }
        });
    } catch (err) {
        console.error('Error creating customer:', err);
        return res.status(500).json({ error: 'Failed to create customer', err });
    }
};

/* user login */
const userLogin = async (req, role, res) => {
    try {
        // Destructure username and password from request body
        const { userName, password } = req;

        // Check if username or password is missing
        if (!userName || !password) {
            return res.status(400).json({
                message: "Invalid input. Please provide both username and password.",
            });
        }

        // Find user by username
        const user = await registerUser.findOne({ userName });

        // If user not found, return 404
        if (!user) {
            return res.status(404).json({
                message: "User not found. Please register to log in.",
            });
        }

        // Check if the provided role matches user's role
        if (!role.includes(user.role)) {
            return res.status(403).json({
                message: "Unauthorized access. Please log in correct portal.",
            });
        }

        // Check if password matches
        const isPasswordMatch = await registerUser.findOne({password: user.password});

        if (isPasswordMatch) {
            let payload = {
                id: user.id,
                role: user.role,
                userName: user.userName,
                email:user.email,
                phoneNum:user.phoneNum
              };
        
              let result = {
                id: user.id,
                role: user.role,
                userName: user.userName,
                email:user.email,
                phoneNum:user.phoneNum,
                expiresIn: 168
              };
        
              let token = jwt.sign(
                payload,
                process.env.APP_SECRET,
                { expiresIn: "3 days" }
              );

              return res
                .cookie('jwt', token, {
                  httpOnly: true,
                })
                .status(200)
                .json({
                  ...result,
                  accessToken: token,
                  message: "You are now logged in."
                });
        } else {
            return res.status(403).json({
                message: "Incorrect password.",
            });
        }
    } catch (err) {
        // Handle server errors
        res.status(500).json({ error: err.message });
    }
};

/* finding the all users */
const findAllUsersForAdmin = async (req, res) => {
    try {
        // Fetch all users from different collections concurrently using Promise.all()
        const [allDriver, allCustomer, allOperator] = await Promise.all([
            driver.find(),
            customer.find(),
            operator.find()
        ]);

        // Check if any users are found in any of the collections
        if (allDriver.length>0 || allCustomer.length>0 || allOperator.length>0) {
            // Concatenate all users into a single array
            const allUsers = {
                allCustomer:allCustomer,
                allDriver:allDriver,
                allOperator:allOperator
            };
            // Return the concatenated array as JSON response
            return res.status(200).json(allUsers);
        } else {
            // If no users are found in any collection, return a 404 error
            return res.status(404).json({ error: "No users found!" });
        }
    } catch (err) {
        // Handle any errors that occur during the process
        return res.status(500).json({ error: err.message });
    }
};

/* adding from to route money */
const fromToRouteMoneyAdd = async(req, res) => {
    try{
        const {from, to, money, driverId} = req.body;
        const alreadyCreated = await fromToMoney.findOne({from:from, to:to, money:money, driverId:driverId});
        if(alreadyCreated){
            return res.status(400).json({error:"Already this route there for this driverId"});
        }

        const newFromToMoney = new fromToMoney({ 
           ...req.body
         });
    
        await newFromToMoney.save();
        return res.status(201).json(newFromToMoney);

    }catch (err) {
        // Handle any errors that occur during the process
        return res.status(500).json({ error: err.message });
    }
}

/*find all the drivers by admin or operator */
const findAllDrivers= async (req, res) => {
    try {
        // Fetch all users from different collections concurrently using Promise.all()
        const [allDriver] = await Promise.all([
            driver.find()
        ]);

        // Check if any users are found in any of the collections
        if (allDriver.length>0) {
            
            return res.status(200).json(allDriver);
        } else {
            // If no users are found in any collection, return a 404 error
            return res.status(404).json({ error: "No users found!" });
        }
    } catch (err) {
        // Handle any errors that occur during the process
        return res.status(500).json({ error: err.message });
    }
};

/* get route detail by customer */
const routeDetail = async (req, res) => {
    try {
        const { from, to } = req.params;
        const correspondingFromToDetail = await fromToMoney.find({ from, to }); // Assuming 'from' and 'to' are fields in your documents
        if (correspondingFromToDetail.length === 0) {
            return res.status(404).json("No data found for the route!");
        }
        const updatedRouteDetail = await Promise.all(
            correspondingFromToDetail.map(async (routeDetails) => {
                try {
                    const correspondingDriverDetail = await driver.findOne({ id: routeDetails.driverId });
                    return {
                        from: routeDetails.from,
                        to: routeDetails.to,
                        money:routeDetails.money,
                        ...correspondingDriverDetail.toObject()
                    };
                } catch (error) {
                    // Handle any errors that occur during driver lookup
                    throw new Error(`Error fetching driver details: ${error.message}`);
                }
            })
        );
        res.status(200).json(updatedRouteDetail);
    } catch (err) {
        // Handle any other unexpected errors
        console.error("Error in routeDetail:", err);
        return res.status(500).json({ error: "An unexpected error occurred." });
    }
};

/* get all from route */
const getAllCreatedFrom = async (req, res) => {
    try {
        const allFromToDetail = await fromToMoney.find();
        if (allFromToDetail.length === 0) {
            return res.status(404).json({ error: "No data" });
        }
        
        const allFromDatas = allFromToDetail.map(fromTo => fromTo.from);
        const uniqueFromDatas = [...new Set(allFromDatas)]; // Convert to Set to remove duplicates
        
        res.status(200).json(uniqueFromDatas);
    } catch (err) {
        // Handle any errors that occur during the process
        return res.status(500).json({ error: err.message });
    }
};

/* get all to route */
const getAllCreatedTo = async (req, res) => {
    try {
        const allFromToDetail = await fromToMoney.find();
        if (allFromToDetail.length === 0) {
            return res.status(404).json({ error: "No data" });
        }
        
        const allToDatas = allFromToDetail.map(fromTo => fromTo.to);
        const uniqueToDatas = [...new Set(allToDatas)]; // Convert to Set to remove duplicates
        
        res.status(200).json(uniqueToDatas);
    } catch (err) {
        // Handle any errors that occur during the process
        return res.status(500).json({ error: err.message });
    }
};

/* create booking detail */
const createBooking = async (req, res) => {
    try {
        const bookingId = uuidv4();
        const bookingTime = moment().format('hh:mmA'); // Format time as "10:15PM"
        const bookingDate = moment().format('DD/MM/YYYY'); // Format date as "dd/mm/yyyy"
        const { driverId, customerId, from, to, money } = req.body;
        const newBookingDetail = new bookingDetail({
            id: bookingId,
            driverId,
            time: bookingTime,
            date: bookingDate,
            customerId,
            from,
            to,
            money,
        });

        await newBookingDetail.save();
        return res.status(201).json(newBookingDetail);
    } catch (err) {
        // Handle any errors that occur during the process
        return res.status(500).json({ error: err.message });
    }
}


module.exports = {
    createCustomer,
    userLogin,
    findAllUsersForAdmin,
    fromToRouteMoneyAdd,
    findAllDrivers,
    routeDetail,
    getAllCreatedFrom,
    getAllCreatedTo,
    createBooking,
}