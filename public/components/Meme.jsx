import React from 'react'

export default function Meme() {

  // set up top text and bottom text
const [memeForm, setMemeForm] = React.useState({
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
      <div className="meme--form">
        <h1 className="meme--text top">Hello</h1>
        <h1 className="meme--text bottom">How are you</h1>
        <img className='meme--image' src="http://i.imgflip.com/1bij.jpg" alt="meme images" />
      </div>
    </div>
  )
}


