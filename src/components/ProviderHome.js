import React, { useContext, useEffect } from 'react'
import swal from 'sweetalert';
import providerContext from '../context/Providers/providersContext'
import Authcheck from './Authcheck';

const ProviderHome = () => {
  const context = useContext(providerContext);

  const { allbookings, fetchallbookings ,deletebooking} = context;
  useEffect(() => {
    fetchallbookings();
  }, [1])

  return (

    <>
    <Authcheck/>
      <div className="container mt-5">
        <div className="row">
          {allbookings && allbookings.map((item) => (
            <div className="col-sm-4 my-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"><b>Customer Name: </b>{item.customer_name} </h5>
                  <h5 className="card-title"><b>Customer Phone Number: </b>{item.customer_phonenumber} </h5>
                  <h5 className="card-title"><b>Customer Address: </b>{item.customer_address} </h5>
                  <h5 className="card-title"><b>Date: </b>{item.date} </h5>
                  <button type="button" className="btn btn-outline-danger" onClick={()=>{deletebooking(item._id);swal("Deleted!","Booking Deleted Successfully","success")}}>Delete Booking</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default ProviderHome