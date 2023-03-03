import React from 'react';
import { Link } from 'react-router-dom';
import LoginCustomer from './LoginCustomer';

const Login = () => {

    return (
        <>
            <div className="container mt-5 text-center">
                <Link type="button" className="btn btn-outline-success mx-2 my-2 " to='/logincustomer'>Customer Login</Link>
                <Link type="button" className="btn btn-outline-success mx-2 my-2 " to='/loginserviceprovider'>Service Provider Login</Link>
            </div>
                {/* <LoginCustomer/> */}
        </>
    )
}

export default Login
