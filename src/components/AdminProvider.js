import React, { useContext, useEffect } from 'react'
import providerContext from '../context/Providers/providersContext'
import Authcheck from './Authcheck';


const AdminProvider = (props) => {
  const context = useContext(providerContext);
  const { providers, getallprovider } = context;
  const { deleteprovider } = context;
  useEffect(() => {
    getallprovider();
  }, [1])


  return (
    <>
    <Authcheck/>
      <div className="container mt-5">
        <div className="row">
          {providers && providers.map((item) => {
            return <div className="col-sm-4 my-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"><b>Name: </b>{item.first_name} {item.last_name} </h5>
                  <h5 className="card-title"><b>Email: </b>{item.email} </h5>
                  <h5 className="card-title"><b>Phone Number: </b>{item.phone_number} </h5>
                  <h5 className="card-title"><b>Type of Service: </b>{item.type_of_service} </h5>
                  <h5 className="card-title"><b>Visiting Charge: </b>{item.visiting_charge} </h5>
                  <h5 className="card-title"><b>Gender: </b>{item.gender} </h5>
                  <h5 className="card-title"><b>Id: </b>{item._id} </h5>
                  <button type="button" className="btn btn-outline-danger" onClick={()=>{deleteprovider(item._id);props.showAlert("Note Deleted Successfully", "danger")}}>Delete Service Provider</button>

                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default AdminProvider