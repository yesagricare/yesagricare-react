import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-content">
                <Link to="/" className="logo-link">
                    <div className="logo-wrapper">
                        <img src="/images/logo.png" alt="YesAgriCare" style={{ height: '60px' }} />
                        <span className="brand-name">Yes Agri Care</span>
                    </div>
                </Link>
                <nav className="nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
