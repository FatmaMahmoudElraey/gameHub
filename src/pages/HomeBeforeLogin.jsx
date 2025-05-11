import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import GameCard from '../components/GameCard';
import { getTranslation } from '../utils/translations';
import { useLanguage } from '../context/LanguageContext.jsx';
import '../assets/css/Home.css';

const HomeBeforeLogin = () => {
  // Get current language from context
  const { language: currentLanguage } = useLanguage();

  const popularGames = [
    {
      id: "word-puzzle",
      name: getTranslation('home.popularGames.wordPuzzle.name', currentLanguage),
      description: getTranslation('home.popularGames.wordPuzzle.description', currentLanguage),
      category: getTranslation('home.popularGames.wordPuzzle.category', currentLanguage),
      image: 'https://images.unsplash.com/photo-1629760946220-5693ee4c46ac?auto=format&fit=crop&q=80&w=500',
      rating: '4.7'
    },
    {
      id: "math-challenge",
      name: getTranslation('home.popularGames.mathChallenge.name', currentLanguage),
      description: getTranslation('home.popularGames.mathChallenge.description', currentLanguage),
      category: getTranslation('home.popularGames.mathChallenge.category', currentLanguage),
      image: 'https://images.unsplash.com/photo-1589395937658-0557e7d89fad?auto=format&fit=crop&q=80&w=500',
      rating: '4.5'
    },
    {
      id: "trivia-master",
      name: getTranslation('home.popularGames.triviaMaster.name', currentLanguage),
      description: getTranslation('home.popularGames.triviaMaster.description', currentLanguage),
      category: getTranslation('home.popularGames.triviaMaster.category', currentLanguage),
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=500',
      rating: '4.8'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="decoration-circle decoration-primary"></div>
        <div className="decoration-circle decoration-secondary"></div>
        
        <Container className="text-center position-relative py-5">
          <h1 className="display-3 fw-bold mb-4">{getTranslation('home.hero.title', currentLanguage)}</h1>
          <p className="lead fs-4 mb-5 mx-auto" style={{ maxWidth: '700px' }}>
            {getTranslation('home.hero.subtitle', currentLanguage)}
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link 
              to="/register" 
              className="btn btn-light btn-lg fw-semibold text-primary"
            >
              {getTranslation('home.hero.getStarted', currentLanguage)}
            </Link>
            <Link 
              to="/login" 
              className="btn btn-outline-light btn-lg fw-semibold"
            >
              {getTranslation('home.hero.login', currentLanguage)}
            </Link>
          </div>
        </Container>
      </section>

      {/* Popular Games Section */}
      <section className="py-5 games-section">
        <Container>
          <h2 className="section-title text-center mb-5">{getTranslation('home.popularGames.title', currentLanguage)}</h2>
          <Row className="g-4">
            {popularGames.map(game => (
              <Col key={game.id} md={6} lg={4}>
                <GameCard game={game} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5 features-section">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title mb-3">{getTranslation('home.features.title', currentLanguage)}</h2>
            <p className="section-subtitle mx-auto" style={{ maxWidth: '800px' }}>
              {getTranslation('home.features.subtitle', currentLanguage)}
            </p>
          </div>
          <Row className="g-4">
            <Col md={4}>
              <Card className="feature-card h-100 text-center">
                <Card.Body>
                  <div className="feature-icon-container mx-auto mb-3">🏆</div>
                  <Card.Title className="feature-title">{getTranslation('home.features.competitive.title', currentLanguage)}</Card.Title>
                  <Card.Text className="feature-text">
                    {getTranslation('home.features.competitive.description', currentLanguage)}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="feature-card h-100 text-center">
                <Card.Body>
                  <div className="feature-icon-container mx-auto mb-3">🎮</div>
                  <Card.Title className="feature-title">{getTranslation('home.features.variety.title', currentLanguage)}</Card.Title>
                  <Card.Text className="feature-text">
                    {getTranslation('home.features.variety.description', currentLanguage)}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="feature-card h-100 text-center">
                <Card.Body>
                  <div className="feature-icon-container mx-auto mb-3">📈</div>
                  <Card.Title className="feature-title">{getTranslation('home.features.progress.title', currentLanguage)}</Card.Title>
                  <Card.Text className="feature-text">
                    {getTranslation('home.features.progress.description', currentLanguage)}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomeBeforeLogin;