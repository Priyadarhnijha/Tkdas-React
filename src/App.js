import React from 'react';
import './App.css';

import {UserDashboard} from './UserDashboard';
// import {Products} from './Products';
// import {Orders} from './Orders';
// import {Transactions} from './Transactions';


import {Navigation} from './Navigation';
// //import { AdminNavigation } from './Admin/AdminNavigation';
import {BrowserRouter, Route,Routes, Link} from 'react-router-dom';
import {ABOUT} from './About';
import{FAQs} from './FAQs';
import{Starter} from './Starter';
import { AddPayModal } from './AddPayModal';
import { Payment } from './Payment';


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
      <Route path='/AddPayModal' element={<AddPayModal/>} exact />
      <Route path='/Payment' element={<Payment/>} exact />

    </Routes>
    </div>
    {/* <Footer /> */}
    </BrowserRouter>
    
  );
}

export default App;
