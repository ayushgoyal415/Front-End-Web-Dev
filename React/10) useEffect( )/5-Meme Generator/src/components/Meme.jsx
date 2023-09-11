import React from 'react';

export default function Meme() {
  //. Implementing states

  const [images, set_images] = React.useState([]);
  const [meme, set_meme] = React.useState({
    top_text: 'Medicine is Awesome',
    bottom_text: 'Programming is Awesome',
    image: 'https://i.imgflip.com/30b1gx.jpg'
  });

  //. Implementing Handlers
  function click_handler() {
    const random_image = images[Math.floor(Math.random() * images.length)].url;
    set_meme(curr_meme => ({ ...curr_meme, image: random_image }));
  }
  function change_handler(e) {
    const { name, value } = e.target;
    set_meme(curr_meme => ({ ...curr_meme, [name]: value }));
  }

  /*
    .We cannot declare the useEffect hook callback as an async function :

    This is because an async function, by default, returns a promise when
    resolved whereas React is expecting us to return a cleanup function
    from the useEffect hook. If you really want to use async function syntax,
    then declare an async function inside the useEffect callback and then call
    that function or use an auto invoking function expression. See below :

  */

  React.useEffect(() => {
    (async function () {
      let data = await fetch('https://api.imgflip.com/get_memes');
      data = await data.json();
      set_images(data.data.memes);
    })();
  }, []);

  const { top_text, bottom_text, image } = meme;

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          name="top_text"
          value={top_text}
          onChange={change_handler}
        />
        <input
          type="text"
          placeholder="Bottom text"
          name="bottom_text"
          value={bottom_text}
          onChange={change_handler}
        />
        <button onClick={click_handler}>Get a new meme image 🤣</button>
      </div>
      <div className="meme-box" style={{ backgroundImage: `url(${image})` }}>
        <p className="top-text">{top_text}</p>
        <p className="bottom-text">{bottom_text}</p>
      </div>
    </main>
  );
}
