import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home.js';
import Header from './Component/Header/Header.js';
import Briliant from './Component/Brilliant/Brilliant.js';
import Shop from './Component/Shop/Shop.js';
// import Trending from './Trending';
import Drinksec from './Component/Drink/Drinksec.js';

import Magazine from './Component/Mazine/Magazine.js';
import Footer from './Component/Footer/Footer.js';
// import data from './data.js';
import Login from "./Component/Login/Login.js"
import Resister from './Component/Resister/Resister.js';
import { Route, Routes } from 'react-router-dom';
import Trend from './Component/Trending/Trend.js';
// import Swingsquad from './Swingsquad.js';
import Trendbuy from './Component/Trending/Trendbuy.js';
import Checkout from './Component/Checkout/Checkout.js';
import Mission from './Component/Mission/Mission.jsx';


function App() {
  return (
    <div className="App">
      <Header/>
       <Routes>
         <Route path="/Login" element={<Login />} />
        <Route path="/Resistor" element={<Resister />} />
        <Route path="/product/:index" element={<Trendbuy/>}/>
        <Route path="/checkout" element={  <Checkout/>} />
        
      
        <Route path='/' element={

          <>  
            <Home />
            <Briliant />
            <Shop /> 
       
            <Trend/>
            <Mission/>
           
             <Magazine /> 

        
          </>
        } />
      </Routes>

      
      
    
      <Footer /> 

      {/* <Resistor/> */}


    </div>
  );
}

export default App;
