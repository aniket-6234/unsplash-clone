import React from 'react'

const IndividualPhoto = ( {image} ) => {
  return (
    <div className="card">
      <img className="card--image" src={image.urls.full} width="50%" height="50%" alt={image.alt_description} />
    </div>
  )
}

export default IndividualPhoto
