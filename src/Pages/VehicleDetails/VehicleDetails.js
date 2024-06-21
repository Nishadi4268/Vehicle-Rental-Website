import React, { useState, useEffect } from 'react';
import './VehicleDetails.css';
import NavBar from '../../Components/NavBar/NavBar.js';

const VehicleDetails = () => {
    const [currentCarIndex, setCurrentCarIndex] = useState(0);
    const [showingCars, setShowingCars] = useState([]);

    const allCars = [
        { title: 'BMW', description: 'Description of Car 1', image: 'car01.png' },
        { title: 'Car 2', description: 'Description of Car 2', image: 'car02.jpeg' },
        { title: 'Car 3', description: 'Description of Car 3', image: 'image111.png' },
        { title: 'Car 4', description: 'Description of Car 4', image: 'image111.png' },
        { title: 'Car 5', description: 'Description of Car 5', image: 'image111.png' },
        { title: 'Car 6', description: 'Description of Car 6', image: 'image111.png' }
    ];

    const showNextCars = () => {
        const newIndex = (currentCarIndex + 3) % allCars.length;
        setCurrentCarIndex(newIndex);
    };

    const showPrevCars = () => {
        const newIndex = (currentCarIndex - 3 + allCars.length) % allCars.length;
        setCurrentCarIndex(newIndex);
    };

    useEffect(() => {
        // Update showing cars whenever the currentCarIndex changes
        setShowingCars([
            allCars[currentCarIndex],
            allCars[(currentCarIndex + 1) % allCars.length],
            allCars[(currentCarIndex + 2) % allCars.length]
        ]);
    }, [currentCarIndex, allCars]);

    return (
        <div>
            <div className='fixed-top'>
                <div className='fixed-nav'>
                    <NavBar />
                </div>
                <div className='vehicles-top'>
                    &nbsp;
                </div>
            </div>
            <div className='main-content'>
                <text className='text-vehicle'>Experience the luxury of the open road with our premium selection of vehicles. From sleek sedans to spacious vans, and stylish bikes to elegant wedding cars, find the perfect ride for your next adventure. Explore our collection and elevate your driving experience today!</text>
                <div className="category-heading">
                    <span className="category-name">Car</span>
                    <span className="arrow">→</span>
                </div>
                <div className="car-section">
                    <button className="nav-btn" onClick={showPrevCars}>{'<'}</button>
                    {showingCars.map((car, index) => (
                        <div key={index} className="car-box">
                            <div className="car-image">
                                <img src={require(`./images/${car.image}`).default} alt={car.title} />
                            </div>
                            <div className="car-title">{car.title}</div>
                            <div className="car-description">{car.description}</div>
                        </div>
                    ))}
                    <button className="nav-btn" onClick={showNextCars}>{'>'}</button>
                </div>

                <div className="category-heading">
                    <span className="category-name">Van</span>
                    <span className="arrow">→</span>
                </div>
                <div className="category-heading">
                    <span className="category-name">Bike</span>
                    <span className="arrow">→</span>
                </div>
                <div className="category-heading">
                    <span className="category-name">Wheel</span>
                    <span className="arrow">→</span>
                </div>
                <div className="category-heading">
                    <span className="category-name">Wedding Car</span>
                    <span className="arrow">→</span>
                </div>
            </div>
        </div>
    );
}

export default VehicleDetails;
