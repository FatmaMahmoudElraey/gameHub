import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaDiscord, FaTwitch, FaYoutube, FaGamepad, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext.jsx';
import { getTranslation } from '../utils/translations';
import '../assets/css/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Get the current language from context
  const { language: currentLanguage } = useLanguage();

  return (
    <footer className="footer">
      <Container>
        <Row className="py-5">
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <Link to="/" className="footer-brand d-flex align-items-center mb-3">
              <div className="footer-logo-container me-2 d-flex align-items-center justify-content-center">
                <FaGamepad className="text-white" />
              </div>
              <span className="footer-brand-text">{getTranslation('general.appName', currentLanguage)}</span>
            </Link>
            <p className="text-light-muted mb-4">
              {getTranslation('footer.tagline', currentLanguage)}
            </p>
            <div className="social-links">
              <a href="https://twitter.com" className="social-link">
                <FaTwitter />
              </a>
              <a href="https://discord.com" className="social-link">
                <FaDiscord />
              </a>
              <a href="https://twitch.tv" className="social-link">
                <FaTwitch />
              </a>
              <a href="https://youtube.com" className="social-link">
                <FaYoutube />
              </a>
            </div>
          </Col>
          
          <Col lg={8} md={6}>
            <Row>
              <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                <h5 className="footer-heading">{getTranslation('footer.quickLinks', currentLanguage)}</h5>
                <ul className="footer-links">
                  <li>
                    <Link to="/">{getTranslation('footer.home', currentLanguage)}</Link>
                  </li>
                  <li>
                    <Link to="/about">{getTranslation('footer.about', currentLanguage)}</Link>
                  </li>
                  <li>
                    <Link to="/previous-games">{getTranslation('footer.games', currentLanguage)}</Link>
                  </li>
                  <li>
                    <Link to="/contact">{getTranslation('footer.contact', currentLanguage)}</Link>
                  </li>
                </ul>
              </Col>
              
              <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                <h5 className="footer-heading">{getTranslation('footer.resources', currentLanguage)}</h5>
                <ul className="footer-links">
                  <li>
                    <Link to="/help">{getTranslation('footer.helpCenter', currentLanguage)}</Link>
                  </li>
                  <li>
                    <Link to="/faq">{getTranslation('footer.faq', currentLanguage)}</Link>
                  </li>
                  <li>
                    <Link to="/terms">{getTranslation('footer.termsOfService', currentLanguage)}</Link>
                  </li>
                  <li>
                    <Link to="/privacy">{getTranslation('footer.privacyPolicy', currentLanguage)}</Link>
                  </li>
                </ul>
              </Col>
              
              <Col sm={12} lg={6} className="mb-4 mb-lg-0">
                <h5 className="footer-heading">{getTranslation('footer.stayUpdated', currentLanguage)}</h5>
                <p className="text-light-muted mb-4">
                  {getTranslation('footer.newsletterText', currentLanguage)}
                </p>
                <form className="d-flex">
                  <input
                    type="email"
                    placeholder={getTranslation('footer.yourEmail', currentLanguage)}
                    className="form-control me-2"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    aria-label="Subscribe"
                  >
                    <FaEnvelope />
                  </button>
                </form>
              </Col>
            </Row>
          </Col>
        </Row>
        
        <div className="footer-bottom py-3 text-center">
          <p className="mb-0">&copy; {currentYear} {getTranslation('general.appName', currentLanguage)}. {getTranslation('footer.allRightsReserved', currentLanguage)}</p>
          <div className="mt-4 text-sm text-light-muted">
            <Link to="/terms" className="me-3">{getTranslation('footer.terms', currentLanguage)}</Link>
            <Link to="/privacy" className="me-3">{getTranslation('footer.privacy', currentLanguage)}</Link>
            <Link to="/cookies">{getTranslation('footer.cookies', currentLanguage)}</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

// Helper components
const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300 text-gray-400"
    aria-label="Social media"
  >
    {icon}
  </a>
);

const FooterLink = ({ to, children }) => (
  <li>
    <Link 
      to={to} 
      className="hover:text-primary-400 transition-colors inline-block py-1"
    >
      {children}
    </Link>
  </li>
);

export default Footer;