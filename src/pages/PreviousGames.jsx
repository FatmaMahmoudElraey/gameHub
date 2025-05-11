import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/Games.css';

const PreviousGames = () => {
  const gameHistory = [
    {
      id: 1,
      name: 'Word Puzzle',
      date: '2023-05-15',
      score: 850,
      opponent: 'user123',
      result: 'Win'
    },
    {
      id: 2,
      name: 'Math Challenge',
      date: '2023-05-12',
      score: 720,
      opponent: 'mathWizard',
      result: 'Loss'
    },
    {
      id: 3,
      name: 'Trivia Master',
      date: '2023-05-08',
      score: 910,
      opponent: 'quizKing',
      result: 'Win'
    },
    {
      id: 4,
      name: 'Memory Match',
      date: '2023-05-05',
      score: 650,
      opponent: 'memoryMaster',
      result: 'Loss'
    },
    {
      id: 5,
      name: 'Speed Typing',
      date: '2023-05-01',
      score: 780,
      opponent: 'fastFingers',
      result: 'Win'
    }
  ];

  return (
    <div className="games-container">
      <div className="decoration-circle decoration-primary"></div>
      <div className="decoration-circle decoration-secondary"></div>
      
      <Container className="py-5">
        <div className="game-card mb-4">
          <div className="game-header">
            <div className="game-header-overlay"></div>
            <h1 className="game-title">Your Game History</h1>
            <p className="game-meta">Past games and achievements</p>
          </div>
          
          <div className="game-content">
            <div className="history-table-container">
              <table className="history-table">
                <thead>
                  <tr>
                    <th>Game</th>
                    <th>Date</th>
                    <th>Opponent</th>
                    <th>Score</th>
                    <th>Result</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {gameHistory.map((game) => (
                    <tr key={game.id}>
                      <td>
                        <div className="game-history-name">
                          <span className="game-icon">{game.name === 'Word Puzzle' ? '🧩' : 
                            game.name === 'Math Challenge' ? '➕' : 
                            game.name === 'Trivia Master' ? '❓' : 
                            game.name === 'Memory Match' ? '🧠' : '⌨️'}</span>
                          <span>{game.name}</span>
                        </div>
                      </td>
                      <td>{game.date}</td>
                      <td>{game.opponent}</td>
                      <td className="game-score-cell">{game.score}</td>
                      <td>
                        <span className={`game-result ${game.result === 'Win' ? 'win' : 'loss'}`}>
                          {game.result}
                        </span>
                      </td>
                      <td>
                        <Link to={`/game/${game.id}`} className="game-btn-small">
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PreviousGames;