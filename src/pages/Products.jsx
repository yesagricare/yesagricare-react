import React from 'react';
import ProductGrid from '../components/ProductGrid';

const Products = () => {
    return (
        <div className="page-container" style={{ padding: '2rem 0 4rem' }}>
            <div className="container">
                <div className="section-header">
                    <h2>Our Products</h2>
                    <p>Comprehensive crop protection solutions for every need</p>
                </div>
                <ProductGrid />
            </div>
        </div>
    );
};

export default Products;
