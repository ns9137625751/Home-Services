import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import Signup from './Signup'

const SignupServiceProvider = () => {
  const [credentials, setCredentials] = useState({ first_name: "", last_name: "", phone_number: "", email: "", password: "", cpassword: "", type_of_service: "", visiting_charge: "", gender: "" })
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch('');
    const { first_name, last_name, phone_number, email, password, cpassword, type_of_service, visiting_charge, gender } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createserviceprovider", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ first_name, last_name, phone_number, email, password, cpassword, type_of_service, visiting_charge, gender })
    });

    const json = await response.json()
    console.log(json)
    if (json.success) {
      // save the auth token and redirecting
      localStorage.setItem('token', json.authtoken);
      navigate('/')
      swal("Signup", "Signup successfully", "success")
    }
    else {
      swal("Opps!", "Enter Right Information", "error")
    }
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
    validateInput(e);
  }
  const [error, setError] = useState({ username: '', password: '', cpassword: '' })

  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };
      switch (name) {case "password":
          if (credentials.cpassword && value !== credentials.cpassword) {
            stateObj["cpassword"] = "!Password and Confirm Password does not match.";
          } else {stateObj["cpassword"] = credentials.cpassword ? "" : error.cpassword;}
          break;
        case "cpassword":
          if (credentials.password && value !== credentials.password) {
            stateObj[name] = "!Password and Confirm Password does not match.";}
          break;
        default:
          break;
      }
      return stateObj;
    });
  }

  return (
    <>
      <div className="container">
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
                      placeholder="Enter a password here" autoComplete="on" value={credentials.password} onChange={onChange} onBlur={validateInput} />
                    {error.password && <span className='err' style={{ "color": "red" }}>{error.password}</span>}
                  </div>
                  <div className="form-outline mb-3">
                    <input type="password" id="cpassword" name='cpassword' className="form-control form-control-lg"
                      placeholder="Enter a Confirm password" autoComplete="on" value={credentials.cpassword} onChange={onChange} onBlur={validateInput} />
                    {error.cpassword && <span className='err' style={{ "color": "red" }}>{error.cpassword}</span>}
                  </div>

                  <select className="form-control form-control-lg selectpicker mb-4" id='type_of_service' name='type_of_service' onChange={onChange}>
                    <option value="none" selected disabled hidden>Select Your Service</option>
                    <option>Plumbing</option>
                    <option>Electrician</option>
                    <option>Carpenter</option>
                    <option>Cleaning</option>
                    <option>House keeping</option>
                    <option>Painting</option>
                  </select>

                  <div className="form-outline mb-4">
                    <input type="number" id="visiting_charge" name='visiting_charge' className="form-control form-control-lg"
                      placeholder="Enter a Your Charge here" onChange={onChange} />
                  </div>
                  <select className="form-control form-control-lg selectpicker mb-4" id='gender' name='gender' onChange={onChange}>
                    <option value="none" selected disabled hidden>Select Your Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
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

export default SignupServiceProvider