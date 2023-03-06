import React from 'react'
import { Link } from 'react-router-dom'
import Authcheck from './Authcheck'
const Services = () => {
    return (
        <>
        {/* <Authcheck/> */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-3 my-3">
                        <div className="card">
                            <img className="card-img-top w-80 my-3" src="https://demo.w3layouts.com/demosWTR/Freedom/30-03-2020/home-service-freedom-demo_Free/1435018137/web/assets/images/plumbing.jpg" alt="Nishant" />
                            <div className="card-block">
                                <h4 className="card-title text-center">Plumbing</h4>
                                <p className="card-text mx-2 mb-3 text-center">Plumbing services are provided by professionals who specialize in the installation, maintenance, and repair of plumbing systems in residential, commercial, and industrial properties. Plumbers are trained to work with a wide range of plumbing systems and components, including pipes, fixtures, water heaters, and sewage systems. <br /> Plumbing services can include a variety of tasks, such as installing new plumbing systems, upgrading existing systems, troubleshooting plumbing issues, and repairing or replacing faulty components.</p>
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
                                <p className="card-text mx-2 mb-3 text-center">Electrician services are provided by professionals who specialize in the installation, maintenance, and repair of electrical systems in residential, commercial, and industrial properties. Electricians are trained to work with a wide range of electrical systems and components, including wiring, circuit breakers, outlets, and lighting fixtures. <br /> Electrician services can include a variety of tasks, such as installing new electrical systems, upgrading existing systems, troubleshooting electrical issues, and repairing or replacing faulty components.</p>
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
                                <p className="card-text mx-2 mb-3 text-center">Carpentry services are provided by professionals who specialize in the construction, installation, and repair of wooden structures and components. Carpenters can work on a wide range of projects, from simple repairs and installations to complex custom designs. <br /> Carpentry services can include a variety of tasks, such as framing and constructing buildings, installing cabinetry and shelving, repairing or replacing wooden floors, repairing or replacing doors and windows, and building custom furniture and other wooden fixtures.</p>
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
                                <p className="card-text mx-2 mb-3 text-center">Cleaning services are provided by professionals who specialize in cleaning and maintaining various types of properties, including residential homes, commercial buildings, and industrial facilities. Cleaning services can include a wide range of tasks, such as dusting, vacuuming, mopping, and sanitizing surfaces. <br /> Some cleaning services may specialize in specific areas, such as carpet cleaning, window cleaning, or post-construction cleaning. Others may provide more extensive services, such as deep cleaning, floor waxing and polishing, and pressure washing.</p>
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
                                <p className="card-text mx-2 mb-3 text-center"> Housekeeping services are provided by professionals who specialize in cleaning and maintaining residential properties. These services can range from daily or weekly cleaning to more extensive deep cleaning and organizational tasks.
                               <br/> Housekeeping services can include a wide range of tasks, such as vacuuming, dusting, mopping floors, cleaning bathrooms and kitchens, changing bed linens, and doing laundry. Housekeepers may also provide additional services, such as organizing closets, running errands, and grocery shopping.</p>
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
                                <p className="card-text mx-2 mb-3 text-center"> Professional painting services can include interior and exterior painting, as well as painting of various surfaces such as walls, ceilings, doors, and trim. They can also involve wallpaper removal, texturing, and other decorative finishes.<br/>When choosing a painting service provider, it's important to consider their experience, reputation, and the quality of their work. A skilled painter will not only provide a high-quality finish, but they will also ensure that the work is done efficiently, with minimal disruption to your daily routine.</p>
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