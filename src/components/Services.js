import React from 'react'
import { Link } from 'react-router-dom'
import Authcheck from './Authcheck'
const Services = () => {
    return (
        <>
        <Authcheck/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-3 my-3">
                        <div className="card">
                            <img className="card-img-top w-80 my-3" src="https://demo.w3layouts.com/demosWTR/Freedom/30-03-2020/home-service-freedom-demo_Free/1435018137/web/assets/images/plumbing.jpg" alt="Nishant" />
                            <div className="card-block">
                                <h4 className="card-title text-center">Plumbing</h4>
                                <p className="card-text mx-2 mb-3 text-center">Design, Installation, Construction, Replacement, Service, Repair, Alteration, Or Modification Of The Pipes, Fixtures, And Other Apparatus Used For Bringing The Water Supply Into A Building And Removing Liquid And Water-Carried Wastes From A Building.</p>
                            </div>
                            <div className="d-grid gap-2 mx-auto mb-3">
                                <Link type="button" className="btn btn-outline-success" to="/plumbingservice">Book</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3 my-3">
                        <div className="card">
                            <img src="https://demo.w3layouts.com/demosWTR/Freedom/30-03-2020/home-service-freedom-demo_Free/1435018137/web/assets/images/electrician.jpg" className="d-block w-100 my-3" alt="nishant" />
                            <div className="card-block">
                                <h4 className="card-title text-center">Electrician</h4>
                                <p className="card-text mx-2 mb-3 text-center"> Installs And Repairs Electrical Wiring, Systems, And Fixtures In Buildings. Installs Conduits And Pipes To House Electrical Wires And Cables. Ensures Piping Complies With Electrical Codes. Installs Circuit Breakers And Other Electrical Hardware And Connects Wiring To Them.</p>
                            </div>
                            <div className="d-grid gap-2 mx-auto mb-3">
                                <Link type="button" className="btn btn-outline-success" to="/electricianservice">Book</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3 my-3">
                        <div className="card">
                            <img src="https://demo.w3layouts.com/demosWTR/Freedom/30-03-2020/home-service-freedom-demo_Free/1435018137/web/assets/images/carpenter.jpg" className="d-block w-100 my-3" alt="nishant" />
                            <div className="card-block">
                                <h4 className="card-title text-center">Carpenter</h4>
                                <p className="card-text mx-2 mb-3 text-center">Carpenters Construct, Install, And Repair A Variety Of Residential, Commercial, And Industrial Structures And Fixtures. In General, Carpenters Work With Wood, Steel, And Concrete Carpenters Must Have Manual Dexterity, An Eye For Detail, And The Ability To Solve Problems Quickly As They Arise.</p>
                            </div>
                            <div className="d-grid gap-2 mx-auto mb-3">
                                <Link type="button" className="btn btn-outline-success" to="/carpenterservice">Book</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3 my-3">
                        <div className="card">
                            <img src="https://demo.w3layouts.com/demosWTR/Freedom/30-03-2020/home-service-freedom-demo_Free/1435018137/web/assets/images/cleaning.jpg" className="d-block w-100 my-3" alt="nishant" />
                            <div className="card-block">
                                <h4 className="card-title text-center">Cleaning</h4>
                                <p className="card-text mx-2 mb-3 text-center">  Clean, Stock And Supply Designated Facility Areas. Dusting, Sweeping, Vacuuming, Mopping. Carry Out Deep Cleaning And Detailed Cleaning Tasks. Notify Management Of Deficiencies Or Repairs Required.</p>
                            </div>
                            <div className="d-grid gap-2 mx-auto mb-3">
                                <Link type="button" className="btn btn-outline-success" to="/cleaningservice">Book</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3 my-3">
                        <div className="card">
                            <img src="https://demo.w3layouts.com/demosWTR/Freedom/30-03-2020/home-service-freedom-demo_Free/1435018137/web/assets/images/housekeeping.jpg" className="d-block w-100 my-3" alt="nishant" />
                            <div className="card-block">
                                <h4 className="card-title text-center">House keeping</h4>
                                <p className="card-text mx-2 mb-3 text-center"> Housekeeping Refers To The Management Of Duties And Chores Involved In The Running Of A Household, Such As Cleaning, Cooking, Home Maintenance, Shopping, And Bill Payment. These Tasks May Be Performed By Members Of The Household, Or By Other Persons Hired For The Purpose.</p>
                            </div>
                            <div className="d-grid gap-2 mx-auto mb-3">
                                <Link type="button" className="btn btn-outline-success" to="/housekeepingservice">Book</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3 my-3">
                        <div className="card">
                            <img src="https://demo.w3layouts.com/demosWTR/Freedom/30-03-2020/home-service-freedom-demo_Free/1435018137/web/assets/images/wallpainting.jpg" className="d-block w-100 my-3" alt="nishant" />
                            <div className="card-block">
                                <h4 className="card-title text-center">Painting</h4>
                                <p className="card-text mx-2 mb-3 text-center"> House Painting Services </p>
                            </div>
                            <div className="d-grid gap-2 mx-auto mb-3">
                                <Link type="button" className="btn btn-outline-success" to="/paintingservice">Book</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services