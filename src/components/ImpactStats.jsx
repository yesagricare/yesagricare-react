import React from 'react';
import './ImpactStats.css';

const ImpactStats = () => {
    const stats = [
        { number: "10+", label: "Years of Experience" },
        { number: "60+", label: "Premium Products" },
        { number: "5000+", label: "Happy Customers" }
    ];

    return (
        <section className="impact-stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactStats;
