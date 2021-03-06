import React from 'react'
import Tilt from 'react-tilt'
import brain from './brain-logo.png'
import './Logo.scss'

const Logo = () => {
  return (
    <div className='ma4 mt2'>
        <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner pa3"><img src={brain} style={{paddingTop: '5px'}} alt="logo"/> </div>
        </Tilt>
    </div>
  )
}

export default Logo