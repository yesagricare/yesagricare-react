import React from 'react';
import './Hero.css';

const Hero = () => {
    const scrollToProducts = () => {
        const element = document.getElementById('products');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1>Protecting Crops, <br />Ensuring Prosperity</h1>
                <p>High-quality pesticides, herbicides, and fungicides for modern agriculture.</p>
                <button className="cta-button" onClick={scrollToProducts}>
                    View Products
                </button>
            </div>
        </section>
    );
};

export default Hero;
