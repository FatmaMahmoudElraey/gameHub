import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import '../assets/css/Profile.css';

const Profile = ({ user }) => {
    // Default user data for demonstration purposes
    const defaultUser = {
      username: 'GamerPro99',
      email: 'gamerpro@example.com',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      memberSince: 'January 2023',
      status: 'Active',
      stats: {
        gamesPlayed: 42,
        winRate: '68%',
        highestScore: 950
      },
      achievements: [
        { name: 'Champion', icon: '🏆', class: 'achievement-gold' },
        { name: 'First Place', icon: '🥇', class: 'achievement-silver' },
        { name: 'Sharpshooter', icon: '🎯', class: 'achievement-bronze' }
      ]
    };
    
    // Merge provided user data with default values to ensure all required properties exist
    const profileUser = {
      ...defaultUser,
      ...user,
      stats: {
        ...defaultUser.stats,
        ...(user?.stats || {})
      },
      achievements: user?.achievements || defaultUser.achievements
    };

    if (!profileUser) {
      return (
        <Container className="py-5 text-center">
          <div className="p-5 bg-dark text-white rounded">
            <h2>Please log in to view your profile</h2>
          </div>
        </Container>
      );
    }
  
    return (
      <div className="profile-container">
        <div className="decoration-circle decoration-primary"></div>
        <div className="decoration-circle decoration-secondary"></div>
        
        <Container>
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-header-overlay"></div>
              <Row className="align-items-center">
                <Col xs={12} md={4} className="text-center text-md-start">
                  <img 
                    src={profileUser.avatar} 
                    alt="Profile" 
                    className="profile-avatar mx-auto mx-md-0"
                  />
                </Col>
                <Col xs={12} md={8} className="text-center text-md-start mt-3 mt-md-0">
                  <h1 className="profile-username">{profileUser.username}</h1>
                  <p className="profile-email">{profileUser.email}</p>
                  <Button variant="light" className="edit-profile-btn mt-3">
                    Edit Profile
                  </Button>
                </Col>
              </Row>
            </div>
            
            <div className="profile-body">
              <div className="profile-section">
                <h2 className="profile-section-title">Account Information</h2>
                <Row className="g-4">
                  <Col md={6}>
                    <div className="profile-info-card">
                      <p className="profile-info-label">Username</p>
                      <p className="profile-info-value">{profileUser.username}</p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="profile-info-card">
                      <p className="profile-info-label">Email</p>
                      <p className="profile-info-value">{profileUser.email}</p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="profile-info-card">
                      <p className="profile-info-label">Member Since</p>
                      <p className="profile-info-value">{profileUser.memberSince}</p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="profile-info-card">
                      <p className="profile-info-label">Status</p>
                      <p className="profile-info-value">{profileUser.status}</p>
                    </div>
                  </Col>
                </Row>
              </div>
              
              <div className="profile-section">
                <h2 className="profile-section-title">Statistics</h2>
                <Row className="g-4">
                  <Col md={4}>
                    <div className="profile-stats-card">
                      <p className="profile-stats-label">Total Games Played</p>
                      <p className="profile-stats-value">{profileUser.stats.gamesPlayed}</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="profile-stats-card">
                      <p className="profile-stats-label">Win Rate</p>
                      <p className="profile-stats-value">{profileUser.stats.winRate}</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="profile-stats-card">
                      <p className="profile-stats-label">Highest Score</p>
                      <p className="profile-stats-value">{profileUser.stats.highestScore}</p>
                    </div>
                  </Col>
                </Row>
              </div>
              
              <div className="profile-section">
                <h2 className="profile-section-title">Achievements</h2>
                <div className="d-flex flex-wrap">
                  {profileUser.achievements.map((achievement, index) => (
                    <div key={index} className={`achievement-icon ${achievement.class}`}>
                      <span>{achievement.icon}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  };
  
  export default Profile;