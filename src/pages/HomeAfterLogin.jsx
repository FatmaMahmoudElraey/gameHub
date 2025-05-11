import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import GameCard from '../components/GameCard';
import '../assets/css/HomeAfterLogin.css';

const HomeAfterLogin = ({ user }) => {
  const recommendedGames = [
    {
      id: 4,
      name: 'Memory Match',
      description: 'Test your memory with this classic matching game',
      category: 'Memory',
      emoji: '🧠'
    },
    {
      id: 5,
      name: 'Speed Typing',
      description: 'How fast can you type? Compete against others',
      category: 'Typing',
      emoji: '⌨️'
    },
    {
      id: 6,
      name: 'Geography Quiz',
      description: 'Identify countries, capitals and landmarks',
      category: 'Geography',
      emoji: '🌍'
    }
  ];

  // Default user data for demonstration purposes
  const defaultUser = {
    username: 'GamerPro99',
    email: 'gamerpro@example.com'
  };
  
  // Use provided user or default for demo
  const currentUser = user || defaultUser;
  
  // Update recommended games with images
  const recommendedGamesWithImages = recommendedGames.map(game => ({
    ...game,
    id: game.id.toString(), // Ensure id is a string for routing
    image: game.id === 4 
      ? 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&q=80&w=500'
      : game.id === 5
      ? 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=500'
      : 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&q=80&w=500',
    rating: (4 + Math.random()).toFixed(1)
  }));

  return (
    <div className="home-after-login">
      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-overlay"></div>
        <div className="decoration-circle decoration-primary"></div>
        <div className="decoration-circle decoration-secondary"></div>
        
        <Container className="position-relative">
          <h1 className="display-4 fw-bold">Welcome back, {currentUser?.username}!</h1>
          <p className="lead">Ready for your next challenge?</p>
          <Link to="/create-game" className="btn create-game-btn">
            Create New Game
          </Link>
        </Container>
      </section>

      {/* Recommended Games Section */}
      <section className="home-section">
        <Container>
          <h2 className="section-title">Recommended For You</h2>
          <Row className="g-4">
            {recommendedGamesWithImages.map(game => (
              <Col key={game.id} md={6} lg={4}>
                <GameCard game={game} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Recent Games Section */}
      <section className="home-section bg-dark-light">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="section-title mb-0">Your Recent Games</h2>
            <Link to="/previous-games" className="view-all-link">View All</Link>
          </div>
          
          <div className="recent-games-wrapper">
            <Row className="g-4">
              <Col md={4}>
                <div className="recent-game-card">
                  <h3 className="recent-game-title">Word Puzzle</h3>
                  <p className="recent-game-date">Yesterday</p>
                  <div className="recent-game-score">
                    Score: <span className="score-value">850</span>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="recent-game-card">
                  <h3 className="recent-game-title">Math Challenge</h3>
                  <p className="recent-game-date">2 days ago</p>
                  <div className="recent-game-score">
                    Score: <span className="score-value">720</span>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="recent-game-card">
                  <h3 className="recent-game-title">Trivia Master</h3>
                  <p className="recent-game-date">1 week ago</p>
                  <div className="recent-game-score">
                    Score: <span className="score-value">910</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          
          {/* Special Tournament Section */}
          <div className="special-section mt-5">
            <div className="special-section-overlay"></div>
            <Row className="align-items-center">
              <Col md={8}>
                <h3>Weekend Tournament</h3>
                <p>Join our special weekend tournament and compete with players around the world for exclusive rewards!</p>
              </Col>
              <Col md={4} className="text-md-end">
                <Button className="special-section-btn">Join Tournament</Button>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomeAfterLogin;