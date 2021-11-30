import React from 'react'

const IndividualPhoto = ( {photo} ) => {
  return (
    <div className="card">
      <img className="card--image" src={photo.urls.full} width="50%" height="50%" alt={photo.alt_description} />
    </div>
  )
}

export default IndividualPhoto
