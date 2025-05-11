import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGamepad, FaTrophy, FaUsers, FaLaptopCode } from 'react-icons/fa';
import '../assets/css/AboutUs.css';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
      bio: 'Gaming enthusiast with 10+ years of experience in the industry.'
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
      bio: 'Full-stack developer passionate about creating immersive gaming experiences.'
    },
    {
      name: 'Marcus Williams',
      role: 'Game Designer',
      image: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
      bio: 'Award-winning game designer with a focus on user experience and engagement.'
    },
    {
      name: 'Priya Patel',
      role: 'Community Manager',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
      bio: 'Dedicated to building and nurturing our growing gaming community.'
    }
  ];

  const values = [
    {
      icon: <FaGamepad className="text-primary-500 text-3xl" />,
      title: 'Passion for Gaming',
      description: 'We live and breathe games. Our platform is built by gamers, for gamers.'
    },
    {
      icon: <FaUsers className="text-primary-500 text-3xl" />,
      title: 'Community First',
      description: 'We believe in the power of community and strive to create an inclusive environment for all players.'
    },
    {
      icon: <FaLaptopCode className="text-primary-500 text-3xl" />,
      title: 'Innovation',
      description: 'We constantly push the boundaries of whats possible in online gaming experiences.'
    },
    {
      icon: <FaTrophy className="text-primary-500 text-3xl" />,
      title: 'Competitive Spirit',
      description: 'We foster healthy competition that brings out the best in players.'
    }
  ];

  return (
    <div className="about-us-page">
      {/* Decorative elements */}
      <div className="about-decoration about-decoration-1"></div>
      <div className="about-decoration about-decoration-2"></div>
      <div className="about-decoration about-decoration-3"></div>
      
      {/* Hero Section */}
      <section className="hero-section py-5">
        <div className="hero-overlay"></div>
        <div className="decoration-circle decoration-primary"></div>
        <div className="decoration-circle decoration-secondary"></div>
        
        <Container className="position-relative text-center">
          <h1 className="display-4 fw-bold text-white mb-4 text-gradient">
            About GameHub
          </h1>
          <p className="lead text-light-muted mx-auto" style={{ maxWidth: '800px' }}>
            We're on a mission to create the most engaging gaming platform in the world.
          </p>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="mb-5 mt-5">
        <Container>
          <h2 className="section-title">Our Story</h2>
          <div className="mission-card p-4 p-md-5 position-relative">
            <div className="decoration-circle decoration-primary"></div>
            <div className="decoration-circle decoration-secondary"></div>
            
            <div className="position-relative">
              <p className="text-light-muted fs-5 mb-5">
                GameHub was founded in 2020 with a simple idea: make online gaming more accessible, social, and fun. What started as a small project among friends has grown into a platform used by thousands of gamers worldwide.
              </p>
              <p className="text-light-muted fs-5 mb-5">
                Our team of passionate gamers and developers work tirelessly to create new games, improve existing ones, and foster a community where everyone feels welcome. We believe that gaming is not just about competition, but about connection.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Values Section */}
      <section className="mb-5">
        <Container>
          <h2 className="section-title">Our Values</h2>
          
          <Row className="g-4">
            {values.map((value, index) => (
              <Col key={index} md={6} lg={3}>
                <div className="value-card position-relative">
                  <div className="value-decoration"></div>
                  
                  <div className="position-relative">
                    <div className="value-icon">{value.icon}</div>
                    <h3 className="h4 fw-bold mb-3">{value.title}</h3>
                    <p className="value-text">{value.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="mb-5">
        <Container>
          <h2 className="section-title">Meet Our Team</h2>
          
          <Row className="g-4">
            {teamMembers.map((member, index) => (
              <Col key={index} md={6} lg={3}>
                <Card className="team-card h-100">
                  <div className="team-image-container">
                    <Card.Img 
                      variant="top" 
                      src={member.image} 
                      alt={member.name} 
                      onError={(e) => {
                        e.target.src = '/src/assets/images/default-avatar.jpg'; // Fallback image
                      }}
                    />
                  </div>
                  <Card.Body>
                    <h3 className="h5 fw-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-gradient mb-3">{member.role}</p>
                    <Card.Text className="text-light-muted">{member.bio}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="mb-5">
        <Container>
          <div className="cta-section">
            <div className="text-center">
              <h2 className="h2 fw-bold text-white mb-4 text-gradient">
                Ready to Join Our Gaming Community?
              </h2>
              <p className="lead text-light-muted mx-auto" style={{ maxWidth: '800px' }}>
                Create an account today and start playing with gamers from around the world.
              </p>
              <a 
                href="/register" 
                className="btn btn-gradient btn-lg"
              >
                Get Started
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>

  );
};

export default AboutUs;