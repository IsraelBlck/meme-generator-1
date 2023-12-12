import React from "react";

export default function Meme() {
  // set up top text and bottom text
  const [memeForm, setMemeForm] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  //meme image state
  const [memeImage, setMemeImage] = React.useState([])
  //fetch meme images api 
  React.useEffect(()=> {
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(data => setMemeImage(data.data.memes) )
  }, [])

  //get random image 

  function getMemeImages(){
    const randomGen = Math.floor(Math.random() * memeImage.length)
    const urls = memeImage[randomGen].url
    setMemeImage(prevImage => ({
      ...prevImage,
      randomImage:urls
    }))
  }
  //get top text and bottom text
  function handleChange(event) {
    const { name, value } = event.target;
    setMemeForm((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="meme">
      <div className="form">
        <input
          type="text"
          placeholder="Shut up"
          className="form--input"
          name="topText"
          value={memeForm.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="and take my money"
          className="form--input"
          name="bottomText"
          value={memeForm.bottomText}
          onChange={handleChange}
        />
        <button onClick={getMemeImages}> Get a new meme image 🖼</button>
      </div>
      <div className="meme--form">
        <h1 className="meme--text top">{memeForm.topText}</h1>
        <h1 className="meme--text bottom">{memeForm.bottomText}</h1>
        <img
          className="meme--image"
          src={memeForm.randomImage}
          alt="meme images"
        />
      </div>
    </div>
  );
}
