const express = require('express');
const ContactUs = require('../models/ContactUs');
const router = express.Router();
var fetchcustomer = require('../middleware/fetchcustomer');
const { body, validationResult } = require('express-validator');

// Contact Us Form : Using POST:"/api/auth/contactus" Login Required
router.post('/contactusform', [
    body('name', "Enter a valid Name").isString(),
    body('email', "Enter a valid Email").isEmail(),
    body('phone_number', "Enter a valid Phone Number").isNumeric(),
    body('subject', "Enter a Valid Subject").isString(),
    body('message', "Enter a Valid Message").isString(),

], async (req, res) => {
    try {
        const { name, email, phone_number, subject, message } = req.body;

        // if there are errors return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const contactus = new ContactUs({
            name, email, phone_number, subject, message, user: req.body.id
        })
        const savedConstactUs = await contactus.save()
        res.json(savedConstactUs)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})

module.exports = router