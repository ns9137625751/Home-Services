import React, { useState } from 'react'
import 'reactjs-popup/dist/index.css';
import PopUp from "../pop-up/popUp"

const Technician = (props) => {
  const [trigger, setTrigger] = useState(false);
  const editBTNfun = () => {
    console.log("hello");
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

            <button type="button" className="btn btn-outline-success mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{setTrigger(true)}}>
              Book Now
            </button>
            
          </div>
        </div >
      </div >
      <PopUp trigger={trigger} setTrigger={setTrigger}>
              <div className="input_div">
                <h1>Nishant</h1>
                <button onClick={editBTNfun}>submit</button>
              </div>
            </PopUp>
    </>
  )
}
export default Technician