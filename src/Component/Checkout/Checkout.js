import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import "./Checkout.css"
import "./Checkmedia.css"

function Checkout() {
  const cartItem=useSelector((state)=>state.cart.cartReducer.items)
  const totalAmount=useSelector((state)=>state.cart.cartReducer.totalAmount)
  const [toggle,setToggle]=useState(false)
  return (
    <>
      <section id='Checkout'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 '>
              <div className='check1'>
                <h4>Customer</h4>
                <p className="sm__text">
                  Already have an account?
                   {/* <Link to="/login"> Sign in now</Link> */}
                 </p>
                <hr></hr>
                <h4>Shipping Payment</h4>
                <hr></hr>
                <h4>Billing</h4>
                <hr></hr>
                <h4>Payment</h4>
              </div>

            </div>






            <div className='col-md-6'>


              <div className='check2'>
                <h5>Order Summary</h5>
                
                <hr></hr>
                {cartItem.map((val,i)=>(
                          <div key={i}>
                          <div className='check_mini-flex'>
                                        <div className='check-mini-first'>
                                          <img className="img" src={val.img} alt="evfrf" />
                                        </div>
                                        <div className='check-mini-mid'>
                                          <p className="blue tx-13 fw-700">
                                            {val.totalQuantities}x{val.title}
                                            1xLarqbottle
                                          </p>
                                          <p className="tx-13">Size {val.size[i]} </p>
                                          <p className="tx-13">{val.desc}</p>
                                        </div>
                                        <div className='check-mini-last'>
                                          <p className="blue tx-13 fw-700">{val.price}</p>
                                        </div>
                          </div>
                          </div>
                  
                ))}
               
                    <hr></hr>
              
              
                        <div className="d__flex__space__between">
                                  <div className=" co__price">
                                    <p className="blue fw-700">Subtotal</p>
                                    <p>Shipping </p>
                                    <p> Tax</p>
                                  </div>
                                  <div className=" co__price">
                                    <p className="blue fw-700">${totalAmount}</p>
                                    <p>--</p>
                                    <p>$0.00</p>
                                  </div>
                        </div>
               

              </div>
{/* check2 finished */}

            </div>
{/* col2 finisd */}


          </div>



        </div>
      </section>

    </>
  )
}

export default Checkout
