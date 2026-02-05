import HeroCarousel from '../components/HeroCarousel';
import AboutSection from '../components/AboutSection';
import ImpactStats from '../components/ImpactStats';
import InfrastructureGallery from '../components/InfrastructureGallery';
import ProductGrid from '../components/ProductGrid';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-page">
            <HeroCarousel />
            <ImpactStats />
            <AboutSection />
            <InfrastructureGallery />

            <section className="featured-products section-padding" style={{ padding: '4rem 0', backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="section-header">
                        <h2>Featured Products</h2>
                        <p>Explore our top agricultural solutions</p>
                    </div>
                    {/* Limiting grid height/items via CSS or props would be ideal, 
                        but effectively showing grid here is fine for "preview" */}
                    <ProductGrid limit={6} showSearch={false} />

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/products" className="btn btn-primary">View All Products</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

