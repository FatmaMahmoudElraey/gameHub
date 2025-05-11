import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import '../assets/css/Auth.css';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check for registration success message
  useEffect(() => {
    if (location.state?.registrationSuccess) {
      setLoginMessage('Registration successful! Please log in with your credentials.');
      setFormData(prev => ({ ...prev, email: location.state.email || '' }));
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsLoading(true);
    setLoginMessage('');
    
    // Get registered users from localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    
    // Find the user with matching email
    const user = registeredUsers.find(user => user.email === formData.email);
    
    // Simulate API call
    setTimeout(() => {
      if (user) {
        // In a real app, you would check password here
        // For demo, we'll accept any password
        onLogin(user); // Use the registered user data
        navigate('/');
      } else {
        // If no registered user found, create a demo user for testing
        const demoUser = {
          id: '123',
          username: 'demoUser',
          email: formData.email,
          avatar: 'https://i.pravatar.cc/150?img=3'
        };
        
        setLoginMessage('No registered user found with this email. Using demo account.');
        onLogin(demoUser);
        navigate('/');
      }
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="auth-container">
      <div className="decoration-circle decoration-primary"></div>
      <div className="decoration-circle decoration-secondary"></div>
      
      <Container className="d-flex justify-content-center align-items-center">
        <div className="auth-card">
          <h2>Sign in to your account</h2>
          
          {loginMessage && (
            <div className="alert alert-info mb-3">
              {loginMessage}
            </div>
          )}
          
          <Form className="auth-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                autoComplete="email"
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
                autoComplete="current-password"
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Row className="align-items-center mb-3">
              <Col>
                <Form.Check
                  type="checkbox"
                  id="remember-me"
                  label="Remember me"
                />
              </Col>
              <Col className="text-end">
                <Link to="#" className="forgot-password">Forgot password?</Link>
              </Col>
            </Row>

            <Button 
              variant="primary" 
              type="submit" 
              disabled={isLoading}
              className="w-100"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </Button>
          </Form>
          
          <div className="alt-link">
            Don't have an account?{' '}
            <Link to="/register">Register</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;