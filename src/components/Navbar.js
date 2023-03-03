import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from "react-router-dom";
const Navbar = (props) => {
    const navigate = useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem('token');
        navigate('/home');
        props.showAlert("Logout Successfull","success");
    }
    
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{'backgroundColor':'#deeded'}} >
                <div className="container-fluid">
                    <Link className="navbar-brand lead fs-4 " to="/">Home Services</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contactus">Contact Us</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token')?
                        <form className="d-flex" role="search">
                        <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                        <Link className="nav-link active mx-3" aria-current="page" to="/signupcustomer">Signup</Link>
                        <Link className="nav-link active" aria-current="page" to="/adminlogin">Admin Login</Link>
                        </form>
                        :<Link className="nav-link active" aria-current="page" onClick={handleLogout}>Logout</Link>}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar