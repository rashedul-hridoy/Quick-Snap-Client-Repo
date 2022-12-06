import React from 'react';
import img1 from '../../../assets/images/Banner/banner_7.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img1})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to <br /> QUICK SNAP</h1>
                    <p className="mb-5">QUICK SNAP provides various photography services. We provide Wild Life photography, Wedding photograpy, Sports photogrphy, Food photography, Journalism photography etc. You can take our service at a reasonable price. Hope to provide great service to our clients.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;