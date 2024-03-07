import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import "./Footer.css"

function footer() {
  return (
   <footer>
     <div className='container-fluid'>
        <div className='row'>
                   <div className='col-md-4'>
                            <div className='footer_left'>
                                <h1>
                                    Become an insider
                                </h1>
                                <p>
                                    Receive exclusive offers, hydration<br></br> news, and more when you subscribe.
                                </p>
                                <input type='email' placeholder='Email address'></input> <button className='email_btn'><span>&#8594;</span></button>
                                <br></br>
                                <div className='icons-div'>
                                <button className='icons'><FaFacebookF /></button>
                                <button className='icons'><FaInstagram /></button>
                                <button className='icons'><FaYoutube /></button>
                                <button className='icons'><FaTwitter /></button>
                                </div>
                               
                                <br></br>
                                <div className='footlastcon'>
                                <button className='footer_left_btn'>United States</button>
                                <span className='footer_left_txt'>Terms & Privacy</span>
                                <span className='footer_left_txt'>Accessibility</span>
                                </div>
                              
                            </div>
                    
                    </div>  
                 
                 
                   <div className='col-md-4'>
                       <div className='footer_middle'>
                            <div className='footer_middle1'>
                                <ul>
                                    <li className='list1'>FAQ</li>
                                    <li className='list1'>Reviews</li>
                                    <li className='list1'>Contact</li>
                                    <li className='list1'>Find a retailter</li>
                                    <li className='list1'>Corporate gifting</li>
                                </ul>
                            </div>
                    
            
                   
                
                                <div className='footer_middle2'>
                                    <ul>
                                        <li className='list1'>basq magazine</li>
                                        <li className='list1'>Press</li>
                                        <li className='list1'>Our story</li>
                                        <li className='list1'>Affiliate program</li>
                                        <li className='list1'>Ambassador program</li>
                                    </ul>
                                </div>
                          </div>
                    
                    </div>  
                 
                 
                   <div className='col-md-4'>
                        <div className='footer_right'>
                           
                        </div>
                    
                    </div>  
             
        </div>
          
     </div>
      
   </footer>
  )
}

export default footer
