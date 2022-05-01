import React from 'react'


const FaceRecognition = ({imageUrl}) => {
    

  return (
    <div className="center ma">
        <div className="mt2">
            <img id='inputimage' alt="predictive image" src={imageUrl} width='500px' height='auto'/>
        </div>
    </div>
  )
}

export default FaceRecognition