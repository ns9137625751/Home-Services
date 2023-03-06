import React, { useContext, useEffect, useState } from 'react'
import providerContext from '../context/Providers/providersContext'
import Authcheck from './Authcheck';
import PopUp from "../pop-up/popUp"
import bookingContext from '../context/booking/bookingContext'


const PlumbingService = (props) => {
  const context = useContext(providerContext);
  const contextt = useContext(bookingContext);

  const { providers, gethousekeepingprovider } = context;
  const { addbooking } = contextt;

  const [id, setId] = useState("")
  const [trigger, setTrigger] = useState(false);
  const [booking, setBooking] = useState({ provider_id: "", customer_name: "", customer_address: "", customer_phonenumber: "" })

  useEffect(() => {
    gethousekeepingprovider();
  }, [1])

  const sample = (id) => {
    setId(id)
    setTrigger(true)
  }

  const handleClick = (e) => {
    e.preventDefault();
    addbooking(id, booking.customer_name, booking.customer_address, booking.customer_phonenumber);
    setBooking({ provider_id: "", customer_name: "", customer_address: "", customer_phonenumber: "" });
    setTrigger(false)
    props.showAlert("Booking successfully completed", "success");
  }
  const onChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Authcheck />
      <div className="container mt-5">
        <div className="row">
          {providers && providers.map((item) => (
            <div className="col-sm-4 my-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"><b>Name: </b>{item.first_name} {item.last_name} </h5>
                  <h5 className="card-title"><b>Email: </b>{item.email} </h5>
                  <h5 className="card-title"><b>Phone Number: </b>{item.phone_number} </h5>
                  <h5 className="card-title"><b>Visiting Charge: </b>{item.visiting_charge} </h5>
                  <h5 className="card-title"><b>Gender: </b>{item.gender} </h5>
                  <button type="button" className="btn btn-outline-success mt-2" onClick={() => sample(item._id)}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <PopUp trigger={trigger} setTrigger={setTrigger}>

          <div className="container">
            <div className="modal-header mt-3">
              <h3 className="text-center">Submit Your Information</h3>
              <button type="button" className="btn-close" onClick={() => setTrigger(false)} aria-label="Close"> </button>
            </div>
            <div className="form-outline mx-3 mt-2">
              <input type="text" id="customer_name" name='customer_name' className="form-control form-control-lg"
                placeholder="Enter Name here" onChange={onChange} value={booking.customer_name} />
            </div>

            <div className="form-outline mx-3 my-2">
              <input type="number" id="customer_phonenumber" name='customer_phonenumber' className="form-control form-control-lg"
                placeholder="Enter Phone Number here" onChange={onChange} value={booking.customer_phonenumber} />
            </div>

            <div className="form-outline mx-3 my-2">
              <input type="text" id="customer_address" name='customer_address' className="form-control form-control-lg"
                placeholder="Enter Address here" onChange={onChange} value={booking.customer_address} />
            </div>

            <div className="form-outline mx-3 my-2">
              <input type="hidden" id="provider_id" name='provider_id' className="form-control form-control-lg"
                onChange={onChange} value={id} />
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
              <button type="submit" className="btn btn-outline-success" onClick={handleClick} >Submit</button>
              <button className='btn btn-outline-success' onClick={() => setTrigger(false)} >close</button>
            </div>

          </div></PopUp>
      </div>
    </>
  )
}

export default PlumbingService