import React, { useContext, useEffect } from 'react'
import swal from 'sweetalert';
import contactusContext from '../context/contactus/contactusContext';
import Authcheck from './Authcheck';

const AdminContactUs = () => {
    const context = useContext(contactusContext);
    const { allcontactus, getallcontactus } = context;
    const { deletecontactus } = context;
    useEffect(() => {getallcontactus()}, [1])
  return (
    <>
    <Authcheck/>
      <div className="container mt-5">
        <div className="row">
          {allcontactus && allcontactus.map((item) => {
            return <div className="col-sm-4 my-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"><b>Name: </b>{item.name}</h5>
                  <h5 className="card-title"><b>Email: </b>{item.email} </h5>
                  <h5 className="card-title"><b>Phone Number: </b>{item.phone_number}</h5>
                  <h5 className="card-title"><b>Subject: </b>{item.subject}</h5>
                  <h5 className="card-title"><b>Message: </b>{item.message}</h5>
                  <h5 className="card-title"><b>Date: </b>{item.date}</h5>
                  <button type="button" className="btn btn-outline-danger" onClick={()=>{deletecontactus(item._id);swal("Deleted!","Contact Us form Deleted Successfully","success")}}>Delete</button>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default AdminContactUs