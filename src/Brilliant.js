import React from 'react'
import { IoIosStar } from "react-icons/io";
import Strategist from "./img/strategist.png"
import oprah from "./img/oprah_Magazine.png"
import Digital from "./img/digital_trends.png"
import Bplogo from "./img/BP-logo-black.png"
import { FaLongArrowAltRight } from "react-icons/fa";
function Brilliant() {
  return (
   <>
     <section id='Brilliant'>
            <div className='container-fluid'>
                   <div className='row'>
     
                          <div className='B-main'>
                              <div className='main-left'>
                                   <div className='row'>
                                      <div className='col-lg-12'>
                                                       <div className='Brill Brill-left'>
                                                                      <div className='Sub-brill'>
                                                                           <h1>Brilliant </h1>
                                                                           <span><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></span>
                                                                           <p>based on 10654 reviews</p>
                                                                      </div>
                                                                      <div>
                                                                      <button className='Brill-btn'>All reviews<FaLongArrowAltRight/></button>
                                                                      </div>
                                                                         
                                                       </div>
                                      </div>
                                   </div>
                                    
                              </div>
                              <div className='main-right'>
                                       <div className='row'>
                                          <div className='col-lg-3 col-md-6 col-12 mt-5'>
                                                       <div className='Brill Brill-right'>
                                                                      <h6>What’s the Next Status Water Bottle? Three of our experts named the LARQ bottle as one to watch.</h6>
                                                                      <img src={Strategist}></img>
                                                            </div>
                                          </div>
                                         
                                         
                                          <div className='col-lg-3  col-md-6 col-12 mt-5'>
                                                       <div className='Brill Brill-right'>
                                                                      <h6>The result is that every glass of water tastes crisp and fresh.</h6>
                                                                      <img src={oprah}></img>
                                                       </div>
                                          </div>
                                        
                                        
                                          <div className='col-lg-3  col-md-6 col-12 mt-5'>
                                                       <div className='Brill Brill-right'>
                                                            <h6>LARQ's PureVis™ water pitcher erased my fears about drinking water from the tap.</h6>
                                                            <img src={Digital}></img>
                                                       </div>
                                          </div>
                                         
                                         
                                         
                                          <div className='col-lg-3  col-md-6 col-12 mt-5'>
                                                     <div className='Brill Brill-right'>
                                                            <h6>You Should Ditch Your Old Water Dispenser For The High-Tech LARQ Pitcher PureVis™.</h6>
                                                            <img src={Bplogo}></img>
                                                       </div>
                                          </div>
                                       </div>
                              </div>


                          </div>
                        
                        
                        
                        
                    
                                             
                        
                        
                                          
                    
                    
                        
                        
                    </div>
                   </div>
            
      
      
      
      
      
      
      </section> 
   
   </>
  )
}

export default Brilliant;