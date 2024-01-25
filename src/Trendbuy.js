import React from 'react'
import Swingimg from "./img/swing1.jpg"
import { useParams } from 'react-router-dom'
import data from './Data'
function Trendbuy() {
  const {index}=useParams()
  return (
    <>
         <section id='swing'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                            <div className='swing-img'>
                                <img src={data[index].img}></img>
                            </div>
                    </div>
                    <div className='col-md-6'>
                            <div className="swing-con">
                                   <h1>{data[index].title}</h1>
                                   <span>{data[index].price}</span>
                                   <h5>size</h5>
                                   <div className='squad-btn'>
                                    <button>{data[index].size[0]}</button>
                                    <button>{data[index].size[1]}</button>
                                   </div>
                                   <button className='swing-btn'>Add to card-{data[index].price}</button>

                            </div>
                    </div>
                </div>
            </div>
        </section>
    
    
    
    </>
  )
}

export default Trendbuy;
