import React from 'react'
import data from '../Data'
import "../App.css"
import Subchild from './Subchild'



function Parent() {
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
                            <Subchild Props={item} index={i} />
                        </div>
                    </>
                ))}
            </div>
        </div>
    </>
  )
}

export default Parent
