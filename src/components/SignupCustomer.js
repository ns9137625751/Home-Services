import { Link } from 'react-router-dom'
import Signup from './Signup'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignupCusomer = (props) => {
    const [credentials, setCredentials] = useState({ first_name: "", last_name: "", phone_number: "", email: "", password: "", cpassword: "" })
    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch('');
        const { first_name, last_name, phone_number, email, password, cpassword } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createcustomer", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ first_name, last_name, phone_number, email, password, cpassword })
        });

        const json = await response.json()
        if (json.success) {
            // save the auth token and redirecting
            localStorage.setItem('token', json.authtoken);
            navigate('/')
            props.showAlert("Signup successfully", "success")
        }
        else {
            props.showAlert("Enter Right Information", "danger")
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="container my-5">
                <Signup />
                <section className="vh-100">
                    <div className="container-fluid h-custom">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-9 col-lg-6 col-xl-5">
                                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" */}
                                <img src="https://www.idsopm.org/wp-content/uploads/2020/12/registration_dark.png"

                                    className="img-fluid" alt='nishant' />
                            </div>

                            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

                                <form className='my-5' onSubmit={handleSubmit}>

                                    <div className="form-outline mb-4">
                                        <input type="text" id="first_name" name='first_name' className="form-control form-control-lg"
                                            placeholder="Enter Fist Name here" onChange={onChange} />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="text" id="last_name" name='last_name' className="form-control form-control-lg"
                                            placeholder="Enter a Last Name here" onChange={onChange} />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="email" id="email" name='email' className="form-control form-control-lg"
                                            placeholder="Enter a valid email address" onChange={onChange} />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="number" id="phone_number" name='phone_number' className="form-control form-control-lg"
                                            placeholder="Enter a Phone Number here" onChange={onChange} />

                                    </div>
                                    <div className="form-outline mb-3">
                                        <input type="password" id="password" name='password' className="form-control form-control-lg"
                                            placeholder="Enter a password here" autoComplete="on" onChange={onChange} />
                                    </div>
                                    <div className="form-outline mb-3">
                                        <input type="password" id="cpassword" name='cpassword' className="form-control form-control-lg"
                                            placeholder="Enter a Confirm password" autoComplete="on" onChange={onChange} />
                                    </div>
                                    <div className="text-center text-lg-start mt-4 pt-2">
                                        <button type="submit" className="btn btn-outline-success">Register</button>
                                        <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <Link to="/login"
                                            className="link-danger">Login</Link></p>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                </section>

            </div>
        </>
    )
}

export default SignupCusomer