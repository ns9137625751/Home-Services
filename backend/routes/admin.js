var express = require('express');
const router = express.Router();
const Booking = require("../models/Booking");
const Customer = require("../models/Customer");
const ContactUs = require("../models/ContactUs");
const ServiceProvider = require("../models/ServiceProvider");


// Get all booking for admin
router.get('/getallbooking', async (req, res) => {
    try {
        const booking = await Booking.find({})
        res.send(booking)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})

//delete a booking from admin
router.delete('/deletebooking/:id', [
], async (req, res) => {

    // find the note to be delete and delete it
    let booking = await Booking.findById(req.params.id);
    if (!booking) { return res.status(404).send("Booking was Not Found") }

    booking = await Booking.findOneAndDelete({_id : req.params.id})
    res.json({ "Success" : "Booking has been Deleted" });
})



// get all customer for admin
router.get('/getallcustomer', async (req, res) => {
    try {
        const customer = await Customer.find({}).select("-password -cpassword -__v")
        res.send(customer)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})

//delete a customer from admin side
router.delete('/deletecustomer/:id', [
], async (req, res) => {

    // find the Customer to be delete and delete it
    let customer = await Customer.findById(req.params.id);
    if (!customer) { return res.status(404).send("Not Found") }
    console.log(req.params.id)
    customer = await Customer.findOneAndDelete({_id : req.params.id})
    res.json({ "Success" : "Customer has been Deleted" });
})



// get all service provider for admin
router.get('/getallprovider', async (req, res) => {
    try {
        const serviceprovider = await ServiceProvider.find({}).select("-password -cpassword -date -__v")
        res.send(serviceprovider)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})

//delete a provider from admin side
router.delete('/deleteprovider/:id', [
], async (req, res) => {

    // find the Serviec Provider to be delete and delete it
    let provider = await ServiceProvider.findById(req.params.id);
    if (!provider) { return res.status(404).send("Note Found") }

    provider = await ServiceProvider.findOneAndDelete({_id : req.params.id})
    res.json({ "Success" : "Provider has been Deleted" });
})


// Get all Contact Us Form for admin
router.get('/getallcontactus', async (req, res) => {
    try {
        const contactus = await ContactUs.find({})
        res.send(contactus)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})

//delete a provider from admin side
router.delete('/deletecontactus/:id', [
], async (req, res) => {

    // find the Serviec Provider to be delete and delete it
    let contactus = await ContactUs.findById(req.params.id);
    if (!contactus) { return res.status(404).send("Note Found") }

    contactus = await ContactUs.findOneAndDelete({_id : req.params.id})
    res.json({ "Success" : "Contact Us form has been Deleted" });
})

module.exports = router;
