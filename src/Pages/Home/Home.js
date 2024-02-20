import './Home.css';
import React from 'react';

function Home() {
  return (
    <div className="App">
      <header className="Home-header">
        <div className='App_logo'></div>
        <div className='btn-login'>
            <button className='Learn-more'>Learn More</button>
            <button className='Get-Started'>Get Started</button>
        </div>
      </header>
    </div>
  );
}

export default Home;