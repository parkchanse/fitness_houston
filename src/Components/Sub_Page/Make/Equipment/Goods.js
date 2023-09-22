import React from 'react'
import data from './goods.json'

function Goods(){  
  let ImgData = data.data.map((detail, index) => {    
    return (
      <div key={index}>        
        <img src={detail.url} alt={detail.name}/>
      </div>
    )
  })
  
  return (
    <>
      {ImgData}
    </>
  )

}

export default Goods;