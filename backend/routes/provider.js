var express = require('express');
const router = express.Router();
const ServiceProvider = require("../models/ServiceProvider");
const fetchserviceprovider = require("../middleware/fetchserviceprovider")

const Booking = require('../models/Booking');
const { body, validationResult } = require('express-validator');


router.get('/getplumbingprovider', async (req, res) => {
    try {
        const serviceprovider = await ServiceProvider.find({type_of_service:"Plumbing"}).select("-password -cpassword -date -__v -type_of_service")
        res.send(serviceprovider)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})


router.get('/getcarpenterprovider', async (req, res) => {
    try {
        const serviceprovider = await ServiceProvider.find({type_of_service:"Carpenter"}).select("-password -cpassword -date -__v -type_of_service")
        res.send(serviceprovider)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})

router.get('/getelectricianprovider', async (req, res) => {
    try {
        const serviceprovider = await ServiceProvider.find({type_of_service:"Electrician"}).select("-password -cpassword -date -__v -type_of_service")
        res.send(serviceprovider)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})

router.get('/getcleaningprovider', async (req, res) => {
    try {
        const serviceprovider = await ServiceProvider.find({type_of_service:"Cleaning"}).select("-password -cpassword -date -__v -type_of_service")
        res.send(serviceprovider)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})

router.get('/gethousekeepingprovider', async (req, res) => {
    try {
        const serviceprovider = await ServiceProvider.find({type_of_service:"House keeping"}).select("-password -cpassword -date -__v -type_of_service")
        res.send(serviceprovider)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})

router.get('/getpaintingprovider', async (req, res) => {
    try {
        const serviceprovider = await ServiceProvider.find({type_of_service:"Painting"}).select("-password -cpassword -date -__v -type_of_service")
        res.send(serviceprovider)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})


// Booking Form : Using POST:"/api/provider/booking" Login Required
router.post('/booking', [
    body('provider_id', "Enter a valid provider_id").isString(),
    body('customer_name', "Enter a valid customer name").isString(),
    body('customer_address', "Enter a valid customer address").isString(),
    body('customer_phonenumber', "Enter a valid customer Phone Number").isNumeric(),
], async (req, res) => {
    try {
        const { provider_id, customer_name, customer_address ,customer_phonenumber} = req.body;

        // if there are errors return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const booking = new Booking({
            provider_id, customer_name, customer_address, customer_phonenumber ,user: req.body.id
        })
        const savedBooking = await booking.save()
        res.json(savedBooking)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})


module.exports = router;