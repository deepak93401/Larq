import logo from './logo.svg';
import './App.css';
import "./Media.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Header from './Header';
import Briliant from './Brilliant';
import Shop from './Shop';
// import Trending from './Trending';
import Drinksec from './Drinksec.js';

import Magazine from './Magazine';
import Footer from './Footer.js';
// import data from './data.js';
import Login from "./Login.js"
import Resistor from './Resistor.js';
import { Route, Routes } from 'react-router-dom';
import Trend from './Trend.js';
// import Swingsquad from './Swingsquad.js';
import Trendbuy from './Trendbuy.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Resistor" element={<Resistor />} />
        <Route path="/product/:index" element={<Trendbuy/>}/>
      
        <Route path='/' element={

          <>  
            <Home />
            <Briliant />
            <Shop />
            {/* <Trending /> */}
            <Trend/>
            <Drinksec />
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
