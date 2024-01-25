import React from 'react'
import Shopimg1 from "./img/shopimg1.jpg"
import Shopimg2 from "./img/shopimg2.jpg"
import Shopimg3 from "./img/shopimg3.jpg"

import { MdOutlineScreenRotation } from "react-icons/md";
import { SlDrop } from "react-icons/sl";
import { PiPlantThin } from "react-icons/pi";

function Shop() {
  return (
<>
      <section id='Shop'>
            <div className='container-fuild'>
            <h2 className='text-left'>Shop</h2>
                <div className='row'>
                      <div className='col-md-4 pt-5'>
                          <div className='Shop-contianer'>
                             <div className='Shop_img'>
                              <img src={Shopimg1}></img>
                             </div>
                             <div className='shop-des'>
                             <h6>Purification</h6>
                             <a href='#' className='text-center'> Shop now</a>
                             </div>
                            
                          </div>
                      </div>
                   
                   
                      <div className='col-md-4 pt-5'>
                      <div className='Shop-contianer'>
                             <div className='Shop_img'>
                              <img src={Shopimg2}></img>
                             </div>
                             <div className='shop-des'>
                             <h6>Home</h6>
                             <a href='#' className='text-center'> Shop now</a>
                             </div>
                           
                          </div>
                        
                      </div>
                    
                    
                    
                      <div className='col-md-4 pt-5'>
                      <div className='Shop-contianer'>
                             <div className='Shop_img'>
                              <img src={Shopimg3}></img>
                             </div>
                             <div className='shop-des'>
                             <h6>DrinkWare</h6>
                             <a href='#' className='text-center'> Shop now</a>
                             </div>
                            
                           
                          </div>
                      </div>
                   
                </div>
                <div className='row Shop-div2 mt-5'>
                     <div className='col-md-4'>
                         <div className='Shopdiv-con'>
                             <MdOutlineScreenRotation  className='Shop-icon' />   
                             <h4>Say yes to refills</h4>
                             <p>Save money and make single-use water bottles a thing of the past.</p>
                         </div>
                     </div>
                     <div className='col-md-4'>
                     <div className='Shopdiv-con'>
                     <SlDrop  className="Shop-icon"/>
                             <h4>A smart way to sip</h4>
                             <p>PureVis™ and Nano Zero technology improves water quality for a brilliant hydration experience on the go.</p>
                         </div>
                     </div>
                     <div className='col-md-4'>
                     <div className='Shopdiv-con'>
                     <PiPlantThin  className="Shop-icon" />
                             <h4>Hydrate with purpose</h4>
                             <p>A portion of proceeds supports environmental and clean water projects worldwide.</p>
                         </div>
                     </div>
                </div>
            </div>
      </section>
      
                                          
    </>
  )
}

export default Shop;