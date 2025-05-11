import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap';
import { FaGamepad, FaBars, FaTimes, FaUser, FaSignOutAlt, FaPlus } from 'react-icons/fa';
import SimpleLanguageSwitcher from './SimpleLanguageSwitcher';
import { getTranslation } from '../utils/translations';
import { useLanguage } from '../context/LanguageContext.jsx';
import '../assets/css/Navbar.css';

const Navbar = ({ isLoggedIn, user, onLogout }) => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  
  // Get current language from context
  const { language: currentLanguage } = useLanguage();

  // If there's no proper auth prop passed, check localStorage
  useEffect(() => {
    if (isLoggedIn === undefined) {
      const user = localStorage.getItem('user');
      if (user) {
        // setIsLoggedIn(true);
      }
    }
  }, [isLoggedIn]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('isLoggedIn');
      window.location.href = '/';
    }
    setExpanded(false);
  };

  // Check if a nav link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <BootstrapNavbar 
      expand="md" 
      fixed="top"
      variant="dark" 
      expanded={expanded}
      onToggle={setExpanded}
      className={`navbar-custom ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <Container>
        <Link to="/" className="navbar-brand-custom d-flex align-items-center">
          <div className="navbar-logo-container me-2 d-flex align-items-center justify-content-center">
            <FaGamepad className="text-white" />
          </div>
          <span className="navbar-brand-text">{getTranslation('general.appName', currentLanguage)}</span>
        </Link>
        
        <BootstrapNavbar.Toggle 
          aria-controls="navbar-nav" 
          className="border-0 shadow-none"
        >
          {expanded ? <FaTimes /> : <FaBars />}
        </BootstrapNavbar.Toggle>
        
        <BootstrapNavbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={() => setExpanded(false)}
            >
              {getTranslation('navbar.home', currentLanguage)}
            </Nav.Link>
            
            {isLoggedIn && (
              <>
                <Nav.Link 
                  as={Link} 
                  to="/previous-games" 
                  className={isActive('/previous-games') ? 'active' : ''}
                  onClick={() => setExpanded(false)}
                >
                  {getTranslation('navbar.myGames', currentLanguage)}
                </Nav.Link>
                <Nav.Link 
                  as={Link} 
                  to="/create-game" 
                  className={isActive('/create-game') ? 'active' : ''}
                  onClick={() => setExpanded(false)}
                >
                  {getTranslation('navbar.createGame', currentLanguage)}
                </Nav.Link>
              </>
            )}
            
            <Nav.Link 
              as={Link} 
              to="/about" 
              className={isActive('/about') ? 'active' : ''}
              onClick={() => setExpanded(false)}
            >
              {getTranslation('navbar.about', currentLanguage)}
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className={isActive('/contact') ? 'active' : ''}
              onClick={() => setExpanded(false)}
            >
              {getTranslation('navbar.contact', currentLanguage)}
            </Nav.Link>
          </Nav>
          
          <Nav>
            {isLoggedIn ? (
              <>
                <Nav.Link 
                  as={Link} 
                  to="/profile" 
                  className={`d-flex align-items-center ${isActive('/profile') ? 'active' : ''}`}
                  onClick={() => setExpanded(false)}
                >
                  <FaUser className="me-2 text-primary" />
                  <span>{user?.username || getTranslation('navbar.profile', currentLanguage)}</span>
                </Nav.Link>
                
                <Nav.Link 
                  as={Button} 
                  variant="link" 
                  className="nav-link d-flex align-items-center"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt className="me-2 text-primary" />
                  <span>{getTranslation('navbar.logout', currentLanguage)}</span>
                </Nav.Link>
              </>
            ) : (
              <div className="d-flex flex-column flex-md-row auth-buttons align-items-center">
                <Link 
                  to="/login" 
                  className="btn btn-gradient me-md-2 ms-md-2 mb-2 mb-md-0"
                  style={{'background': 'transparent', 'border': '1px solid white'}}
                  onClick={() => setExpanded(false)}
                >
                  {getTranslation('navbar.login', currentLanguage)}
                </Link>
                <Link 
                  to="/register" 
                  className="btn btn-gradient mb-3 mb-md-0"
                  onClick={() => setExpanded(false)}
                >
                  {getTranslation('navbar.register', currentLanguage)}
                </Link>
              </div>
            )}
            <div className="ms-md-2 d-flex align-items-center">
              <SimpleLanguageSwitcher />
            </div>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;