import React, { useState ,useContext} from 'react'
import contactusContext from '../context/contactus/contactusContext'
import Authcheck from './Authcheck';

const Contactus = (props) => {
    const context = useContext(contactusContext);
    const { addcontactus } = context;
    const [contactus, setContactus] = useState({ name:"", email:"", phone_number:"", subject:"", message:"" })
    const handleClick = (e) => {
        e.preventDefault();
        addcontactus(contactus.name, contactus.email, contactus.phone_number,contactus.subject,contactus.message);
        setContactus({name:"", email:"", phone_number:"", subject:"", message:""});
        props.showAlert("Form submited successfully, We will Contact you as soon as Possible", "success")
    }
    const onChange = (e) => {
        setContactus({ ...contactus, [e.target.name]: e.target.value })
    }
    
    return (
        <>
        {/* <Authcheck/> */}
        {/* <Navbar /> */}
            <div className="container my-5">
                <h1 className='text-center'>Write to Us</h1>
                <h4 className='text-center'>Get In Touch</h4>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Your Name</label>
                        <input type="text" className="form-control" id="name" name='name' onChange={onChange} value={contactus.name}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Your Email</label>
                        <input type="email" className="form-control" id="email" name='email' onChange={onChange} value={contactus.email}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Your Mobile Number</label>
                        <input type="number" className="form-control" id="phone_number" name='phone_number' onChange={onChange} value={contactus.phone_number}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">Subject</label>
                        <input type="text" className="form-control" id="subject" name='subject' onChange={onChange} value={contactus.subject} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
                        <textarea className="form-control" id="message" name='message' rows="3" onChange={onChange} value={contactus.message}></textarea>
                    </div>
                    <div className="d-grid gap-2 col-1 mx-auto">
                        <button type="button" className="btn btn-outline-success" onClick={handleClick}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contactus