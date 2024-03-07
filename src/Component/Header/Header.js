import { Link } from 'react-router-dom'
import { CiUser } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaLongArrowAltRight } from "react-icons/fa";
import './Header.css';
import './Headmedia.css';
import Pure1 from "../img/pure1.jpg"
import Pure2 from "../img/pure2.jpg"
import Pure3 from "../img/pure3.jpg"
import Home1 from "../img/home1.jpg"
import Home2 from "../img/home2.jpg"
import Drink1 from "../img/Drink1.jpg"
import Drink2 from "../img/Drink2.jpg"
import Drink3 from "../img/Drink3.jpg"
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import data from '../Larqdata/Data';
import { removeItem, decreaseQuantity, increaseQuantity } from '../redux/cartSlice';

function Header() {
 
  const [cross, setCross] = useState(false)
  const cartItem = useSelector((state) => state.cart.cartReducer.items)
  // const cart=useSelector((state)=>state.allcart.cart)
  const totalAmount = useSelector((state) => state.cart.cartReducer.totalAmount)
  // const totalquantity=useSelector((state)=>state.cart.cartReducer.items.totalQuantities)

  console.log("cartItem", cartItem);

  const dispatch = useDispatch()

  // useEffect(()=>{
  //   dispatch(getCardTotal());
  // },[cart])

  function deleteHandler(item) {
    dispatch(removeItem(item))

  }

  function decreaseHandler(item) {
    dispatch(decreaseQuantity(item))
    console.log("decrese")
  }

  function increaseHandler(item) {
    dispatch(increaseQuantity(item))
    console.log("increase")

  }
  return (
    <>
      <header>
        <div id='up-head'>
          <p>Save up to 24% off. <a href=''>Learn more</a></p>
        </div>
        <div className='container-fluid'>

          <div className='row'>
            {/* <div className='col-md-12'> */}


            <nav>
              <RxHamburgerMenu className='hamburger' />

              <ul>
                <li className='underline'><Link to="/shop" />Shop all
                  <div className='shop-div'>

                    <div className='shop-con'>
                      <button className='shop-btn1'>Explore all <FaLongArrowAltRight /></button><br></br>
                      <button className='shop-btn2'>Gifts Gets <FaLongArrowAltRight /></button>
                      <div className='shop1' >
                        <p>Filters & Accessories</p>
                        <p>Corporate gifting</p>
                      </div>
                      <div className='shop2'>
                        <p><span>LEARN MORE</span></p>
                        <p>PureVis™ technology</p>
                        <p>Nano Zero technology</p>
                      </div>


                    </div>
                    <div className='shop-img s-img1'>
                      <div className='shop-imgcon'>
                        <h6>Purification</h6>
                        <p>Filter & purify water on the go</p>
                      </div>

                    </div>
                    <div className='shop-img s-img2'>
                      <div className='shop-imgcon'>
                        <h6>Home</h6>
                        <p>Filter & purify water on the go</p>
                      </div>

                    </div>
                    <div className='shop-img s-img3'>
                      <div className='shop-imgcon'>
                        <h6>Drinkware</h6>
                        <p>Filter & purify water on the go</p>
                      </div>



                    </div>
                  </div>

                </li>
                <li><Link to="/pure" />Purification
                  <div className='shop-div'>

                    <div className='shop-con'>
                      <button className='shop-btn1'>Explore Purification <FaLongArrowAltRight /></button><br></br>
                      <button className='shop-btn2'>Gifts Gets <FaLongArrowAltRight /></button>
                      <div className='shop1' >
                        <p>Filters & Accessories</p>
                        <p>Corporate gifting</p>
                      </div>
                      <div className='shop2'>
                        <p><span>LEARN MORE</span></p>
                        <p>PureVis™ technology</p>
                        <p>Nano Zero technology</p>
                      </div>


                    </div>
                    <div className='pure-img'>
                      <img src={Pure1}></img>
                      <div className='pure-imgcon'>
                        <h6>Purification</h6>
                        <p>Filter & purify water on the go</p>
                      </div>

                    </div>
                    <div className='pure-img'>
                      <img src={Pure2}></img>
                      <div className='pure-imgcon'>
                        <h6>Home</h6>
                        <p>Filter & purify water on the go</p>
                      </div>

                    </div>
                    <div className='pure-img'>
                      <img src={Pure3}></img>
                      <div className='pure-imgcon'>
                        <h6>Drinkware</h6>
                        <p>Filter & purify water on the go</p>
                      </div>



                    </div>
                  </div>
                </li>
                <li><Link to="/Home" />Home
                  <div className='shop-div homepure'>

                    <div className='shop-con'>
                      <button className='shop-btn1'>Explore Purification <FaLongArrowAltRight /></button><br></br>
                      <button className='shop-btn2'>Gifts Gets <FaLongArrowAltRight /></button>
                      <div className='shop1' >
                        <p>Filters & Accessories</p>
                        <p>Corporate gifting</p>
                      </div>
                      <div className='shop2'>
                        <p><span>LEARN MORE</span></p>
                        <p>PureVis™ technology</p>
                        <p>Nano Zero technology</p>
                      </div>


                    </div>
                    <div className='pure-img'>
                      <img src={Home1}></img>
                      <div className='pure-imgcon'>
                        <h6>Purification</h6>
                        <p>Filter & purify water on the go</p>
                      </div>

                    </div>
                    <div className='pure-img'>
                      <img src={Home2}></img>
                      <div className='pure-imgcon'>
                        <h6>Home</h6>
                        <p>Filter & purify water on the go</p>
                      </div>

                    </div>

                  </div>

                </li>


                <li><Link to="/Drink" />DrinkWare
                  <div className='shop-div'>

                    <div className='shop-con'>
                      <button className='shop-btn1'>Explore Drinkware <FaLongArrowAltRight /></button><br></br>
                      <button className='shop-btn2'>Gifts Gets <FaLongArrowAltRight /></button>
                      <div className='shop1' >
                        <p>Filters & Accessories</p>
                        <p>Corporate gifting</p>
                      </div>
                      <div className='shop2'>
                        <p><span>LEARN MORE</span></p>
                        <p>PureVis™ technology</p>
                        <p>Nano Zero technology</p>
                      </div>


                    </div>
                    <div className='pure-img'>
                      <img src={Drink1}></img>
                      <div className='pure-imgcon'>
                        <h6>Purification</h6>
                        <p>Filter & purify water on the go</p>
                      </div>

                    </div>
                    <div className='pure-img'>
                      <img src={Drink2}></img>
                      <div className='pure-imgcon'>
                        <h6>Home</h6>
                        <p>Filter & purify water on the go</p>
                      </div>

                    </div>
                    <div className='pure-img'>
                      <img src={Drink3}></img>
                      <div className='pure-imgcon'>
                        <h6>Drinkware</h6>
                        <p>Filter & purify water on the go</p>
                      </div>



                    </div>
                  </div>


                </li>
              </ul>
              <div className='logo'>
                <h1><Link to="/">LARQ</Link></h1>
              </div>
              <ul>
                <li><Link to="/shop" />Technology</li>
                <li><Link to="/pure" />FaQ</li>
                <Link to="/Login" className='icon'><CiUser /></Link>
                <span className='icon' onClick={() => { setCross(true) }}>
                  <LuShoppingCart />
                  <span className='headsubicon'>


                  </span>
                </span>

                <>
                  <span className='itemquantity'>{cartItem.length}</span>
                </>


              </ul>




            </nav>
            {/* side cart */}
            <div className={cross ? ('side-cart-container') : ('side-cart-container-none')}>
              <div className='side-cart'>
                <div className='side-cart1'>
                  <h1>Your cart</h1>


                  <span className='side-cart1-icon' onClick={() => setCross(false)}><RxCross2 size={25} /></span>
                </div>
                <div className='wrapper'>
                  <p>$10 store credit</p>
                  <div>
                    <div className='circle-progress'>
                      <div className='circle'
                        style={totalAmount >= 150 ? { background: "#153a5b" } : { background: "" }}
                      ></div>
                      <div className='progress-bar'>
                        <div className='progress-bar-fill'
                          style={totalAmount < 150 ? { width: totalAmount } : { width: "100%" }}
                        ></div>
                      </div>
                    </div>
                    <div className='side-cart1-pera'>
                      <p>You're $150.00 away from $10 in store credit!</p>
                    </div>



                  </div>
                </div>
                <h2 className='head-item'> Items-
                  {/* {cart.length} */}
                </h2>
                {cartItem ?
                  <>
                    {
                      cartItem.map((data, ind) => (
                        <div className='side-cart2'>
                          <div className='subside-cart'>
                            <div className='sub-img'>
                              <img src={data.img}></img>
                            </div>

                            <div className='sub-con'>
                              <h6>{data.title}</h6>
                              <span>{data.desc}</span>
                              <span>{data.sizeBottle}</span>
                              {/* <p>insulated -seaside mint-25 oz</p> */}
                              <div className='cart-btn'>
                                <button className='decrementbtn'
                                  onClick={() => decreaseHandler(data)}
                                >-</button>
                                {/* <span className='cart-span'>{data.totalQuantities}</span> */}
                                <input type='text' value={data.totalQuantities} />
                                <button className='incrementbtn'
                                  onClick={() => increaseHandler(data)}
                                >+</button>
                              </div>
                            </div>
                            <div className='sub-con1'>
                              <MdDelete className='delete-icon'
                                onClick={() => deleteHandler(data)}
                              />
                              <h5>{data.totalPrice}</h5>
                            </div>

                          </div>

                        </div>

                      ))
                    }
                  </>
                  : null}
                <hr></hr>

                <div className='subtotal'>
                  <h5>Subtotal</h5>

                  <p>
                    {/* {cartItem.map((item)=>(
                          <>
                           {item.totalQuantities}
                          </>
                        ))} */}

                  </p>
                  <p>
                    {totalAmount}
                  </p>
                </div>
                <hr></hr>
                <Link to="/checkout">
                  <div className='check-btn'>
                    <button className='checkoutbtn'  onClick={() => setCross(false)}>Check out Now</button>
                  </div>

                </Link>


              </div>

            </div>
          </div>
        </div>
        {/* </div> */}


      </header>

    </>
  )
}

export default Header