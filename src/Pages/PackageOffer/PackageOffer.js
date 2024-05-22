import React, { useEffect } from 'react';
import './PackageOffer.css';
import Footer from '../../AdminPages/Components/Footer/Footer.jsx';
import NavBar from '../../Components/NavBar/NavBar.js'; 

const PackageOffer = () => {
    useEffect(() => {
        const topicElement = document.querySelector('.topicoffer');
        const texts = [
            "Stay with us for Offers",
            "Exclusive Benefits Await",
            "Unlock Discounts & More",
            "Join Our Bonus Program"
        ];
        let index = 0;

        const changeText = () => {
            topicElement.textContent = texts[index];
            index = (index + 1) % texts.length;
        };

        const intervalId = setInterval(changeText, 3000); // Change text every 3 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <div>
            <div className='navbar-offer-container'>
                <div className='navbar11'></div>
                <NavBar />
            </div>
            <div className='offer-background'>
                <div className='topicoffer'>Stay with us for Offers</div>
                <div className='offer-content'>
                    <div className='offer-text'>
                        "Discover a world of exclusive benefits on our Bonus Website, designed to elevate your vehicle rental experience. Earn loyalty points with every booking, unlocking discounts, free upgrades, and VIP status. Enjoy member-only discounts, referral rewards, and early access to new features. Our themed travel packages add a touch of excitement to your journeys, and milestone celebrations make every rental a special occasion. Join our bonus program and embark on a journey where loyalty is met with unparalleled perks and privileges. Happy travels!"
                    </div>
                    <div className='offer-boxes'>
                        <div className='box red-box'>
                            <div className='red-box-text'>
                                <div className='text-free'>free</div>
                                <div>Place Your 1st Booking</div>
                                <div>&</div>
                                <div>Get Offer !!..</div>
                            </div>
                            <div className='red-box-image'></div>
                        </div>
                        <div className='box green-box'>
                            <div className='green-box-text'>
                                Stay tuned ...!
                            </div>
                            <div className='green-box-percentage'>
                                25%
                            </div>
                            <div className='green-box-image'></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default PackageOffer;
