import React, { useContext, useEffect } from 'react'
import swal from 'sweetalert';
import customerContext from '../context/customers/customersContext';
import Authcheck from './Authcheck';

const AdminCustomer = (props) => {
  const context = useContext(customerContext);
  const { customers, getallcustomers } = context;
  const { deletecustomer } = context;
  useEffect(() => {
    getallcustomers();
  }, [1])
  return (
    <>
    <Authcheck/>
      <div className="container mt-5">
        <div className="row">
          {customers && customers.map((item) => (
             <div className="col-sm-4 my-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"><b>Name: </b>{item.first_name} {item.last_name} </h5>
                  <h5 className="card-title"><b>Email: </b>{item.email} </h5>
                  <h5 className="card-title"><b>Phone Number: </b>{item.phone_number} </h5>
                  <h5 className="card-title"><b>Date of Created Account: </b>{item.date} </h5>
                  <h5 className="card-title"><b>ID: </b>{item._id} </h5>
                  <button type="button" className="btn btn-outline-danger" onClick={()=>{deletecustomer(item._id);swal("Opps!","Customer Deleted Successfully",'error')}}>Delete Customer</button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AdminCustomer