import React from 'react'
import IndividualPhoto from './IndividualPhoto'

const Images = ({ images }) => {
  // console.log(images);
  return (
    <div className="card-list">
      {
        images.map((image) => (
          <IndividualPhoto key={image.id} image={image}/>
        ))
      }
    </div>
  )
}

export default Images
