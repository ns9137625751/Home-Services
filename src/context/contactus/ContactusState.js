import { useState } from "react";
import ContactusContext from "./contactusContext";

const ContactusState = (props) => {
    const host = "http://localhost:5000"
    const contactusInitial = []
    const [contactus, setContactus] = useState(contactusInitial)

    const addcontactus = async (name, email, phone_number, subject, message) => {
        const response = await fetch(`${host}/api/contactus/contactusform`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ name, email, phone_number, subject, message })
        });
        const contactuss = await response.json();
        setContactus(contactus.concat(contactuss))
    }

    return (
        <ContactusContext.Provider value={{ contactus, addcontactus }}>
            {props.children}
        </ContactusContext.Provider>
    )
}
export default ContactusState