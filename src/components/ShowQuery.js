import React from 'react'
import IndividualSearchImage from './IndividualSearchImage'

const showQuery = ({ photos }) => {
console.log(photos.results)
  
  return (
    <div className="card-list">
      {
        photos?.results?.map((photo) => (
          <IndividualSearchImage key={photo.id} photo={photo}/>
        ))
      }
    </div>
  )
}

export default showQuery
