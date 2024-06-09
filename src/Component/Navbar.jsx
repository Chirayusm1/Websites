import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from './Image/logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <div className={`navbar-container ${visible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <nav className="navbar">
        <div className="navbar-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>HOME</Link>
          <div className="navbar-dropdown">
            <Link to="/shop" className={location.pathname === '/shop' ? 'active' : ''}>SHOP</Link>
            <ul className="dropdown-menu">
              <li><Link to="/shop/category1">Soaps</Link></li>
              <li><Link to="/shop/category2">Honey</Link></li>
              <li><Link to="/shop/category3">Wax</Link></li>
            </ul>
          </div>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>ABOUT US</Link>
          <Link to="/faqs" className={location.pathname === '/faqs' ? 'active' : ''}>FAQs</Link>
        </div>
        <div className="navbar-logo">
          <Link to="/"><img src={logo} alt="Logo" className="logo-image" /></Link>
        </div>
        <div className="navbar-buttons">
          <Link to="/search" className="navbar-cart"><FontAwesomeIcon icon={faSearch} /></Link>
          <Link to="/cart" className="navbar-search"><FontAwesomeIcon icon={faShoppingCart} /></Link>
          <Link to="/favorites" className="navbar-cart"><FontAwesomeIcon icon={faStar} /></Link>
          <Link to="/account" className="navbar-search"><FontAwesomeIcon icon={faUser} /></Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
