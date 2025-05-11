import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { LanguageProvider } from './context/LanguageProvider.jsx';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeBeforeLogin from './pages/HomeBeforeLogin';
import HomeAfterLogin from './pages/HomeAfterLogin';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import PreviousGames from './pages/PreviousGames';
import Game from './pages/Game';
import CreateGame from './pages/CreateGame';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userData = JSON.parse(localStorage.getItem('user'));
    if (loggedIn && userData) {
      setIsLoggedIn(true);
      setUser(userData);
    }
  }, []);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  };

  return (
    <LanguageProvider>
      <div className="d-flex flex-column min-vh-100">
        <Navbar isLoggedIn={isLoggedIn} user={user} onLogout={handleLogout} />
        <main className="flex-grow-1 py-5">
          <Container>
            <Routes>
              <Route path="/" element={isLoggedIn ? <HomeAfterLogin user={user} /> : <HomeBeforeLogin />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/profile" element={<Profile user={user} />} />
              <Route path="/previous-games" element={<PreviousGames />} />
              <Route path="/game/:id" element={<Game />} />
              <Route path="/create-game" element={<CreateGame />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;