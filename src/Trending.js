import React, { useState } from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Bottle1 from "./img/Bottle1.jpg"
import Bottle2 from "./img/Bottle2.jpg"
import { Link } from 'react-router-dom';






function Trending() {
  const imgdata = [
    {
      id: 0,
      value: "23 oz",
      img: Bottle1,
      backgroundcolor: "#f7f7f7",
      price: "From $99"



    },
    {
      id: 1,
      value: "34 oz",
      img: Bottle2,
      backgroundcolor: "#f6f8f8",
      price: "From $119"

    },


  ]


  const imgdata1 = [
    {
      id: 0,
      value: "Obsidian Black",
      img: "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/SET-FLIP-UVC-STRAW-M-OB.png",
      backgroundcolor: "#f7f7f7",
      price: "From $109"



    },
    {
      id: 1,
      value: "Seaside Mint",
      img: "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/SET-FLIP-UVC-STRAW-M-SM.png",
      backgroundcolor: "#f6f8f8",
      price: "From $109"

    },
    {
      id: 2,
      value: " Granite White",
      img: "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/SET-FLIP-UVC-STRAW-M-GW.png",
      backgroundcolor: "#f6f8f8",
      price: "From $109"

    },


  ]

  const imgdata2 = [
    {
      id: 0,
      value: "Manaco blue",
      img: "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDMB050A.png",
      backgroundcolor: "#f7f7f7",
      price: "From $99"



    },
    {
      id: 1,
      value: "Obsidian Black",
      img: "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDOB050A.png",
      backgroundcolor: "#f6f8f8",
      price: "From $99"

    },
    {
      id: 2,
      value: "Seaside Mint",
      img: "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDSM050A.png",
      backgroundcolor: "#f6f8f8",
      price: "From $99"

    },
    {
      id: 3,
      value: "Granite White",
      img: "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDGW050A.png",
      backgroundcolor: "#f6f8f8",
      price: "From $99"

    },
    {
      id: 4,
      value: "Himalayan pink",
      img: "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDHP050A.png",
      backgroundcolor: "#f6f8f8",
      price: "From $99"

    },


  ]

  const imgdata3 = [
    {
      id: 0,
      value: "Manaco blue",
      img: "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/PAMB190A.png",
      backgroundcolor: "#f7f7f7",
      price: "From $99"



    },
    {
      id: 1,
      value: "Pure white",
      img: "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/PAPW190A.png",
      backgroundcolor: "#f6f8f8",
      price: "From $119"

    },


  ]

  const imgdata4 = [
    {
      id: 0,
      value: "Obsidian Black",
      img: "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/SET-FLIP-UVC-STRAW-M-OB.png",
      backgroundcolor: "#f7f7f7",
      price: "From $109"



    },
    {
      id: 1,
      value: " Granite White",
      img: "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/SET-FLIP-UVC-STRAW-M-GW.png",
      backgroundcolor: "#f6f8f8",
      price: "From $109"

    },
    {
      id: 2,
      value: "Eucalyptus Green",
      img: "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNWEG068A.png",
      backgroundcolor: "#f6f8f8",
      price: "From $109"

    },
    ,


  ]

  const imgdata5 = [
    {
      id: 0,
      value: "Obsidian Black",
      img: "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/SET-FLIP-UVC-STRAW-M-OB.png",
      backgroundcolor: "#f7f7f7",
      price: "From $39"



    },

    {
      id: 1,
      value: " Granite White",
      img: "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/SET-FLIP-UVC-STRAW-M-GW.png",
      backgroundcolor: "#f6f8f8",
      price: "From $49"

    },


  ]

  const imgdata6 = [
    {
      id: 0,
      value: "Obsidian Black",
      img: "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/SET-FLIP-UVC-STRAW-M-OB.png",
      backgroundcolor: "#f7f7f7",
      price: "From $39"



    },
    {
      id: 1,
      value: "Seaside Mint",
      img: "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/SET-FLIP-UVC-STRAW-M-SM.png",
      backgroundcolor: "#f6f8f8",
      price: "From $39"

    },
    {
      id: 2,
      value: " Granite White",
      img: "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/SET-FLIP-UVC-STRAW-M-GW.png",
      backgroundcolor: "#f6f8f8",
      price: "From $39"

    },


  ]
  const imgdata7 = [
    {
      id: 0,
      value: "Manaco blue",
      img: "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDMB050A.png",
      backgroundcolor: "#f7f7f7",
      price: "From $29"



    },
    {
      id: 1,
      value: "Obsidian Black",
      img: "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDOB050A.png",
      backgroundcolor: "#f6f8f8",
      price: "From $29"

    },
    {
      id: 2,
      value: "Seaside Mint",
      img: "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDSM050A.png",
      backgroundcolor: "#f6f8f8",
      price: "From $29"

    },
    {
      id: 3,
      value: "Granite White",
      img: "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDGW050A.png",
      backgroundcolor: "#f6f8f8",
      price: "From $29"

    },
    {
      id: 4,
      value: "Himalayan pink",
      img: "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDHP050A.png",
      backgroundcolor: "#f6f8f8",
      price: "From $29"

    },


  ]







  const [sliderdata, setSliderdata] = useState(imgdata[0])
  const [sliderdata1, setSliderdata1] = useState(imgdata1[0])
  const [sliderdata2, setSliderdata2] = useState(imgdata2[0])
  const [sliderdata3, setSliderdata3] = useState(imgdata3[0])
  const [sliderdata4, setSliderdata4] = useState(imgdata4[0])
  const [sliderdata5, setSliderdata5] = useState(imgdata5[0])
  const [sliderdata6, setSliderdata6] = useState(imgdata6[0])
  const [sliderdata7, setSliderdata7] = useState(imgdata7[0])

  const handleclick = (index) => {
    console.log(index)
    const slider = imgdata[index]
    console.log("Slider", slider)
    setSliderdata(slider)
  }

  const handleclick1 = (index) => {
    console.log(index)
    const slider = imgdata1[index]
    console.log("Slider", slider)
    setSliderdata1(slider)
  }

  const handleclick2 = (index) => {
    console.log(index)
    const slider = imgdata2[index]
    console.log("Slider", slider)
    setSliderdata2(slider)
  }

  const handleclick3 = (index) => {
    console.log(index)
    const slider = imgdata3[index]
    console.log("Slider", slider)
    setSliderdata3(slider)
  }

  const handleclick4 = (index) => {
    console.log(index)
    const slider = imgdata4[index]
    console.log("Slider", slider)
    setSliderdata4(slider)
  }

  const handleclick5 = (index) => {
    console.log(index)
    const slider = imgdata5[index]
    console.log("Slider", slider)
    setSliderdata5(slider)
  }

  const handleclick6 = (index) => {
    console.log(index)
    const slider = imgdata6[index]
    console.log("Slider", slider)
    setSliderdata6(slider)
  }

  const handleclick7 = (index) => {
    console.log(index)
    const slider = imgdata7[index]
    console.log("Slider", slider)
    setSliderdata7(slider)
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <section id='Trending'>
        <div className='container-fliud'>
          <h2 className='text-left'>Now Trending</h2>
          <div className='row mt-5'>
            {/* <div className='col-md-12'> */}
              <div className='trending-wrapper'>
                <Carousel responsive={responsive}>
          
                  {/* 1 div */}
                  <div className='Main-sec'>
                    <Link to="/swing"> <div className='Main-img'>
                      <img src={sliderdata.img}></img>
                    </div>
                    </Link>
                    <div className='Main-con'>
                      
                      <h1>Jolly Good Swing</h1>
                      <p>{sliderdata.value}</p>
                      
                      <div className='img-wrapper'>
                        {
                          imgdata.map((data, i) => (
                            <img key={data.id} src={data.img} onClick={() => handleclick(i)} className={sliderdata.id == i ? "clicked" : ""} />
                          ))
                        }
                      </div>
                      <p>{sliderdata.price}</p>

                    </div>


                  </div>

                  {/* 2n div */}

                  <div className='Main-sec'>
                  <Link to="/swing">
                    <div className='Main-img'>
                      <img src={sliderdata1.img}></img>
                    </div>
                    </Link>
                    <div className='Main-con'>
                      <h1>Pure Vibes</h1>
                      <p>{sliderdata1.value}</p>
                      <div className='img-wrapper'>
                        {
                          imgdata1.map((data, i) => (
                            <img key={data.id} src={data.img} onClick={() => handleclick1(i)} className={sliderdata1.id == i ? "clicked" : ""} />
                          ))
                        }
                      </div>
                      <p>{sliderdata1.price}</p>

                    </div>


                  </div>

                  {/* 3rd */}


                  <div className='Main-sec'>
                    <div className='Main-img'>
                      <img src={sliderdata2.img}></img>
                    </div>
                    <div className='Main-con'>
                      <h1>LARQ Bottle PureVis™</h1>
                      <p>{sliderdata2.value}</p>
                      <div className='img-wrapper'>
                        {
                          imgdata2.map((data, i) => (
                            <img key={data.id} src={data.img} onClick={() => handleclick2(i)} className={sliderdata2.id == i ? "clicked" : ""} />
                          ))
                        }
                      </div>
                      <p>{sliderdata2.price}</p>

                    </div>


                  </div>

                  {/* 4th */}

                  <div className='Main-sec'>
                    <div className='Main-img'>
                      <img src={sliderdata3.img}></img>
                    </div>
                    <div className='Main-con'>
                      <h1>LARQ Pitcher PureVis™</h1>
                      <p>{sliderdata3.value}</p>
                      <div className='img-wrapper'>
                        {
                          imgdata3.map((data, i) => (
                            <img key={data.id} src={data.img} onClick={() => handleclick3(i)} className={sliderdata3.id == i ? "clicked" : ""} />
                          ))
                        }
                      </div>
                      <p>{sliderdata3.price}</p>

                    </div>


                  </div>
                  {/* 5div */}
                  <div className='Main-sec'>
                    <div className='Main-img'>
                      <img src={sliderdata4.img}></img>
                    </div>
                    <div className='Main-con'>
                      <h1>LARQ Bottle Swig top</h1>
                      <p>{sliderdata4.value}</p>
                      <div className='img-wrapper'>
                        {
                          imgdata4.map((data, i) => (
                            <img key={data.id} src={data.img} onClick={() => handleclick4(i)} className={sliderdata4.id == i ? "clicked" : ""} />
                          ))
                        }
                      </div>
                      <p>{sliderdata4.price}</p>

                    </div>


                  </div>

                  {/* 6th div */}

                  <div className='Main-sec'>
                    <div className='Main-img'>
                      <img src={sliderdata5.img}></img>
                    </div>
                    <div className='Main-con'>
                      <h1>LARQ Bottle Filtered</h1>
                      <p>{sliderdata5.value}</p>
                      <div className='img-wrapper'>
                        {
                          imgdata5.map((data, i) => (
                            <img key={data.id} src={data.img} onClick={() => handleclick5(i)} className={sliderdata5.id == i ? "clicked" : ""} />
                          ))
                        }
                      </div>
                      <p>{sliderdata5.price}</p>

                    </div>


                  </div>

                  {/* 7th div */}

                  <div className='Main-sec'>
                    <div className='Main-img'>
                      <img src={sliderdata6.img}></img>
                    </div>
                    <div className='Main-con'>
                      <h1>LARQ Bottle Flip top</h1>
                      <p>{sliderdata6.value}</p>
                      <div className='img-wrapper'>
                        {
                          imgdata6.map((data, i) => (
                            <img key={data.id} src={data.img} onClick={() => handleclick6(i)} className={sliderdata6.id == i ? "clicked" : ""} />
                          ))
                        }
                      </div>
                      <p>{sliderdata6.price}</p>

                    </div>


                  </div>

                  {/* 8th */}

                  <div className='Main-sec'>
                    <div className='Main-img'>
                      <img src={sliderdata7.img}></img>
                    </div>
                    <div className='Main-con'>
                      <h1>LARQ Bottle Twist Top</h1>
                      <p>{sliderdata7.value}</p>
                      <div className='img-wrapper'>
                        {
                          imgdata7.map((data, i) => (
                            <img key={data.id} src={data.img} onClick={() => handleclick7(i)} className={sliderdata7.id == i ? "clicked" : ""} />
                          ))
                        }
                      </div>
                      <p>{sliderdata7.price}</p>

                    </div>


                  </div>



                </Carousel>;
              </div>
            </div>
          </div>
        {/* </div> */}
      </section>

    </>
  )
}

export default Trending;
