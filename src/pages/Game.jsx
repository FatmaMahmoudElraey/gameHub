import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import '../assets/css/Games.css';

const Game = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      answer: 2,
      points: 10
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: 1,
      points: 5
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: 1,
      points: 8
    }
  ];

  useEffect(() => {
    // Simulate loading game data based on ID
    const gameData = {
      id,
      name: "Trivia Challenge",
      description: "Test your knowledge with these questions",
      category: "Trivia",
      difficulty: "Medium"
    };
    setGame(gameData);
  }, [id]);

  useEffect(() => {
    let timer;
    if (isPlaying && timeLeft > 0 && !gameOver) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && !gameOver) {
      setGameOver(true);
    }
    return () => clearTimeout(timer);
  }, [timeLeft, isPlaying, gameOver]);

  const startGame = () => {
    setIsPlaying(true);
    setTimeLeft(30);
    setScore(0);
    setGameOver(false);
    setCurrentQuestion(0);
  };

  const handleAnswer = (optionIndex) => {
    if (gameOver || showResult) return;
    
    setSelectedOption(optionIndex);
    setShowResult(true);
    
    setTimeout(() => {
      if (optionIndex === questions[currentQuestion].answer) {
        setScore(score + questions[currentQuestion].points);
      }
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setShowResult(false);
      } else {
        setGameOver(true);
      }
    }, 1500);
  };

  const restartGame = () => {
    startGame();
  };

  const exitGame = () => {
    navigate('/');
  };

  if (!game) return <div className="text-center py-12">Loading game...</div>;

  return (
    <div className="games-container">
      <div className="decoration-circle decoration-primary"></div>
      <div className="decoration-circle decoration-secondary"></div>
      
      <Container className="py-5">
        <div className="game-card">
          {/* Game Header */}
          <div className="game-header">
            <div className="game-header-overlay"></div>
            <Row className="align-items-center">
              <Col>
                <h1 className="game-title">{game.name}</h1>
                <p className="game-meta">{game.category} · {game.difficulty}</p>
              </Col>
              <Col xs="auto" className="text-end">
                <div>
                  <p className="mb-0">Score: <span className="game-score">{score}</span></p>
                  <p className="mb-0">Time: <span className="game-time">{timeLeft}s</span></p>
                </div>
              </Col>
            </Row>
          </div>

          {/* Game Content */}
          <div className="game-content">
            {!isPlaying && !gameOver && (
              <div className="game-instructions">
                <h2>Ready to play {game.name}?</h2>
                <p>{game.description}</p>
                <Button 
                  className="game-btn pulse" 
                  onClick={startGame}
                >
                  Start Game
                </Button>
              </div>
            )}

            {isPlaying && !gameOver && (
              <div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                </div>
                
                <div className="game-progress">
                  <div 
                    className="game-progress-bar" 
                    style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                  ></div>
                </div>
                
                <h3 className="game-question">{questions[currentQuestion].question}</h3>
                
                <div>
                  {questions[currentQuestion].options.map((option, index) => (
                    <div 
                      key={index}
                      onClick={() => !showResult && handleAnswer(index)}
                      className={`game-option ${selectedOption === index ? 
                        (index === questions[currentQuestion].answer ? 'correct' : 'incorrect') : ''} 
                        ${showResult && index === questions[currentQuestion].answer ? 'correct' : ''}`}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {gameOver && (
              <div className="game-over">
                <h2>Game Over!</h2>
                <p>Your final score:</p>
                <div className="final-score">{score}</div>
                <div className="d-flex justify-content-center gap-3 mt-4">
                  <Button 
                    className="game-btn" 
                    onClick={restartGame}
                  >
                    Play Again
                  </Button>
                  <Button 
                    className="game-btn-secondary" 
                    onClick={exitGame}
                  >
                    Exit Game
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Game;