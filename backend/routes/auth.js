const express = require('express');
const Customer = require('../models/Customer');
const ServiceProvider = require('../models/ServiceProvider');
const Admin = require('../models/Admin');
const router = express.Router();
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var fetchcustomer = require('../middleware/fetchcustomer');
var fetchserviceprovider = require('../middleware/fetchserviceprovider');

const JWT_SECRET = "Nishant";
var jwt = require('jsonwebtoken');

// -------------------------------------------------------------------------------------------------------//
// Route 1:  create a user using : POST "/api/auth/createuser".  no Login required
router.post('/createcustomer', [
    body('first_name', "Enter a valid First Name").isString(),
    body('last_name', "Enter a valid last name").isString(),
    body('email', "Enter a valid Email").isEmail(),
    body('phone_number', "Enter a valid Phone Number").isNumeric().isLength({min:10, max: 10 }),
    body('password', "Enter a Atleast 4 character in Password").isString().isLength({min:4, max: 10 }),
    body('cpassword', "Enter a Atleast 4 character in Password").isString().isLength({min:4, max: 10 })
], async (req, res) => {
    let success = false;
    // if there are errors return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    }
    // check wheather the user exists already
    try {
        let customer = await Customer.findOne({ email: req.body.email, phone_number: req.body.phone_number })
        if (customer) {
            return res.status(400).json({success, errors: "Sorry Email or Phone Number is already in Use" });
        }
        
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        const csecPass = await bcrypt.hash(req.body.cpassword, salt);

        // create a new Customers
        customer = await Customer.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone_number: req.body.phone_number,
            password: secPass,
            cpassword: csecPass,
        })
        const data = {
            customer: {
                id: customer.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({success,authtoken})
    } catch (error) {
        console.error(error.message);
        res.status(500).send(success, "Some error occured")
    }
})

// Route 2: Authenticate a User POST "/api/auth/login".  no Login required
router.post('/customerlogin', [
    body('email', "Enter a valid Email").isEmail(),
    body('password', "Cannot be Blank").exists(),
], async (req, res) => {
    let success = false;
    // if there are errors return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let customer = await Customer.findOne({ email });
        if (!customer) {
            success = false;
            return res.status(400).json({success, error: "Please try to login with correct Details" });
        }
        const passwordcompare = await bcrypt.compare(password, customer.password);
        if (!passwordcompare) {
            success = false;
            return res.status(400).json({success, error: "Please try to login with correct Details" });
        }
        const data = {
            customer: {
                id: customer.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({success, authtoken})
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send(success,"Some error occured");
    }
})

// Route 3: get Loggedin User Details : POST "/api/auth/getuser" . login required
router.post('/getcustomer', fetchcustomer, async (req, res) => {
    try {
        customerId = req.customer.id;
        const customer = await Customer.findById(customerId).select("-password")
        res.send(customer)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})

//----------------------------------------------------------------------------------------------------//

// Route 1.2:  create a ServiceProvider using : POST "/api/auth/createserviceprovider".  no Login required
router.post('/createserviceprovider', [
    body('first_name', "Enter a valid First Name").isString(),
    body('last_name', "Enter a valid last name").isString(),
    body('email', "Enter a valid Email").isEmail(),
    body('phone_number', "Enter a valid Phone Number").isNumeric().isLength({min:10, max: 10 }),
    body('password', "Enter a Atleast 4 character in Password").isString().isLength({min:4, max: 10 }),
    body('cpassword', "Enter a Atleast 4 character in Password").isString().isLength({min:4, max: 10 }),
    body('type_of_service', "Enter a Right Service").isString(),
    body('visiting_charge', "Enter a valid Visiting Charge").isNumeric(),
    body('gender', "Enter a valid Gender").isString(),

], async (req, res) => {
    let success = false;
    // if there are errors return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // check wheather the user exists already
    try {
        let serviceprovider = await ServiceProvider.findOne({ email: req.body.email, phone_number: req.body.phone_number })
        if (serviceprovider) {
            return res.status(400).json({success, errors: "Sorry Email or Phone Number is already in Use" });
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        const csecPass = await bcrypt.hash(req.body.cpassword, salt);

        // create a new Customers
        serviceprovider = await ServiceProvider.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone_number: req.body.phone_number,
            password: secPass,
            cpassword: csecPass,
            type_of_service: req.body.type_of_service,
            visiting_charge: req.body.visiting_charge,
            gender: req.body.gender,
        })
        const data = {
            customer: {
                id: serviceprovider.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({success,authtoken})
    } catch (error) {
        console.error(error.message);
        res.status(500).send(success,"Some error occured")
    }
})

// Route 2.1: Authenticate a Service Provider POST "/api/auth/login".  no Login required
router.post('/serviceproviderlogin', [
    body('email', "Enter a valid Email").isEmail(),
    body('password', "Cannot be Blank").exists(),
], async (req, res) => {
    let success = false;

    // if there are errors return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
        let serviceprovider = await ServiceProvider.findOne({ email });
        if (!serviceprovider) {
            return res.status(400).json({success, error: "Please try to login with correct Details" });
        }
        const passwordcompare = await bcrypt.compare(password, serviceprovider.password);
        if (!passwordcompare) {
            return res.status(400).json({success, error: "Please try to login with correct Details" });
        }
        const data = {
            serviceprovider: {
                id: serviceprovider.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({success, authtoken})
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send(success,"Some error occured");
    }
})

// Route 3.1: get Loggedin User Details : POST "/api/auth/getserviceprovider" . login required
router.post('/getserviceprovider', fetchserviceprovider, async (req, res) => {
    try {
        serviceproviderId = req.serviceprovider.id;
        const serviceprovider = await ServiceProvider.findById(serviceproviderId).select("-password")
        res.send(serviceprovider)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})
// ---------------------------------------------------------------------------------------------------//

// Route 1.2:  create a admin using : POST "/api/auth/createadmin".  no Login required
router.post('/createadmin', [
    body('email', "Enter a valid Email").isEmail(),
    body('password', "Enter a Atleast 4 character in Password").isString()
], async (req, res) => {
    let success = false;

    // if there are errors return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    }
    // check wheather the user exists already
    try {
        let admin = await Admin.findOne({ email: req.body.email })
        if (admin) {
            return res.status(400).json({success, errors: "Sorry Email is already in Use" });
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        // create a new Admin
        admin = await Admin.create({
            email: req.body.email,
            password: secPass
        })
        const data = {
            admin: {
                id: admin.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({success,authtoken})
    } catch (error) {
        console.error(error.message);
        res.status(500).send(success, "Some error occured")
    }
})

// Route 2.2: Authenticate a Admin POST "/api/auth/login".  no Login required
router.post('/adminlogin', [
    body('email', "Enter a valid Email").isEmail(),
    body('password', "Cannot be Blank").exists(),
], async (req, res) => {
    let success = false;
    // if there are errors return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let admin = await Admin.findOne({ email });
        if (!admin) {
            success = false;
            return res.status(400).json({success, error: "Please try to login with correct Details" });
        }
        const passwordcompare = await bcrypt.compare(password, admin.password);
        if (!passwordcompare) {
            success = false;
            return res.status(400).json({success, error: "Please try to login with correct Details" });
        }
        const data = {
            admin: {
                id: admin.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({success, authtoken})
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send(success,"Some error occured");
    }
})

module.exports = router