import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import Homebottle from "../img/homebottle.png"


import "./Home.css"
import "./Homemedia.css"

function Home() {
   return (
      <>
         <section id="Home">
            {/* <div className='container-fluid'>
                <div className='row'>
               <div className='col-md-12'>
                     <div className='Home-wraper row'>
                             <div className='Home-con col-10'>
                                <p className='home-head1'>Drink briliantly</p>
                                <h1> <strong>Poppin’ bottles in 2024</strong></h1>
                                <p className='home-pera'>Forget the bubbly, smart water purification is here to help crush those hydration goals.</p>
                                 <button className='home-btn'>Shop now <FaLongArrowAltRight /></button>
                             </div>
                             <div className='Home-con1 col-2'>
                                <div className='Home-img'>
                                <img src={Homebottle}/>
                                </div>
                                <p>LARQ Bottle Pure Vis</p>
                               
                             </div>
                            
                            
                      </div>

           </div>
                </div>
             </div> */}


            <div className='container-fluid'>
               <div className='row'>
                  <div className='col-md-12'>
                     <div className='Home-wraper '>
                        <div className=' Home-con'>
                           <p className='home-head1'>Drink briliantly</p>
                           <h1> <strong>Poppin’ bottles in 2024</strong></h1>
                           <p className='home-pera'>Forget the bubbly, smart water purification is here to help crush those hydration goals.</p>
                           <button className='home-btn'>Shop now <FaLongArrowAltRight /></button>
                        </div>
                     
                     
                        <div className=' Home-con1'>
                              <div className='Home-img'>
                                <img src={Homebottle}/>
                                </div>
                                <p>LARQ Bottle Pure Vis</p>
                        </div>

                     </div>

                  </div>
               </div>
            </div>
         </section>


      </>

   )
}

export default Home