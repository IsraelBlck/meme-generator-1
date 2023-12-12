import React from "react";

export default function Meme() {
  // set up top text and bottom text
  const [formData, setFormData] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  // 

  return (
    <div className="meme">
      <div className="form">
        <input
          type="text"
          placeholder="Shut up"
          className="form--input"
          name="topText"
          value={formData.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="and take my money"
          className="form--input"
          name="bottomText"
          value={formData.bottomText}
          onChange={handleChange}
        />
        <button> Get a new meme image 🖼</button>
      </div>
    </div>
  );
}
