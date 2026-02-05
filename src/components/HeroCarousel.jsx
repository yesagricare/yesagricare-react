import React, { useState, useEffect } from 'react';
import './HeroCarousel.css';
import { Link } from 'react-router-dom';

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Placeholder images representing farmers/agriculture
    const slides = [
        {
            image: "/images/hero-slider-1.png",
        },
        {
            image: "/images/hero-slider-2.png",
        },
        {
            image: "/images/hero-slider-3.png",
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="hero-carousel">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    {/* Text and Overlay removed as per user request (images are self-contained banners) */}
                </div>
            ))}

            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroCarousel;
