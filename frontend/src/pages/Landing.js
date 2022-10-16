import React, { useEffect } from 'react'
import MyNavbar from '../components/Navbar'
import Header from '../components/Landing/Header'
import About from '../components/Landing/About'
import ContactUs from '../components/Landing/ContactUs'
import Footer from '../components/Footer'
import MentorshipProgram from '../components/Landing/MentorshipProgram'
import VideosController from '../controller/Videos'
import { Col, Row, Container, Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';

function Landing() {
  return (
    <div>
      <MyNavbar />
      <Header />
      <About />
      <MentorshipProgram />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Landing