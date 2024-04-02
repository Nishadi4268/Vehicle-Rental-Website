import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Home() {
  return (
    <div className="App">
      <header className="Home-header">
        <div className='App_logo'></div>
        <div className='btn-login'>
          <button className='Learn-more'>Learn More</button>
          <Link to="/Login"><button className='Get-Started'>Get Started</button></Link>
        </div>
      </header>
    </div>
  );
}

export default Home;
