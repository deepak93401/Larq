import React, { useEffect, useState } from 'react'
import './Trending2.css'
import data from '../Larqdata/Data';
import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom';
import Slider from "react-slick";

const Trending2= ({ Props, index }) => {
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
    
   
        // const imageChange = (x, y, index) => {
        //     setImg(prevImg => {
        //         const newData = [...data];
        //         newData[index] = { ...newData[index], img: x, desc: Props.desc2[y], price: Props.price2[y] };
        //         return x;
        //     });
        // }
    
    
//     const [newData,setNewData]=useState(Props);

//     const imageChange = (x, y, index,id) => {
// console.log(id);
//         // console.log(newData.img,x);

//         data.forEach((v,i)=>{
//             if(i===index && id===v.id)
//             {
//                 console.log(v.img);
//                 setNewData({...newData,['img']:v.choice[y],['desc']:v.desc2[y],['price']:v.price2[y]})
//                 // v.img=x;
//             }
//         })
     
//     }


 
       
       
    return (
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
                        
                        <img className={Props.img===x?"choice1_img":"choice1_img1"} src={x} alt=""
                            onClick={() => imageChange(x, y,index) } />
                            {/* if you want newdata variable so add newData.id add in onclick  */}
                    </div>
                ))}
                
            </div><br></br>
            <p>{Props.price}</p>
        </div>
    )
}

export default Trending2;