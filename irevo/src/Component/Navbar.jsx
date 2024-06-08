import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from './Image/logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

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
          <a href="#">HOME</a>
          <a href="#">SHOP</a>
          <a href="#">ABOUT US</a>
          <a href="#">FAQs</a>
        </div>
        <div className="navbar-logo">
          <a href="#"><img src={logo} alt="Logo" className="logo-image" /></a>
        </div>
        <div className="navbar-buttons">
          <a href="#" className="navbar-search"><FontAwesomeIcon icon={faSearch} /></a>
          <a href="#" className="navbar-cart"><FontAwesomeIcon icon={faShoppingCart} /></a>
          <a href="#" className="navbar-search"><FontAwesomeIcon icon={faUser} /></a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
