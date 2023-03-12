import { useState } from "react";
import ContactusContext from "./contactusContext";

const ContactusState = (props) => {
    const host = "http://localhost:5000"
    const contactusInitial = []
    const [contactus, setContactus] = useState(contactusInitial)
    const [allcontactus, setAllcontactus] = useState("")

    const addcontactus = async (name, email, phone_number, subject, message) => {
        const response = await fetch(`${host}/api/contactus/contactusform`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, phone_number, subject, message })
        });
        const contactuss = await response.json();
        setContactus(contactus.concat(contactuss))
    }

    // get all Contact Us form for admin
    const getallcontactus = async () => {
        const response = await fetch(`${host}/api/admin/getallcontactus`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json()
        setAllcontactus(json)
    }

    // delete a Contact Us form from admin side
    const deletecontactus = async (id) => {
        const response = await fetch(`${host}/api/admin/deletecontactus/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = response.json();
        const newContactus = allcontactus.filter((allcontactus) => { return allcontactus._id !== id })
        // console.log("deletd")
        setAllcontactus(newContactus)
    }

    return (
        <ContactusContext.Provider value={{ contactus, addcontactus, allcontactus, getallcontactus, deletecontactus }}>
            {props.children}
        </ContactusContext.Provider>
    )
}
export default ContactusState