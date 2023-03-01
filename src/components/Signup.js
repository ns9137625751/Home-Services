import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <div className="container mt-5 text-center">
        <Link type="button" className="btn btn-outline-success mx-2 my-2 " to='/signupcustomer'>Customer SignUp</Link>
        <Link type="button" className="btn btn-outline-success mx-2 my-2 " to='/signupserviceprovider'>Service Provider SignUp</Link>
      </div>
    </>
  )
}

export default Signup