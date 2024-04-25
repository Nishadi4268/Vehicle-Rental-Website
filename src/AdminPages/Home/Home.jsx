import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import NewNavigationBar from '../Components/NewNavigationBar/HomeNavigation.jsx';
import Footer from '../Components/Footer/Footer.jsx';

export function Home() {
 return (
  <div>
    <NewNavigationBar/>
    <div className="App">
      <header className="Home-header">
        <div className='App_logo'></div>
        <div className='btn-login'>
            <form>
            <Link to="/AdminProfile">
            <button className='Learn-more'>Learn More</button>
            <button className='Get-Started'>Get Started</button>
            </Link></form>
        </div>
      </header>
    </div>
    <Footer/>
    </div>
  );
}
