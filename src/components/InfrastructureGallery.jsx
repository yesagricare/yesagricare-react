import React from 'react';
import './InfrastructureGallery.css';

// Import factory/lab images
import factoryEntrance from '../assets/infrastructure/factory-entrance.jpg';
import formulationPlant from '../assets/infrastructure/formulation-plant.jpg';
import packingArea from '../assets/infrastructure/packing-area.jpg';
import scFormulation from '../assets/infrastructure/sc-formulation.jpg';
import qualityLab from '../assets/infrastructure/quality-lab.jpg';
import firstAidQc from '../assets/infrastructure/first-aid-qc.jpg';

const galleryImages = [
    { src: factoryEntrance, caption: 'Factory Entrance' },
    { src: formulationPlant, caption: 'Formulation Plant' },
    { src: packingArea, caption: 'Packing Area' },
    { src: scFormulation, caption: 'SC Formulation Unit' },
    { src: qualityLab, caption: 'Quality Control Lab' },
    { src: firstAidQc, caption: 'First Aid & QC Room' },
];

const InfrastructureGallery = () => {
    return (
        <section className="infrastructure-section">
            <div className="container">
                <div className="section-header">
                    <h2>Our Infrastructure</h2>
                    <p>State-of-the-art manufacturing facilities ensuring quality at every step</p>
                </div>
                <div className="gallery-grid">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="gallery-item">
                            <img src={image.src} alt={image.caption} loading="lazy" />
                            <div className="gallery-overlay">
                                <span>{image.caption}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfrastructureGallery;
