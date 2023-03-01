import { useState } from "react";
import bookingContext from "./bookingContext";


const AdminBookingState = (props) => {

    const host = "http://localhost:5000"
    const bookingInitial = ["Nishant"]
    const [bookings, setBooking] = useState(bookingInitial)

    // get all bookings for admin
    const getallbookings = async () => {
        const response = await fetch(`${host}/api/admin/getallbooking`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json()
        setBooking(json)
    }

    // delete a booking from admin side
    const deletebooking = async (id) => {
        const response = await fetch(`${host}/api/customer/deletebooking/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = response.json();
        const newBooking = bookings.filter((bookings) => { return bookings._id !== id })
        setBooking(newBooking)
    }


    return (
        <bookingContext.Provider value={{ bookings, getallbookings, deletebooking }}>
            {props.children}
        </bookingContext.Provider>
    )
}
export default AdminBookingState;
