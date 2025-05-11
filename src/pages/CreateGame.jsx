import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import '../assets/css/CreateGame.css';

const CreateGame = () => {
  const navigate = useNavigate();
  const [gameData, setGameData] = useState({
    name: '',
    category: 'trivia',
    difficulty: 'medium',
    questions: [],
    timeLimit: 30
  });

  const [currentQuestion, setCurrentQuestion] = useState({
    question: '',
    options: ['', '', '', ''],
    correctAnswer: 0,
    points: 10
  });
  
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGameData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuestionChange = (e) => {
    const { name, value } = e.target;
    setCurrentQuestion(prev => ({ ...prev, [name]: value }));
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...currentQuestion.options];
    newOptions[index] = value;
    setCurrentQuestion(prev => ({ ...prev, options: newOptions }));
  };

  const addQuestion = () => {
    if (!currentQuestion.question || currentQuestion.options.some(opt => !opt)) {
      setErrorMessage('Please fill all question fields');
      return;
    }
    
    setErrorMessage('');
    setGameData(prev => ({
      ...prev,
      questions: [...prev.questions, currentQuestion]
    }));
    
    setCurrentQuestion({
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
      points: 10
    });
  };

  const submitGame = () => {
    if (gameData.questions.length < 1) {
      setErrorMessage('Please add at least one question');
      return;
    }
    
    // In a real app, you would send this to your backend
    console.log('Game created:', gameData);
    setErrorMessage('');
    setSuccessMessage('Game created successfully! Redirecting...');
    setTimeout(() => navigate('/'), 2000);
  };

  return (
    <div className="create-game-container">
      <div className="decoration-circle decoration-primary"></div>
      <div className="decoration-circle decoration-secondary"></div>
      
      <Container>
        <div className="create-game-card">
          <div className="create-game-header">
            <div className="create-game-header-overlay"></div>
            <h1 className="create-game-title">Create New Game</h1>
          </div>
          
          <div className="create-game-content">
            {errorMessage && (
              <Alert variant="danger" className="mb-4">
                {errorMessage}
              </Alert>
            )}
            
            {successMessage && (
              <Alert variant="success" className="mb-4">
                {successMessage}
              </Alert>
            )}
            
            <div className="mb-5">
              <h2 className="section-title">Game Details</h2>
              <Row className="g-4">
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Game Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={gameData.name}
                      onChange={handleChange}
                      placeholder="Enter game name"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                      name="category"
                      value={gameData.category}
                      onChange={handleChange}
                    >
                      <option value="trivia">Trivia</option>
                      <option value="math">Math</option>
                      <option value="science">Science</option>
                      <option value="history">History</option>
                      <option value="geography">Geography</option>
                      <option value="entertainment">Entertainment</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Difficulty</Form.Label>
                    <Form.Select
                      name="difficulty"
                      value={gameData.difficulty}
                      onChange={handleChange}
                    >
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Time Limit (seconds)</Form.Label>
                    <Form.Control
                      type="number"
                      name="timeLimit"
                      value={gameData.timeLimit}
                      onChange={handleChange}
                      min="10"
                      max="120"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            
            <div className="mb-5">
              <h2 className="section-title">Add Questions</h2>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Question</Form.Label>
                  <Form.Control
                    type="text"
                    name="question"
                    value={currentQuestion.question}
                    onChange={handleQuestionChange}
                    placeholder="Enter your question"
                  />
                </Form.Group>
                
                <Form.Label>Options (select the correct answer)</Form.Label>
                {currentQuestion.options.map((option, index) => (
                  <div key={index} className="question-option">
                    <Form.Check
                      type="radio"
                      name="correctOption"
                      className="question-option-radio"
                      checked={currentQuestion.correctAnswer === index}
                      onChange={() => setCurrentQuestion(prev => ({ ...prev, correctAnswer: index }))}
                    />
                    <Form.Control
                      type="text"
                      className="question-option-input"
                      value={option}
                      onChange={(e) => handleOptionChange(index, e.target.value)}
                      placeholder={`Option ${index + 1}`}
                    />
                  </div>
                ))}
                
                <Form.Group className="mb-4 mt-4">
                  <Form.Label>Points</Form.Label>
                  <Form.Control
                    type="number"
                    name="points"
                    value={currentQuestion.points}
                    onChange={handleQuestionChange}
                    min="1"
                    max="100"
                  />
                </Form.Group>
              </Form>
              
              <Button
                variant="primary"
                onClick={addQuestion}
                className="add-question-btn"
              >
                Add Question
              </Button>
            </div>
            
            <div className="mb-5">
              <h2 className="section-title">Questions Added ({gameData.questions.length})</h2>
              {gameData.questions.length === 0 ? (
                <p className="text-muted">No questions added yet</p>
              ) : (
                <div className="questions-list">
                  {gameData.questions.map((q, index) => (
                    <div key={index} className="question-item">
                      <p className="question-text">{index + 1}. {q.question}</p>
                      <p className="question-answer">Correct answer: {q.options[q.correctAnswer]}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="d-flex justify-content-end">
              <Button
                onClick={submitGame}
                className="create-game-btn"
                disabled={gameData.questions.length === 0}
              >
                Create Game
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CreateGame;