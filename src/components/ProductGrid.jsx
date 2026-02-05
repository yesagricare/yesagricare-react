import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import productsData from '../data/products.json';
import './ProductGrid.css';

const ProductGrid = ({ limit, showSearch = true }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Derived from data or hardcoded (better ensures order)
    const categories = ['All', 'Insecticides', 'Herbicides', 'Fungicides', 'PGRs & Nutrients', 'Other'];

    const filteredProducts = useMemo(() => {
        let result = productsData;

        // Filter by Category
        if (selectedCategory !== 'All') {
            result = result.filter(p => p.category === selectedCategory);
        }

        // Filter by Search
        if (searchTerm) {
            const searchLower = searchTerm.toLowerCase();
            result = result.filter(product => {
                return (
                    product.name.toLowerCase().includes(searchLower) ||
                    (product.chemical && product.chemical.toLowerCase().includes(searchLower)) ||
                    (product.description && product.description.toLowerCase().includes(searchLower))
                );
            });
        }

        if (limit) {
            result = result.slice(0, limit);
        }

        return result;
    }, [searchTerm, limit, selectedCategory]);

    return (
        <div className="product-grid-container">
            <div className="filter-bar">
                {/* Category Tabs */}
                <div className="category-tabs">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`category-tab ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {showSearch && (
                    <div className="search-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                )}
            </div>

            {filteredProducts.length > 0 ? (
                <div className="product-grid">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="no-results">
                    <p>No products found matching "{searchTerm}"</p>
                </div>
            )}
        </div>
    );
};

export default ProductGrid;
