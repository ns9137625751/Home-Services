import React, { useContext, useEffect } from 'react'
import providerContext from '../context/Providers/providersContext'
import { useState } from 'react'
import bookingContext from '../context/booking/bookingContext'
import Technician from './Technician'


const PlumbingService = () => {
  const context = useContext(providerContext);
  const { providers, getcarpenterprovider } = context;
  useEffect(() => {
    getcarpenterprovider();
  }, [1])

  const contextt = useContext(bookingContext);
  const { addbooking } = contextt;
  const [booking, setBooking] = useState({ provider_id: "", customer_name: "", customer_address: "", customer_phonenumber: "" })
  const handleClick = (e) => {

    e.preventDefault();
    addbooking(booking.provider_id, booking.customer_name, booking.customer_address, booking.customer_phonenumber);
    setBooking({ provider_id: "", customer_name: "", customer_address: "", customer_phonenumber: "" });

  }
  const onChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row">  
        {providers && providers.map((item) => {
           return <Technician item={item} key={item._id}/>
})}
        </div>
      </div>
    </>
  )
}

export default PlumbingService