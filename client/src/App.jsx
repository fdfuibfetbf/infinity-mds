import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { FaTiktok, FaYoutube, FaFacebookF } from "react-icons/fa";
import {Routes, Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";

import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'
import Home from './components/Home';
import Card from './components/Card';

import { FaInstagram } from "react-icons/fa";
import Footer from './components/Footer';
import Parts from './components/Parts';


import Navbar from './components/Navbar';

import Allpro from './components/Allpro';
import Angpro from './components/Angpro';
import Crpro from './components/Crpro';
import Ctpro from './components/Ctpro';
import Fluopro from './components/Fluopro';
import Gampro from './components/Gampro';
import Mampro from './components/Mampro';
import Mripro from './components/Mripro';
import Ultrapro from './components/Ultrapro';
import Xraypro from './components/Xraypro';



import Services from './components/Services';
import About from './components/About';
import Sign from './components/Sign';
import Showcase from './components/Showcase';
import Rental from './components/Rental';
import ScrollToTop from './components/ScrollToTop';
import Admlog from './admin/Admlog';
import PartForm from './admin/PartForm';
import Parttable from './admin/Parttable';
import Allmod from './components/Allmod';
import Renser from './components/Renser';
import Signs from './components/Signs';

function App() {

  return (
  
    <>
 
    




  <ScrollToTop  />
<Routes>

  <Route path='/' element={<Home />}  />
   <Route path='card' element={<Card />}  />
   <Route path='footer' element={<Footer />}  />
    <Route path='parts' element={<Parts />}  />
 <Route path='allpro' element={<Allpro />}  />
 <Route path='allmod' element={<Allmod />}  />

<Route path='angpro' element={<Angpro />}  />
<Route path='crpro' element={<Crpro />}  />
<Route path='ctpro' element={<Ctpro />}  />
<Route path='fluopro' element={<Fluopro />}  />
<Route path='gampro' element={<Gampro />}  />
<Route path='mampro' element={<Mampro />}  />
<Route path='mripro' element={<Mripro />}  />
<Route path='ultrapro' element={<Ultrapro />}  />
<Route path='xrypro' element={<Xraypro />}  />
<Route path='sign' element={<Sign />}  />
<Route path='ser' element={<Services />}  />
<Route path='about' element={<About />}  />
<Route path='show' element={<Showcase />}  />
<Route path='rental' element={<Rental />}  />
<Route path='admlog' element={<Admlog />}  />
<Route path='partform' element={<PartForm />}  />
<Route path='parttable' element={<Parttable />}  />
<Route path='renser' element={<Renser />}  />
<Route path='signs' element={<Signs />}  />
</Routes>
  <Navbar  />
<Footer  />





    </>
   


   
  )
}

export default App
