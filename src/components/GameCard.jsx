import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Badge, Button } from 'react-bootstrap';
import { FaStar, FaArrowRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import '../assets/css/GameCard.css';

const GameCard = ({ game }) => {
  return (
    <Card className="game-card h-100">
      <div className="game-card-decoration"></div>
      <div className="game-card-overlay"></div>
      
      <div className="game-card-image-container">
        <Card.Img 
          variant="top" 
          src={game.image || '/src/assets/images/game-placeholder.jpg'} 
          alt={game.name}
          className="game-card-image"
        />
      </div>
      
      <Card.Body className="position-relative">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Card.Title className="text-white mb-0 game-card-title">{game.name}</Card.Title>
          <Badge bg="primary" className="game-card-category">
            {game.category}
          </Badge>
        </div>
        
        <Card.Text className="text-light game-card-description">
          {game.description}
        </Card.Text>
        
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="d-flex align-items-center">
            <FaStar className="text-warning me-1" />
            <span className="text-light small">{game.rating || '4.5'}</span>
          </div>
          
          <Link to={`/game/${game.id}`}>
            <Button variant="primary" className="d-flex align-items-center game-card-button">
              <span>Play Now</span>
              <FaArrowRight className="ms-2" size={12} />
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

GameCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    category: PropTypes.string.isRequired,
    rating: PropTypes.string,
  }).isRequired,
};

export default GameCard;
