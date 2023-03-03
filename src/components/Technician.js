import React,{useContext,useState} from 'react'
import bookingContext from '../context/booking/bookingContext'

const Technician = (props) => {
    
  const handleClick = (e) => {
    e.preventDefault();
    addbooking(booking.provider_id, booking.customer_name, booking.customer_address, booking.customer_phonenumber);
    setBooking({ provider_id: "", customer_name: "", customer_address: "", customer_phonenumber: "" });
    props.showAlert("Booking successfully completed", "success");
  }

  const onChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value })
  }

  const [modal, setModal] = useState(false);
  const contextt = useContext(bookingContext);
  const { addbooking } = contextt;
  const [booking, setBooking] = useState({ provider_id: "", customer_name: "", customer_address: "", customer_phonenumber: "" })
  const toggleModal = () => {
    setModal(!modal)
  }
    return (
        <>
            <div className="col-sm-4 my-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"><b>Name: </b>{props.item.first_name} {props.item.last_name} </h5>
                  <h5 className="card-title"><b>Email: </b>{props.item.email} </h5>
                  <h5 className="card-title"><b>Phone Number: </b>{props.item.phone_number} </h5>
                  <h5 className="card-title"><b>Visiting Charge: </b>{props.item.visiting_charge} </h5>
                  <h5 className="card-title"><b>Gender: </b>{props.item.gender} </h5>
                  <h5 className="card-title"><b>Id: </b>{props.item._id} </h5>

                  <button type="button" className="btn btn-outline-success mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Book Now
                  </button>

                  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title text-center" id="exampleModalLabel">Submit Your Information</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="form-outline mx-3 my-2">
                          <input type="text" id="customer_name" name='customer_name' className="form-control form-control-lg" 
                            placeholder="Enter Name here" onChange={onChange} value={booking.customer_name } />
                        </div>

                        <div className="form-outline mx-3 my-2">
                          <input id={props.item._id} name={props.item._id} className="form-control form-control-lg" readOnly
                             value={props.item._id}  />
                        </div>

                          {/* <input id={props.item._id} name={props.item._id} className="form-control form-control-lg" 
                            placeholder="Enter provider id here" value={props.item._id} /> */}

                        <div className="form-outline mx-3 my-2">
                          <input type="number" id="customer_phonenumber" name='customer_phonenumber' className="form-control form-control-lg" 
                            placeholder="Enter Phone Number here" onChange={onChange} value={booking.customer_phonenumber} />
                        </div>
                        <div className="form-outline mx-3 my-2">
                          <input type="text" id="customer_address" name='customer_address' className="form-control form-control-lg" 
                            placeholder="Enter Address here" onChange={onChange} value={booking.customer_address} />
                        </div>
                        <div className="d-grid gap-2 col-2 mx-auto">
                          <button type="submit" className="btn btn-outline-success my-3" data-bs-dismiss="modal" onClick={handleClick}>Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default Technician