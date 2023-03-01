import { useState } from "react";
import customersContext from "./customersContext";



const CustomerState = (props)=>{

    const host = "http://localhost:5000"
    const customersInitial = ["Nishant"]
    const [customers, setCustomers] = useState(customersInitial)


    const getallcustomers = async () => {
        const response = await fetch(`${host}/api/admin/getallcustomer`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const json = await response.json()
        setCustomers(json)
      }
    
      // delete a customer
      const deletecustomer = async (id) => {
        console.log(id)
        const response = await fetch(`${host}/api/admin/deletecustomer/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const json = response.json();
        const newCustomer = customers.filter((customers) => { return customers._id !== id })
        setCustomers(newCustomer)
      }
    

      return (
        <customersContext.Provider value={{ customers,getallcustomers, deletecustomer }}>
          {props.children}
        </customersContext.Provider>
      )
    }
    export default CustomerState;
