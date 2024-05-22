import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Footer from '../../AdminPages/Components/Footer/Footer.jsx';

export function Home() {
  const [currentImage, setCurrentImage] = useState(1);

  const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage % images.length) + 1);
  };

  return (
    <div>
      <div className="App">
        <header className="Home-header">
          <div className="slideshow-container">
            {images.map((image, index) => (
              <div
                key={index}
                className={index + 1 === currentImage ? 'slide fade show' : 'slide fade'}
                style={{ backgroundImage: `url('images/${image}')` }}
              ></div>
            ))}
            <button className="prev" onClick={() => setCurrentImage(currentImage - 1)}>
              &#10094;
            </button>
            <button className="next" onClick={nextImage}>
              &#10095;
            </button>
          </div>
          <div className='App_logo'></div>
          <div className='btn-login'>
            <form>
              <Link to="/about">
                <button className='Get-Started'>Learn More</button>
              </Link>
              <Link to="/login">
                <button className='Learn-more'>Get Started</button>
              </Link>
            </form>
          </div>
        </header>
      </div>
      <Footer />
    </div>
  );
}
