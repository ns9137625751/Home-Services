import { useState } from "react";
import BookingContext from "./bookingContext";

const BookingState = (props) =>{
    const host = "http://localhost:5000"
    const bookingInitial = []
    const [booking, setBooking] = useState(bookingInitial)

    const addbooking = async (provider_id,customer_name,customer_address,customer_phonenumber)=>{
        const response = await fetch(`${host}/api/provider/booking`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ provider_id,customer_name,customer_address,customer_phonenumber })
        });
        const bookingg = await response.json();
        setBooking(booking.concat(bookingg))
    }
    return (
        <BookingContext.Provider value={{ booking, addbooking }}>
            {props.children}
        </BookingContext.Provider>
    )
}

export default BookingState