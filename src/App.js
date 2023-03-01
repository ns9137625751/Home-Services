import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Services from './components/Services';
import Contactus from './components/Contactus';
import Home from './components/Home';
import AdminLogin from './components/AdminLogin';
import AdminHome from './components/AdminHome';
import AdminCustomer from './components/AdminCustomer';

import Signup from './components/Signup';
import SignupServiceProvider from './components/SignupServiceProvider';
import SignupCusomer from './components/SignupCustomer';

import Login from './components/Login';
import LoginCustomer from './components/LoginCustomer';
import LoginServiceProvider from './components/LoginServiceProvider';

import Footer from './components/Footer';
import ContactusState from './context/contactus/ContactusState';

import PlumbingService from './components/PlumbingService';
import ElectricainService from './components/ElectricainService';
import CarpenterService from './components/CarpenterService';
import CleaningService from './components/CleaningService';
import HousekeepingService from './components/HousekeepingService';
import PaintingService from './components/PaintingService';
import ProviderState from './context/Providers/ProviderState';
import BookingState from './context/booking/BookingState';
import AdminBookingState from './context/adminbooking/AdminBookingState';
import Alerts from './components/Alerts';
import { useState } from 'react';
import AdminProvider from './components/AdminProvider';
import AdminBooking from './components/AdminBooking';
import CustomerState from './context/customers/CustomerState';

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
      <ContactusState>
        <ProviderState>
          <BookingState>
            <CustomerState>
              <AdminBookingState>
                
              <Router>
                <Navbar showAlert={showAlert} />
                <Alerts alert={alert} />

                <Routes>
                  
                  <Route exact path="/" element={<Home />}></Route>
                  <Route exact path="/services" element={<Services />}></Route>
                  <Route exact path="/contactus" element={<Contactus showAlert={showAlert} />}></Route>
                  <Route exact path="/adminlogin" element={<AdminLogin showAlert={showAlert} />}></Route>

                  <Route exact path="/adminhome" element={<AdminHome />}></Route>
                  <Route exact path="/adminhome/admincustomer" element={<AdminCustomer showAlert={showAlert} />}></Route>
                  <Route exact path="/adminhome/adminprovider" element={<AdminProvider showAlert={showAlert} />}></Route>
                  <Route exact path="/adminhome/adminbooking" element={<AdminBooking showAlert={showAlert} />}></Route>

                  <Route exact path="/login" element={<Login />}></Route>
                  <Route exact path="/logincustomer" element={<LoginCustomer showAlert={showAlert} />}></Route>
                  <Route exact path="/loginserviceprovider" element={<LoginServiceProvider showAlert={showAlert} />}></Route>

                  <Route exact path="/signup" element={<Signup />}></Route>
                  <Route exact path="/signupserviceprovider" element={<SignupServiceProvider showAlert={showAlert} />}></Route>
                  <Route exact path="/signupcustomer" element={<SignupCusomer showAlert={showAlert} />}></Route>


                  <Route exact path="/plumbingservice" element={<PlumbingService showAlert={showAlert} />}></Route>
                  <Route exact path="/electricianservice" element={<ElectricainService />}></Route>
                  <Route exact path="/carpenterservice" element={<CarpenterService />}></Route>
                  <Route exact path="/cleaningservice" element={<CleaningService />}></Route>
                  <Route exact path="/housekeepingservice" element={<HousekeepingService />}></Route>
                  <Route exact path="/paintingservice" element={<PaintingService />}></Route>

                </Routes>
                <Footer />
              </Router>
              </AdminBookingState>
            </CustomerState>
          </BookingState>
        </ProviderState>
      </ContactusState>
    </>
  );
}

export default App;
