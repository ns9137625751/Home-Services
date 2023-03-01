import React from 'react'
import { FaBath } from "react-icons/fa";
import { MdSettingsSuggest } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { BiTimeFive } from "react-icons/bi";
import { Link } from 'react-router-dom';
import HomeHeader from './HomeHeader';
import Authcheck from './Authcheck';
const Home = () => {
  return (
    <>
      <Authcheck />
      <HomeHeader />
      {/* --------------------------------------------------------------------------------------------------------- */}
      <div className="container">
        <h1 className="heading text-center my-5"><b> Why Use Home Services System ? </b></h1>
        <div className='container my-5 text-center' style={{ 'width': '1050px', 'height': '270px', "margin": 'auto' }}>
          <div className="d-flex main-cont-wthree-fea ">
            <div className="grids-feature mx-5">
              <FaBath className='mx-2 my-5' size={60} color="green" />
              <h4><Link to="/" className="title-head text-reset text-decoration-none">Best Quality</Link></h4>
            </div>
            <div className="grids-feature mx-5">
              <MdSettingsSuggest className='mx-2 my-5' size={60} color="green" />
              <h4><Link to="/" className="title-head text-reset text-decoration-none">Expert Advices</Link></h4>
            </div>
            <div className="grids-feature mx-5">
              <IoIosPeople className='mx-2 my-5' size={60} color="green" />
              <h4><Link to="/" className="title-head text-reset text-decoration-none">Labour Expertise</Link></h4>
            </div>
            <div className="grids-feature mx-5">
              <BiTimeFive className='mx-2 my-5' size={60} color="green" />
              <h4><Link to="/" className="title-head text-reset text-decoration-none">On Time Service</Link></h4>
            </div>
          </div>
        </div>
      </div>

      {/*************************************************************************************************************/}
      <div className="container mt-5">
        <p className="heading text-center display-6">Services</p>
        <h1 className="heading text-center"><b> What we offer </b></h1>

        <div className="container my-5" >
          <div id="carouselExampleDark" className="carousel carousel-dark slide" style={{ 'width': '370px', 'height': '560px', "margin": 'auto' }}>
            <div className="carousel-indicators">

              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>

            <div className="carousel-inner" >
              <div className="carousel-item active" data-bs-interval="10000">
                <img src="https://demo.w3layouts.com/demosWTR/Freedom/30-03-2020/home-service-freedom-demo_Free/1435018137/web/assets/images/plumbing.jpg" className="d-block w-100" alt="nishant" />
                <div className="text-center my-4">
                  <h5 className='my-3'>Plumbing</h5>
                  <p>Design, Installation, Construction, Replacement, Service, Repair, Alteration, Or Modification Of The Pipes, Fixtures, And Other Apparatus Used For Bringing The Water Supply Into A Building And Removing Liquid And Water-Carried Wastes From A Building.</p>
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="2000">
                <img src="https://demo.w3layouts.com/demosWTR/Freedom/30-03-2020/home-service-freedom-demo_Free/1435018137/web/assets/images/electrician.jpg" className="d-block w-100" alt="nishant" />
                <div className="text-center my-4">
                  <h5 className='my-3'>Electrician</h5>
                  <p> Installs And Repairs Electrical Wiring, Systems, And Fixtures In Buildings. Installs Conduits And Pipes To House Electrical Wires And Cables. Ensures Piping Complies With Electrical Codes. Installs Circuit Breakers And Other Electrical Hardware And Connects Wiring To Them. </p>
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="2000">
                <img src="https://demo.w3layouts.com/demosWTR/Freedom/30-03-2020/home-service-freedom-demo_Free/1435018137/web/assets/images/carpenter.jpg" className="d-block w-100" alt="nishant" />
                <div className="text-center my-4">
                  <h5 className='my-3'>Carpenter</h5>
                  <p> Carpenters Construct, Install, And Repair A Variety Of Residential, Commercial, And Industrial Structures And Fixtures. In General, Carpenters Work With Wood, Steel, And Concrete Carpenters Must Have Manual Dexterity, An Eye For Detail, And The Ability To Solve Problems Quickly As They Arise.</p>
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="2000">
                <img src="https://demo.w3layouts.com/demosWTR/Freedom/30-03-2020/home-service-freedom-demo_Free/1435018137/web/assets/images/cleaning.jpg" className="d-block w-100" alt="nishant" />
                <div className="text-center my-4">
                  <h5 className='my-3'>Cleaning</h5>
                  <p>  Clean, Stock And Supply Designated Facility Areas. Dusting, Sweeping, Vacuuming, Mopping. Carry Out Deep Cleaning And Detailed Cleaning Tasks. Notify Management Of Deficiencies Or Repairs Required.</p>
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="2000">
                <img src="https://demo.w3layouts.com/demosWTR/Freedom/30-03-2020/home-service-freedom-demo_Free/1435018137/web/assets/images/housekeeping.jpg" className="d-block w-100" alt="nishant" />
                <div className="text-center my-4">
                  <h5 className='my-3'>House keeping</h5>
                  <p> Housekeeping Refers To The Management Of Duties And Chores Involved In The Running Of A Household, Such As Cleaning, Cooking, Home Maintenance, Shopping, And Bill Payment. These Tasks May Be Performed By Members Of The Household, Or By Other Persons Hired For The Purpose. </p>
                </div>
              </div>

              <div className="carousel-item">
                <img src="https://demo.w3layouts.com/demosWTR/Freedom/30-03-2020/home-service-freedom-demo_Free/1435018137/web/assets/images/wallpainting.jpg" className="d-block w-100" alt="nishant" />
                <div className="text-center my-4">
                  <h5 className='my-3'>Painting</h5>
                  <p> House Painting Services </p></div>
              </div>
            </div>


            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>


          </div>
        </div>
      </div>
    </>
  )
}

export default Home