import React, { useState, useEffect } from 'react'
import Swingimg from "../img/swing1.jpg"
import { useParams } from 'react-router-dom'
import { useDispatch } from "react-redux"
import data from '../Larqdata/Data'
import "./Trendbuy.css"
import "./Trendmedia.css"
// import { addtocard } from './features/cartSlice'

import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { addItem } from '../redux/cartSlice'
function Trendbuy() {
  const { index } = useParams()
  // console.log(index);
  //  const items=useSelector((state)=>state.allcart)
  //  console.log(items)
  //    let newData=data.filter((value,i)=>{
  //     console.log(i,index);
  //     return i===parseInt(index);
  //  })
  //    console.log(newData);

  const [myData, setMyData] = useState({});
  const [imgscaler, setImgScaler] = useState(false)
  const [sizeBottle, setSizeBottle] = useState("23z")
  // const [img,setImg]=useState(myData.img)
  console.log("mydata", myData)
 
  // console.log("img", img)
 
  const dispatch = useDispatch()
  useEffect(() => {
    data.forEach((value, i) => {
      if (i === Number(index)) {
        setMyData(value);
      }
    });
  }, [index]);

  useEffect(() => {
    console.log(myData);
  },[myData])

 
function handleAddItem(item){

  dispatch(addItem(item));
}


function imgHandler(value,name,price) {
  // console.log(value);

  myData.img = value;
  myData.price=price;
  myData.desc=name;
   setMyData({...myData},value,price,name)
  
}
 

  // Update the img state with the selected image URL
  // setImg(selectedImageUrl);

  //  console.log(data[index].choice[0]);

  return (
    <>
      <section id='swing'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='swing-img'>
                <img src={myData.img}
                  className={imgscaler ? "imgscale" : ""}></img>
              </div>
            </div>
           
           
            <div className='col-md-6 mt-5'>
              <div className="swing-con">
                <h1>{data[index].title}</h1>
                <span>${myData.price}</span>
                <h5>size</h5>
                <div className='mainsquad-btn'>
                  <div className='squad-btn'>
                    <input type="radio" value={data[index].size[0]} name='size' className='trendbuy-btn' onChange={(event) => {
                      setImgScaler(false)
                      setSizeBottle(event.target.value)

                    }} />
                    <label className=" btn-default" htmlFor="23-oz">
                      {data[index].size[0]}
                    </label>

                  </div>
                  <div className='squad-btn'>
                  <h4></h4>
                    <input type="radio" value={data[index].size[1]} name='size' className='trendbuy-btn' onChange={(event) => {
                      setImgScaler(true)
                      setSizeBottle(event.target.value)

                    }} />
                    <label className=" btn-default" htmlFor="34-oz">
                      {data[index].size[1]}
                    </label>

                  </div>
                </div>

                <div className='squad-changebtn'>
                  <p>{myData.desc}</p>
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


            
                    {/* <>
                              <input type='radio' className='radio-bg-black' name='color' ></input>
                    <input type='radio' className='radio-bg-blue' name='color'></input>
                             
                            </> */}

                    {myData.choice ?
                      <>
                        {myData.choice.map((value, index) => {
                          return (
                            <div key={index}>
                              <input type='radio' 
                              className={myData.desc2[index].includes("Blue")?"radio-bg-blue"
                              :myData.desc2[index].includes("White")?"radio-bg-white":
                              myData.desc2[index].includes("Black")?"radio-bg-black":
                              myData.desc2[index].includes("Mint")?"radio-bg-mint":
                              myData.desc2[index].includes("Pink")?"radio-bg-pink":
                              myData.desc2[index].includes("Green")?"radio-bg-green":
                              "radio-bg-default"
                              } 
                              name='color'
                              checked={myData.size===myData.desc?true:false}
                              value={(value)}
                              onChange={()=>imgHandler(
                                value,
                                 myData.desc2[index],
                                 myData.price2[index],

                            
                                )}

                               ></input>
                              {/* {console.log("redio btn",myData.desc2[index].includes("Black"))} */}
                            </div>
                          )
                        })}
                      </>

                      :
                      null}



                  </div>
                </div>
                <button className='swing-btn'
                 onClick={() =>
                  handleAddItem({
                    id: index,
                    title:myData.title,
                    desc: myData.desc,
                    img: myData.img,
                    price: myData.price,
                    quantity: myData.quantity,
                    totalQuantities:1,
                    totalPrice:myData.price,
                    choice:myData.choice,
                    price2:myData.price2,
                    desc2:myData.desc2,
                    size:myData.size,
                    sizeBottle:sizeBottle,



                    
          
                  })
                }
                >Add to card-{myData.price}</button>
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

export default Trendbuy;
