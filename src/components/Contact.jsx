import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header">
                    <h2>Contact Us</h2>
                    <p>Get in touch for orders and inquiries</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-card">
                        <h3>Head Office</h3>
                        <p><strong>Yes Agri Care Pvt Ltd</strong></p>
                        <p>Sy No 735/A, & 847 sq Yards in SY no.735/AA</p>
                        <p>Mandollagudem, Chinnakondur</p>
                        <p>Choutuppal, Rangareddy</p>
                        <p>Telangana - 508252</p>
                    </div>

                    <div className="contact-card">
                        <h3>Email Us</h3>
                        <p><a href="mailto:yesagricarepvtltd@gmail.com">yesagricarepvtltd@gmail.com</a></p>
                    </div>

                    <div className="contact-card">
                        <h3>Call Us</h3>
                        <p><a href="tel:+917032921220">+91 70329 21220</a></p>
                    </div>

                    <div className="contact-card">
                        <h3>Business Hours</h3>
                        <p>Monday - Saturday</p>
                        <p>9:00 AM - 6:00 PM</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
