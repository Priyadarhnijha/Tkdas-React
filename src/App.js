import React from 'react';
import './App.css';

import {UserDashboard} from './UserDashboard';



import {Navigation} from './Navigation';
// //import { AdminNavigation } from './Admin/AdminNavigation';
import {BrowserRouter, Route,Routes, Link} from 'react-router-dom';
import {ABOUT} from './About';
import{FAQs} from './FAQs';
import{Starter} from './Starter';
import  AddPayment from './AddPayment';
import { Payment } from './Payment';
import { Cart } from './Cart';



function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
    <h2 className="m-3 d-flex justify-content-center text-white " style={{color:"white",backgroundColor: 'black',fontWeight: 'bold'}}>
       USER DASHBOARD 
    </h2>

    <Navigation/>       
    <Routes>
      <Route path='/' element={<UserDashboard/>} exact />
      <Route path='/About' element={<ABOUT/>} exact />
      <Route path='/FAQs' element={<FAQs/>} exact />
      <Route path='/Starter' element={<Starter/>} exact />
      <Route path='/AddPayment' element={<AddPayment/>} exact />
      <Route path='/Payment' element={<Payment/>} exact />
      <Route path='/Cart' element={<Cart/>} exact />


    </Routes>
    </div>
    {/* <Footer /> */}
    </BrowserRouter>
    
  );
}

export default App;
