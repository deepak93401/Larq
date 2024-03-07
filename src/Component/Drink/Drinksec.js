import React, { useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Drinkimg1 from "../img/Drinkimg1.jpg"
import Drinkimg2 from "../img/Drinkimg2.jpg"
import Drinkimg3 from "../img/Drinkimg3.jpg"
import "./Drink.css"
import "./Drinkmedia.css"
function Drinksec() {
  
  const [left,setLeft]=useState(true)
 
  return (
    <>

        <section id='Drink'>
             
             <div className='Container-fluid'>
                     <div className='main-wrapper'>
                        
                           {/* <div className='col-md-3'> */}

                                <div className='drink-left'>
                                     <div className={left?"drink-con":"secleft"}>
                                          <p className='l-pera1'>Our mission</p>
                                          <h2 className='l-head'>Drink brilliantly</h2>
                                          <p className='l-pera2'>We make it easy to opt for the healthier and more sustainable hydration choice, anytime and anywhere.</p>
                                        
                                          <button className='drinkleft-btn1' onClick={()=>{setLeft(false)}}>Learn more <FaLongArrowAltRight/></button>
                            
                                         
                                     </div>
                                     {/* <button className='drinkleft-btn2'> <FaLongArrowAltLeft/> Back</button> */}
                                     <button className={left?"drinkleft-btn2":"secright"} onClick={()=>{setLeft(true)}}> <FaLongArrowAltLeft/> Back</button>
                                </div>
                           {/* </div> */}
                           {/* <div className='col-md-9'> */}
                                  {/* <div className='row'> */}
                                      <div className={left?"drink-right":"drink-right2"}>

                                     
                                        <div className='drinksec'>
                                          <img src={Drinkimg1}></img>
                                          <div className='drinksec-con'>
                                              <h5>Award Winning Design</h5>
                                              <p>When it comes to form and function, we’ve got it down.</p>
                                              <button className='drinkright-btn'>Shop now <FaLongArrowAltRight/></button>
                                          </div>
                                        </div>
                                    
                                    
                                      <div className='drinksec'>
                                      <img src={Drinkimg2}></img>
                                      <div className='drinksec-con'>
                                              <h5>The future of hydration</h5>
                                              <p>PureVis™ and Nano Zero technology improves water quality for a brilliant hydration experience.</p>
                                              <button className='drinkright-btn'>How it works<FaLongArrowAltRight/></button>
                                          </div>
                                      </div>
                                  
                                
                                      <div className='drinksec'>
                                      <img src={Drinkimg3}></img>
                                      <div className='drinksec-con'>
                                              <h5>Better for you and the planet</h5>
                                              <p>A portion of every purchase helps restore our oceans and brings clean water to communities in need.</p>
                                              <button className='drinkright-btn'>Measure my impact<FaLongArrowAltRight/></button>
                                          </div>
                                      </div>
                                
                                      {/* </div> */}
                                  </div>
                           {/* </div> */}
                     


                           </div>

                    </div>
            
        </section>
    
    </>
  )
}

export default Drinksec
