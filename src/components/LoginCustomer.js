import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './Login'

const LoginCustomer = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch('');
        const response = await fetch("http://localhost:5000/api/auth/customerlogin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });

        const json = await response.json()
        if (json.success) {
            // save the auth token and redirecting
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Login Successfully", "success");
            navigate('/services')
        }
        else {
            props.showAlert("Email and password does't matched", "danger");
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (

        <>
            <div className="container my-5">
                <Login />
                <h1 className='text-center'>Customer Login</h1>
                <section className="vh-100">
                    <div className="container-fluid h-custom">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-9 col-lg-6 col-xl-5">
                                <img src="https://www.bursar.psu.edu/sites/bursar/files/styles/image_cropper/public/news/login_for_feature.jpg?itok=ZYO6Ik2U&c=542520393ce4b28264a797cde36e2840"
                                    className="img-fluid" alt='nishant' />
                            </div>

                            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                <form className='my-5' onSubmit={handleSubmit}>
                                    <div className="form-outline mb-4">
                                        <input type="email" id="email" name='email' className="form-control form-control-lg"
                                            placeholder="Enter a valid email address" value={credentials.email} onChange={onChange} />
                                    </div>
                                    <div className="form-outline mb-3">
                                        <input type="password" id="password" name='password' className="form-control form-control-lg"
                                            placeholder="Enter password" value={credentials.password} onChange={onChange} />
                                    </div>
                                    <div className="text-center text-lg-start mt-4 pt-2">
                                        <button type="submit" className="btn btn-outline-success" >Login</button>
                                        <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/signupcustomer"
                                            className="link-danger">Register</Link></p>
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

export default LoginCustomer