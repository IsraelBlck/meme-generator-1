import React from 'react'

export default function Meme() {

  // set up top text and bottom text
const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
})



  return (
    <div className='meme'>
      <div className='form'>
        <input 
        type="text"
        placeholder='Shut up'
        className='form--input'
        />
        <input 
        type="text"
        placeholder='and take my money'
        className='form--input'
        />
      <button> Get a new meme image 🖼</button>
      </div>
    </div>
  )
}


