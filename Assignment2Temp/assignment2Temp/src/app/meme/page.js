"use client"
import { useEffect, useState } from 'react';
import './page.css';

function Meme() {
  const url = 'https://api.imgflip.com/get_memes'
  //default meme
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    image: 'https://i.imgflip.com/1bij.jpg',
  });

  const [allMemes, setAllMemes] = useState([]);
  //retrieve memes from api and set allMemes
  useEffect(() => {
    fetch(url)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => setAllMemes(data.data.memes))
      .catch((error) => console.error(error));
  }, []);

  //grab a random meme
  const getImage = () => {
    const image = allMemes[Math.floor(Math.random() * allMemes.length)];

    setMeme((prevMeme) => ({
      ...prevMeme,
      image: image.url,
    }));
  };

  //handle caption changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <div className='meme-container'>
      <div className='form'>
        <input
          type='text'
          placeholder='Top Text'
          name='topText'
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Bottom Text'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getImage}>Generate a new Meme</button>
      </div>

      <div className='meme'>
        <img src={meme.image} className='meme-image' alt='meme-image' />
        <h2 className='meme-text top'>{meme.topText}</h2>
        <h2 className='meme-text bottom'>{meme.bottomText}</h2>
      </div>
    </div>
  );
}

export default Meme;