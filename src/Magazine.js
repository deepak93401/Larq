import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Img1 from "./img/img-1.jpg"
import Img2 from "./img/img-2.jpg"
import Img3 from "./img/img-3.jpg"
import Img4 from "./img/img-4.jpg"
import Img5 from "./img/img-5.jpg"
import Img6 from "./img/img-6.jpg"
import Img7 from "./img/img-7.jpg"
import Img8 from "./img/img-8.jpg"
import Img9 from "./img/img-9.jpg"
import Img10 from "./img/img-10.jpg"
import { FaLongArrowAltRight } from "react-icons/fa";

function Magazine() {
  const data = [
    {
        image:Img1,
        txt: 'I’m a nutritionist, and I only use filtered water. Here’s why.',
        read: 'Read more'

    },
    {
        image:Img2,
        txt: 'This is how much plastic you are eating per week',
        read: 'Read more'

    },
    {
        image:Img3,
        txt: 'How clean is New York Tap Water?',
        read: 'Read more'

    },
    {
        image:Img4,
        txt: 'How to remove PFAS, PFOA, PFOS from tap water',
        read: 'Read more'

    },
    {
        image:Img5,
        txt: 'How clean is London tap water?',
        read: 'Read more'

    },
    {
        image:Img6,
        txt: 'How to clean your reusable water bottle (if you don’t have a self-cleaning one)',
        read: 'Read more'

    },
    {
        image: Img7,
        txt: 'What is Japandi Interior Design?',
        read: 'Read more'

    },
   

]
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
    <section id="Magazine">
    <div className='container-fuild'>
      <div className='row'>
        
           <div className='col-md-10'>
            <div className='Mega-headcon'>
               <h2 className='text-left'>basq magazine</h2>
              <p className="mega-pera">Take a peek at our online magazine where we cover everything from water to travel and wellness.</p>
            </div>
        
          </div>
          <div className='col-md-2'>
            <div className='Mega-head-btn'>
            <button className='Mega-button'>Explore basq <FaLongArrowAltRight/></button>
            </div>
        
          </div>
        
        {/* </div> */}
         
      </div>
    
        <div className='row'>

      
       <Carousel responsive={responsive}>
        
        {data.map((item, index) => (
                    <>
              

                   
                        <div className="pseudo-item">
                            <img key={(item.index)} src={item.image} />
                            <p>{item.txt}</p>
                            <a href=''>{item.read}</a>
                        </div>
                  
                    </>

                )
                )}

        

</Carousel>;
</div>
      
    </div>
    </section>
  )
}

export default Magazine;
