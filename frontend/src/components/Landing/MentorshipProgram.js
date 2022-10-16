import React from "react";
import { Col, Row, Container, Button, Image } from 'react-bootstrap';

function MentorshipProgram() {
  const mainStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Container id="mentorship" style={{alignContent: "center", paddingTop: "5%"}}>
    <Row>
        <Col><Image src={require("../Landing/mentorship.jpeg")} /></Col>
        <Col><Container>
        <h1 style={{color: 'black', fontWeight: "bold"}}> How the Mentorship Program Works</h1>

        <Row>
            <Col style={{padding: "1%", backgroundColor: "turquoise", border: "1px solid turquoise", borderRadius:100, marginRight: "1%", paddingLeft: "5%"}}>
                Free 6 hours trial
            </Col>
            <Col style={{backgroundColor: "turquoise", border: "1px solid turquoise", borderRadius:100, paddingLeft: "5%", paddingTop: "1%"}}>
                Meet for 4 hours monthly
            </Col>
        </Row>
        <Row>
        <br />
        We have established a program that fosters essential skills required for professional advancement.
        <br />
        <br />
        1) Smart Match Introductions
        <br />
        Automatically match employees with peers and leaders to build the network they need to feel supported. Quickly break the ice with conversation guides that keep ideas and conversations flowing.
        <br />
        
        <br />
        2) Mentorship Programs
        <br />
        Create guided 1:1 mentorship programs with structured curriculums and resources tailored to your business goals.
        <br />

        </Row>
        </Container></Col>
    </Row>
        
    </Container>
  );
}

export default MentorshipProgram;
