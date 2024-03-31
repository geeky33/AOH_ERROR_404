import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo2.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router, useNavigate
} from "react-router-dom";

export const NavBar = () => {
  const navigate=useNavigate();

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <a href="#" className="logo"><h1><b>LEARNHUB</b></h1>
          </a>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="/odem" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => navigate('/odem')}>Courses</Nav.Link>
              <Nav.Link href="/Leaderboard" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Rank</Nav.Link> 
              <Nav.Link href="/Quiz" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Quiz</Nav.Link> 

              <Nav.Link href="/Educatorank" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>#1 Educator</Nav.Link>
              <Nav.Link href="/Redeem" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Redeem</Nav.Link>
            </Nav>
            <span className="navbar-text">
         
              <a href="/signup">
                <button className="vvd"><span>Register</span></button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  )
}
