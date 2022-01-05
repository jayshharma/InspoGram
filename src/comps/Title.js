import React from 'react'
import Memoji from './images/memoji1.png'

const Title = () => {
  return (
    <div className="title">
      <div className='logo'>
      <h1>InspoGram</h1>
      <img src={Memoji} className="memoji" alt='memoji'/>
      </div>
      <h2>Jay's Creative Gallery</h2>
      <p>Upload images to build a custom moodboard for your next design project!</p>
    </div>
  )
}

export default Title;