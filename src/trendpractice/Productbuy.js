
import React, { useState, useEffect } from 'react'
import Swingimg from "../img/swing1.jpg"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import data from '../Data'
import { addToCart } from '../features/cartSlice'

import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { HiOutlineShieldCheck } from "react-icons/hi2";

function Productbuy() {
  const { index } = useParams()
  const dispatch=useDispatch()

  return (
    <>
        <section id='swing'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='swing-img'>
                <img src={data[index].img}
                ></img>
              </div>
            </div>
            <div className='col-md-6'>
              <div className="swing-con">
                <h1>{data[index].title}</h1>
                <span>${data[index].price}</span>
                <h5>size</h5>
                <div className='mainsquad-btn'>
                  <div className='squad-btn'>
                    <input type="radio" value={data[index].size[0]} name='size' className='trendbuy-btn' 

                   />
                    <label className=" btn-default" htmlFor="23-oz">
                      {data[index].size[0]}
                    </label>

                  </div>
                  <div className='squad-btn'>

                    <input type="radio" value={data[index].size[1]} name='size' className='trendbuy-btn'  />
                    <label className=" btn-default" htmlFor="34-oz">
                      {data[index].size[1]}
                    </label>

                  </div>
                </div>

                <div className='squad-changebtn'>
                  <p>{data[index].desc}</p>
                  {/* <div className='form-radiobtn'>
                                      <label class="custom-radio-btn">
                                     
                                          <input type="radio" name="sample" checked/>
                                          <span class="checkmark"></span>
                                        </label>
                                        <label class="custom-radio-btn">
                                     
                                          <input type="radio" name="sample" checked/>
                                          <span class="checkmark"></span>
                                        </label>
                                        </div> */}
                  <div className="radio-option">


                    { }
                    {/* <>
                              <input type='radio' className='radio-bg-black' name='color' ></input>
                    <input type='radio' className='radio-bg-blue' name='color'></input>
                             
                            </> */}

                    {/* {myData.choice ?
                      <>
                        {myData.choice.map((v, i) => {
                          return (
                            <div key={i}>
                              <input type='radio' className='radio-bg-black' name='color' ></input>
                            </div>
                          )
                        })}
                      </>

                      :
                      null} */}



                  </div>
                </div>
                <button className='swing-btn'
                       onClick={()=>dispatch(addToCart(data))}
                >Add to card-{data[index].price}</button>
                <div className="info">
                  <p>
                    Or 4 interest-free installments of $28.75{" "}
                    <BsFillInfoCircleFill className="info-icon" />
                  </p>
                  <p>Free shipping within the contiguous U.S. on orders over $80.</p>
                </div>
                <br />
                <div className="info-more">
                  <div>
                    <IoIosCheckmarkCircleOutline className="cart-icon" />
                    <p>1 year warranty</p>
                  </div>
                  <div>
                    <IoArrowBackCircleOutline className="cart-icon" />
                    <p>Free returns</p>
                  </div>
                  <div>
                    <HiOutlineShieldCheck className="cart-icon" />
                    <p>Secure checkout</p>
                  </div>
                </div>

                <hr />
                <p className="bottle-txt">
                  LARQ Bottle Flip Top makes it easy to hydrate on the go — just flip
                  the straw up for easy access. Take hydration to the next level with
                  PureVis™ and Nano Zero. Switch between filtering out contaminants
                  with the LARQ Filter Straw or the self-cleaning power of the LARQ
                  Bottle PureVis™ Cap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Productbuy
