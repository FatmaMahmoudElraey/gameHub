import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Accordion } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import '../assets/css/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section py-5 position-relative">
        <div className="hero-overlay"></div>
        <div className="decoration-circle decoration-primary"></div>
        <div className="decoration-circle decoration-secondary"></div>
        
        <Container className="position-relative">
          <Row className="justify-content-center text-center">
            <Col md={8} lg={6}>
              <h1 className="display-4 fw-bold mb-4">
                <span className="text-white">Get in Touch</span>
              </h1>
              <p className="lead text-light-muted mb-4">
                Have questions or feedback? We'd love to hear from you!
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Details */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <ContactCard 
                icon={<FaMapMarkerAlt className="contact-icon text-primary" />}
                title="Our Location"
                details="123 Gaming Street, Digital City, GA 30000"
              />
            </Col>
            
            <Col md={6} lg={3}>
              <ContactCard 
                icon={<FaPhoneAlt className="contact-icon text-primary" />}
                title="Phone Number"
                details="+1 (555) 123-4567"
              />
            </Col>
            
            <Col md={6} lg={3}>
              <ContactCard 
                icon={<FaEnvelope className="contact-icon text-primary" />}
                title="Email Address"
                details="support@gamehub.com"
              />
            </Col>
            
            <Col md={6} lg={3}>
              <ContactCard 
                icon={<FaClock className="contact-icon text-primary" />}
                title="Working Hours"
                details="Mon - Fri: 9AM - 5PM EST"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form and Map */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <div className="contact-form-container">
                <h2 className="h3 fw-bold mb-4">Send Us a Message</h2>
                
                {submitSuccess && (
                  <div className="alert alert-success mb-4">
                    Your message has been sent successfully. We'll get back to you soon!
                  </div>
                )}
                
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      isInvalid={!!formErrors.name}
                      className="form-control-dark"
                    />
                    <Form.Control.Feedback type="invalid">
                      {formErrors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!formErrors.email}
                      className="form-control-dark"
                    />
                    <Form.Control.Feedback type="invalid">
                      {formErrors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      isInvalid={!!formErrors.subject}
                      className="form-control-dark"
                    />
                    <Form.Control.Feedback type="invalid">
                      {formErrors.subject}
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      isInvalid={!!formErrors.message}
                      className="form-control-dark"
                    />
                    <Form.Control.Feedback type="invalid">
                      {formErrors.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Button
                    variant="gradient"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-100"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending Message...
                      </>
                    ) : 'Send Message'}
                  </Button>
                </Form>
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.7307513302184!2d-84.39027112385712!3d33.7518589733056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5039fcd19bd3d%3A0x95c07dd0fc66ba95!2sPiedmont%20Park!5e0!3m2!1sen!2sus!4v1697474334907!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                  className="map-iframe"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-5 faq-section">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={6}>
              <h2 className="h2 fw-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-light-muted">
                Can't find the answer you're looking for? Reach out to our customer support team.
              </p>
            </Col>
          </Row>
          
          <Row className="justify-content-center">
            <Col lg={8}>
              <Accordion className="faq-accordion">
                <FaqItem 
                  eventKey="0"
                  question="How do I create an account?"
                  answer="You can create an account by clicking the 'Register' button in the top right corner of the page. Fill out the form with your details and you're good to go!"
                />
                
                <FaqItem 
                  eventKey="1"
                  question="Is GameHub free to use?"
                  answer="GameHub offers both free and premium options. The basic features are free, but you can unlock additional features and benefits with a premium subscription."
                />
                
                <FaqItem 
                  eventKey="2"
                  question="How do I report a bug?"
                  answer="You can report bugs through our contact form on this page or by sending an email directly to support@gamehub.com with details about the issue you're experiencing."
                />
                
                <FaqItem 
                  eventKey="3"
                  question="Can I delete my account?"
                  answer="Yes, you can delete your account from your profile settings page. Please note that this action is permanent and all your data will be removed from our systems."
                />
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

const ContactCard = ({ icon, title, details }) => {
  return (
    <Card className="contact-card h-100 text-center">
      <Card.Body>
        <div className="contact-icon-container mx-auto mb-3">
          {icon}
        </div>
        <h3 className="h5 fw-semibold text-white mb-2">{title}</h3>
        <Card.Text className="text-light-muted">{details}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const FaqItem = ({ eventKey, question, answer }) => {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>{question}</Accordion.Header>
      <Accordion.Body>{answer}</Accordion.Body>
    </Accordion.Item>
  );
};
export default ContactUs;