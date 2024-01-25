import React from 'react'
import data from './Data'
import Trending2 from './Trending2'
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
