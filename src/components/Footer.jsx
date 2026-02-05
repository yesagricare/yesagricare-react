import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-info">
                    <h3>Yes Agri Care</h3>
                    <p>Protecting Crops, Ensuring Prosperity.</p>
                </div>
                <div className="footer-links">
                    <Link to="/privacy-policy">Privacy Policy</Link>
                </div>
                <div className="copyright">
                    <p>&copy; {currentYear} Yes Agri Care. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
