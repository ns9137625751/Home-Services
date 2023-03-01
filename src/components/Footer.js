import React from 'react';
import { CgMail } from "react-icons/cg";
import { Link } from 'react-router-dom'
import { BsTelephoneXFill } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { TfiLocationPin } from "react-icons/tfi";



const Footer = () => {
    const mystyle={'backgroundColor':'#deeded'} 
    return (

        <>
            <div className='d-flex flex-column min-vh-100 '>
                <footer className="bd-footer py-4 py-md-5 mt-5 mt-auto" style={mystyle} >
                    <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary ">
                        <div className="row">
                            <div className="col-lg-3 mb-3">
                                <Link className="d-inline-flex align-items-center mb-2 text-body-secondary text-decoration-none" to="/" aria-label="Bootstrap">
                                    <span className="fs-5">Home Services</span>
                                </Link>
                                <ul className="list-unstyled small">
                                    <li className="mb-2">Home Services is a website where you may hire technicians for your work.</li>
                                    <li>For Tasks Like Electrical Work, Painting, Furniture Work, Washing Machines, Modular Kitchen, Carpet Cleaning etc. You Can Hire a Technician.</li>
                                    
                                </ul>
                            </div>

                            <div className="col-6 col-lg-2 offset-lg-1 mb-3">
                                <h5>Links</h5>
                                <ul className="list-unstyled">

                                    <li className="mb-2 text-success"><Link className='text-reset text-decoration-none' to="/">Home</Link></li>
                                    <li className="mb-2 text-success"><Link className='text-reset text-decoration-none' to="/services">Serivices</Link></li>
                                    <li className="mb-2 text-success"><Link className='text-reset text-decoration-none' to="/contactus">Contact Us</Link></li>
                                    {/* <li className="mb-2 text-success"><Link className='text-reset text-decoration-none' to="login">Login</Link></li>
                                <li className="mb-2 text-success"><Link className='text-reset text-decoration-none' to="signup">SignUp</Link></li>
                                <li className="mb-2 text-success"><Link className='text-reset text-decoration-none' to="adminlogin">Admin Login</Link></li> */}
                                </ul>
                            </div>

                            {/* Contact */}
                            <div className="col-6 col-lg-2 offset-lg-1 mb-3">
                                <h5>Contact</h5>
                                <ul className="list-unstyled">
                                    <li className="mb-2"><a className='text-decoration-none text-success' target="_blank" rel="noreferrer"  href="https://www.google.com/search?tbm=lcl&q=Nishant+Shekhada&rflfq=1&num=20&stick=H4sIAAAAAAAAACWQS0rEQBiEmYXiUhxxkVWO8L8flxDBEwSNRBwcmfFEnsBzeQqrNSEdqP7766q6upz2Zkqe5EEl1SkaNt2yMXO6slNZi-MTqPibMcbCiiwrhIaaElDNXESJszKnPYc5U3BEWbSmuk17YeBpbDAW1YhB5RJpgg8hUEnt3wGgaiQUeKiTq__uKnONArHCDYihapGmIUYKE9wkJVRyFqFk68IV7aUBVTyUSAvwdDEOEpSQkASvgdo9YmA0E0GjsMWsqGdg942TIqOedjjk1kawcGRpjIS2wTvRdAOPHKpdwUjNHDidyS7IQOSOzhoGRlY0CaJyApIkqaPXEnTUGqgfBDVW-97tfnZ3D-vx47DOy-F8nM_rcnra5pfj6evi-v71vC3vn_Pjtr5ty_PyC_2qccbgAQAA&ved=2ahUKEwiUr4y1x9X8AhUxUGwGHf_DCOIQjHJ6BAhbEAU&rldimm=4430570560828972364"><TfiLocationPin/> B/26 KrushnKunj Society, Hirawadi Road, Thakkarbapanagar Ahmedabad, Gujarat-382350</a>.</li>

                                    <li className="mb-2 text-success"><p className='text-reset text-decoration-none'><BsTelephoneXFill /> +91 97377 87107</p></li>
                                    <li className="mb-2 text-success"><p className='text-reset text-decoration-none'><CgMail /> nishant@gmail.com</p></li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-2 offset-lg-1 mb-3">
                                <h5>Social Media</h5>
                                <ul className="list-unstyled">
                                    <a className='text-reset text-decoration-none mx-2' target="_blank" href="https://instagram.com/i_.nishant._" rel="noreferrer" ><SlSocialInstagram /></a>
                                    <a className='text-reset text-decoration-none mx-2' target="_blank" href="https://www.linkedin.com/in/nishant-shekhada/" rel="noreferrer" ><SlSocialLinkedin /></a>
                                    <a className='text-reset text-decoration-none mx-2' target="_blank" href="www.facebook.com"><SlSocialFacebook /></a>
                                    <a className='text-reset text-decoration-none mx-2' target="_blank" href="https://www.youtube.com/@nishantshekhada7906" rel="noreferrer" ><SlSocialYoutube /></a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                <p className='text-center text-success' style={mystyle}>All right Reserved By Nishant Shekhada @2023</p>
            </div>
        </>
    )
}

export default Footer