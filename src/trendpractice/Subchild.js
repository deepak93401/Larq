
import React, { useEffect, useState } from 'react'
import './Subchild.css'
import data from '../Data';
import { Link } from "react-router-dom";

function Subchild({Props,index}) {
    const [img, setImg] = useState(false);
    

    const imageChange = (x, y, index) => {
        data.forEach((item, i) => {
            console.log(index, i);
            if (index === i) {
                item.img = x;
                item.desc = Props.desc2[y];
                item.price = Props.price2[y];
                setImg(!img)
            }

        })
    }
  return (
   <>
       <div className="trending_down">
            <Link to={`/product/${index}`}>
                <div className='card_img'>
                    <img src={Props.img} />
                </div>
            </Link>

            <h2>{Props.title}</h2><br></br>
            <p>{Props.desc}</p>
            <div className='choice'>

                {Props.choice.map((x, y) => (
                    <div className='choice1' key={y}>
                        <img className='choice1_img' src={x} alt=""
                            onClick={() => imageChange(x, y, index) } />
                    </div>
                ))}
            </div><br></br>
            <p>{Props.price}</p>
        </div>
   </>
  )
}

export default Subchild
