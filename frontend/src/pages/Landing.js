import React, { useEffect } from 'react'
import MyNavbar from '../components/Navbar'
import Header from '../components/Landing/Header'
import About from '../components/Landing/About'
import ContactUs from '../components/Landing/ContactUs'
import Footer from '../components/Footer'
import VideosController from '../controller/Videos'
import { Col, Row, Container, Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';

function Landing() {
  console.log("yoo");
  // var [url, setUrl] = React.useState("");
  // const videoRef = React.useRef();

  // useEffect(() => {
  //   videoRef.current?.load();
  // }, [url]);

  // VideosController.getJobSeeker().then((res) => {
  //   console.log(url);
  //   setUrl(res.videos[0].sources[1].src);
  // });
  // <video ref={videoRef} width="320" height="240" controls>
  //       <source src={url} />
  //     </video>
  return (
    <div>
      <MyNavbar />
      <Header />
      <About />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Landing