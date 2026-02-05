import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const [expanded, setExpanded] = useState(false);

    // Fallback image handling could be done here or in CSS
    // For now, if product.image is null, we rendering a placeholder logic
    const imageSrc = product.image || '/images/logo.png';
    const isPlaceholder = !product.image;

    return (
        <div className="product-card">
            <div className={`card-image-container ${isPlaceholder ? 'placeholder' : ''}`}>
                <img
                    src={imageSrc}
                    alt={product.name}
                    loading="lazy"
                    style={isPlaceholder ? { objectFit: 'contain', padding: '2rem', opacity: 0.8 } : {}}
                />
            </div>
            <div className="card-content">
                <h3>{product.name}</h3>
                {product.chemical && (
                    <div className="chemical-info">
                        <strong>Chemical:</strong> {product.chemical}
                    </div>
                )}
                <div className={`description ${expanded ? 'expanded' : ''}`}>
                    <p>{product.description}</p>
                </div>
                <button
                    className="details-btn"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? 'Show Less' : 'View Details'}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
