import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch('');
    const response = await fetch("http://localhost:5000/api/auth/adminlogin", {
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
      swal("Great!","Login Successfully",'success')
      navigate('/adminhome')
    }
    else {
      swal("Opps!","Email and password does't matched", "error")

    }
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="container my-5">

        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
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
                    <button type="submit" className="btn btn-outline-success">Login</button>
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

export default AdminLogin
