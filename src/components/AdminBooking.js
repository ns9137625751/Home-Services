import React, { useContext, useEffect } from 'react'
import bookingContext from '../context/adminbooking/bookingContext';
import Authcheck from './Authcheck';

const AdminBooking = (props) => {
  const context = useContext(bookingContext);
  const { bookings, getallbookings } = context;
  const { deletebooking } = context;
  useEffect(() => {
    getallbookings();
  }, [1])
  return (
    <>
    <Authcheck/>
      <div className="container mt-5">
        <div className="row">
          {bookings && bookings.map((item) => {
            return <div className="col-sm-4 my-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"><b>Provider id: </b>{item.provider_id}</h5>
                  <h5 className="card-title"><b>Customer Name: </b>{item.customer_name} </h5>
                  <h5 className="card-title"><b>Customer Address: </b>{item.customer_address} </h5>
                  <h5 className="card-title"><b>Customer Phone Number: </b>{item.customer_phonenumber} </h5>
                  <button type="button" className="btn btn-outline-danger" onClick={()=>{deletebooking(item._id);props.showAlert("Booking Deleted Successfully", "danger")}}>Delete Booking</button>

                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default AdminBooking