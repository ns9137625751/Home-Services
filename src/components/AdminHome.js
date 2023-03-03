import React from 'react'
import { Link } from 'react-router-dom'
import Authcheck from './Authcheck'

const AdminHome = () => {
    return (
        <>
            <Authcheck />
            <div className="container my-5">
                <div className="row">
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card text-bg-success mb-3 text-decoration-none">
                            <Link to="admincustomer" className="card-body text-decoration-none">
                                <h5 className="card-title text-center">All Customers Data</h5>
                                <p className="card-text text-center">If you want to show all Registed Customers Data than Click here.</p>
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card text-bg-danger mb-3 text-decoration-none">
                            <Link to="adminprovider" className="card-body text-decoration-none">
                                <h5 className="card-title text-center">All Service Providers Data</h5>
                                <p className="card-text text-center">If you want to show all Service Providers Data than Click here.</p>
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card text-bg-warning mb-3 text-decoration-none">
                            <Link to="adminbooking" className="card-body text-decoration-none">
                                <h5 className="card-title text-center">All Booking Data</h5>
                                <p className="card-text text-center">If you want to show all Service Bookings Data than Click here.</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminHome