import React from 'react'
import { Link } from 'react-router-dom'

const HomeHeader = () => {
    return (
        <>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>

                    {/* 1 */}
                    <div className="carousel-inner" style={{"height":"600px"}}>
                        <div className="carousel-item active" style={{"height":"700px"}}>
                            <img src="https://images.pexels.com/photos/713297/pexels-photo-713297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." style={{}}/>
                            <div className="carousel-caption h-50 align-items-center justify-content-center">
                                <h6 className="tag-cover-9"><b> We Provide Quality Service </b></h6>
                                <h1 className="title-cover-9"><b> Home Maintenance And Services For You </b></h1>
                                <p className="para-cover-9">
                                    <b> The Home  Service Website Is  Very Useful Because You Can Don’t Have To Visit To Service Provider’s Office, You Can Easily Book Service Via This Website. </b>
                                </p>
                                <Link to="/" type="button" className="btn btn-success mx-1">Read More</Link>
                                <Link to="contactus" type="button" className="btn btn-success mx-1">Get In Touch</Link>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="carousel-item" style={{"height":"700px"}}>
                            <img src="https://images.pexels.com/photos/4239036/pexels-photo-4239036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
                            <div className="carousel-caption h-50 align-items-center justify-content-center">
                                <h6 className="tag-cover-9"><b>We Provide Quality Service </b></h6>
                                <h1 className="title-cover-9"><b>We are Professional and provide repair Services</b></h1>
                                <p className="para-cover-9"></p>
                                <Link to="/" type="button" className="btn btn-success mx-1">Read More</Link>
                                <Link to="contactus" type="button" className="btn btn-success mx-1">Get In Touch</Link>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="carousel-item" style={{"height":"700px"}}>
                            <img src="https://images.pexels.com/photos/2898199/pexels-photo-2898199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
                            <div className="carousel-caption h-50 align-items-center justify-content-center">
                                <h6 className="tag-cover-9"><b>We Provide Quality Service</b></h6>
                                <h1 className="title-cover-9"><b>The Best Company To Provide Home Services</b></h1>
                                <p className="para-cover-9"><b></b></p>
                                <Link to="/" type="button" className="btn btn-success mx-1">Read More</Link>
                                <Link to="contactus" type="button" className="btn btn-success mx-1">Get In Touch</Link>
                            </div>
                        </div>

                        {/* 4 */}
                        <div className="carousel-item" style={{"height":"700px"}}>
                            <img src="https://images.pexels.com/photos/8961401/pexels-photo-8961401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
                            <div className="carousel-caption h-50 align-items-center justify-content-center">
                                <h6 className="tag-cover-9"><b>We Provide Quality Service</b></h6>
                                <h1 className="title-cover-9"><b>The Most Targetted Cleaning Services</b></h1>
                                <p className="para-cover-9"> <b></b></p>
                                <Link to="/" type="button" className="btn btn-success mx-1">Read More</Link>
                                <Link to="contactus" type="button" className="btn btn-success mx-1">Get In Touch</Link>
                            </div>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="/carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="/carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="/carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="/carouselExampleIndicators" data-slide-to="3"></li>
                    </ol>

                    // 1
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100 opacity-80"
                            src="https://images.pexels.com/photos/713297/pexels-photo-713297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="First slide" />
                            <div className="carousel-caption h-50 align-items-center justify-content-center">
                                <h6 className="tag-cover-9"><b> We Provide Quality Service </b></h6>
                                <h1 className="title-cover-9"><b> Home Maintenance And Services For You </b></h1>
                                <p className="para-cover-9">
                                    <b> The Home  Service Website Is  Very Useful Because You Can Don’t Have To Visit To Service Provider’s Office, You Can Easily Book Service Via This Website. </b>
                                </p>
                                <Link to="/" type="button" className="btn btn-success mx-1">Read More</Link>
                                <Link to="contactus" type="button" className="btn btn-success mx-1">Get In Touch</Link>
                            </div>
                        </div>

                        // 2
                        <div className="carousel-item">
                            <img className="d-block w-100 opacity-75" src="https://images.pexels.com/photos/4239036/pexels-photo-4239036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Second slide" />
                            <div className="carousel-caption h-50 align-items-center justify-content-center">
                                <h6 className="tag-cover-9"><b>We Provide Quality Service </b></h6>
                                <h1 className="title-cover-9"><b>We are Professional and provide repair Services</b></h1>
                                <p className="para-cover-9"></p>
                                <Link to="/" type="button" className="btn btn-success mx-1">Read More</Link>
                                <Link to="contactus" type="button" className="btn btn-success mx-1">Get In Touch</Link>
                            </div>
                        </div>

                        // 3
                        <div className="carousel-item">
                            <img className="d-block w-100 opacity-75"  src="https://images.pexels.com/photos/2898199/pexels-photo-2898199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Third slide" />
                            <div className="carousel-caption h-50 align-items-center justify-content-center">
                                <h6 className="tag-cover-9"><b>We Provide Quality Service</b></h6>
                                <h1 className="title-cover-9"><b>The Best Company To Provide Home Services</b></h1>
                                <p className="para-cover-9"><b></b></p>
                                <Link to="/" type="button" className="btn btn-success mx-1">Read More</Link>
                                <Link to="contactus" type="button" className="btn btn-success mx-1">Get In Touch</Link>
                            </div>
                        </div>

                        // 4
                        <div className="carousel-item">
                            <img className="d-block w-100 opacity-75" src="https://images.pexels.com/photos/8961401/pexels-photo-8961401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Fourth slide" />
                            <div className="carousel-caption h-50 align-items-center justify-content-center">
                                <h6 className="tag-cover-9"><b>We Provide Quality Service</b></h6>
                                <h1 className="title-cover-9"><b>The Most Targetted Cleaning Services</b></h1>
                                <p className="para-cover-9"> <b></b></p>
                                <Link to="/" type="button" className="btn btn-success mx-1">Read More</Link>
                                <Link to="contactus" type="button" className="btn btn-success mx-1">Get In Touch</Link>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </a>
                </div> */}
        </>
    )
}

export default HomeHeader