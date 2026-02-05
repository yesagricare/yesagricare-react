import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2>About Yes Agri Care</h2>
                        <p className="lead">Dedicated to revolutionizing agriculture with our commitment to quality, innovation, and eco-friendly solutions.</p>
                        <p>Incorporated in 2015 and headquartered in Hyderabad, we stand as a leading manufacturer and supplier of organic pesticides, plant growth regulators, and micro nutrients.</p>
                        <p>Our mission is to empower farmers by providing effective, sustainable solutions that enhance crop yields and soil health. We believe in the power of science and nature working together to create a brighter future for agriculture.</p>
                    </div>
                </div>

                <div className="leadership-section">
                    <h3>Leadership</h3>
                    <div className="md-profile">
                        <div className="md-image">
                            <img src="/images/md.jpg" alt="Ashok Poosapati" />
                        </div>
                        <div className="md-info">
                            <h4>Ashok Poosapati</h4>
                            <span className="designation">Managing Director</span>
                            <p className="md-quote">"At Yes Agri Care, our commitment goes beyond just products; it is about building lasting relationships with the farming community and ensuring their prosperity through innovation and integrity."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
