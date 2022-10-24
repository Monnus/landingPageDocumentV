import './App.css';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Auth from './components/auth/Auth';
import LandingPage from './components/LandingPage';
import Profile from './components/profile/Profile';
import DashBoardPage from './pages/dashBoard';
import AboutPage from './pages/about/AboutPage';
import PlanPage from './pages/plan/PlanPage';
import ContactUsPage from './pages/contactUs/ContactUsPage';
import Authentication from './components/verifier/vriAuth/Authentication';
import Verdash from './components/verifier/Verdash';
import Practice from './pages/practice/Practice'

import {getAuth, onAuthStateChanged} from "firebase/auth";
import { useEffect } from 'react';

function App() {
const auth=getAuth();
const user=auth.currentUser;


console.log(user);
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<LandingPage/>}/>
        <Route path='/Auth' element={<Auth/>}/>
        <Route path='/profile' element={<Profile/>} />
        <Route path='/Dashboard' element={<DashBoardPage/>}/>
        <Route path='/About' element={<AboutPage/>}/> 
        <Route path='/Plan' element={<PlanPage/>}/>
        <Route path='/ContactUs' element={<ContactUsPage/>}/>
        <Route path='/authentication' element={<Authentication/>}/>
        <Route path='/verifierdashboard' element={<Verdash/>}/> 
        <Route path='/Practice' element={<Practice/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// import React from "react";
// import "./App.css";
// import { BrowserRouter, Route, Routes
// } from "react-router-dom";
// import Home from "./pages/Home";
// import Consulting from "./pages/Consulting";
// import Contactus from "./pages/Contactus";
// import Design from "./pages/Design";
// import Development from "./pages/Development";
// import Marketing from "./pages/Marketing";
// import Products from "./pages/Products";
// import Services from "./pages/Services";
// import Signup from "./pages/Signup";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home/>}></Route>
//           <Route path="/contactus" element={<Contactus/>}></Route>
//           <Route path="/products" element={<Products/>}></Route>
//           <Route path="/services" element={<Services/>}></Route>
//           <Route path="/signup" element={<Signup/>}></Route>
//           <Route path="/marketing" element={<Marketing/>}></Route>
//           <Route path="/development" element={<Development/>}></Route>
//           <Route path="/design" element={<Design/>}></Route>
//           <Route path="/consulting" element={<Consulting/>}></Route> npm start
//         </Routes>

//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
