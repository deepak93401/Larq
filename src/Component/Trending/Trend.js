import React from 'react'
import data from '../Larqdata/Data'
import Trending2 from './Trending2'
import "./Trending2.css"
import "./Trendmedia.css"
function Trend() {
  return (
    <>
           <div className='trending'>
            <div className="trending_up">
                <h1> Now trending</h1>
            </div>
            <div className="tr-card">

                {data.map((item, i) => (
                    <>
                        <div className="trending_card" key={i}>
                            <Trending2 Props={item} index={i} />
                        </div>
                    </>
                ))}
            </div>
        </div>
      
    </>
  )
}

export default Trend
