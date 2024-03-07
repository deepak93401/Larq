import React from 'react'
import Parent from './Parent'
import Head from './Head'
import { Route, Routes } from 'react-router-dom';
import Productbuy from './Productbuy';
import Login from '../Login';
import Resistor from '../Resistor';
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
  return (
    <>
    <Head></Head>
    <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Resistor" element={<Resistor />} />
        <Route path="/product/:index" element={<Productbuy/>}/>
      
        <Route path='/' element={

          <>  
      
      <Parent></Parent>

          </>
        } />
      </Routes>
      
     

    
    </>
  )
}

export default Main;
