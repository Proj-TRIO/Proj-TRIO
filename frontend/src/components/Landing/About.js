import React from "react";
import ImageCard from "./ImageCard";
import recruiter from "../../assets/recruiter.jpg";
import jobSeeker from "../../assets/jobSeeker.jpg";
import { productAboutData } from "./productAboutData";
import useWindowPosition from "../../hooks/useWindowPosition";
import Typography from "@mui/material/Typography";
import { breakpoints } from "@mui/system";
import {Card, Button, Col, Row} from 'react-bootstrap';

function About() {
  const mainStyle = {
    minHeight: "100vh",
    backgroundColor: "turquoise",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const checked = useWindowPosition("header");
  return (
    <div className="about" id="about" style={mainStyle}>
      <div
        className="wrapper"
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "white",
          borderRadius: "1rem",
          padding: "2rem",
          justifyContent: "center",
          boxShadow: "8px 3px 21px -2px rgba(0,0,0,0.66)",
          minHeight: "70vh",
          maxWidth: "80vw",
          margin: "2rem"
        }}
      >
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          textAlign={"center"}
          width="100%"
        >
          What We Provide
        </Typography>
        <Row>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title style={{fontSize: 16, fontWeight: "bold"}}>Mentorship</Card.Title>
        <Card.Text>
        Enable employees to reach their career goals through effective mentor-mentee relationships.
        </Card.Text>
        <Button variant="outline-primary">View Solution</Button>
      </Card.Body>
    </Card></Col>
        
        <Col><Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title style={{fontSize: 16, fontWeight: "bold"}}>Connectivity</Card.Title>
        <Card.Text>
        Build a culture and a sense of belonging by fostering connections among employees.
        </Card.Text>
        <Button variant="outline-primary">View Solution</Button>
      </Card.Body>
    </Card></Col>
    </Row>

    <Row>

      <Col><Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title style={{fontSize: 16, fontWeight: "bold"}}>Diversity, Equity & Inclusion</Card.Title>
        <Card.Text>
        Advance the development and careers of diverse employees and allies.
        </Card.Text>
        <Button variant="outline-primary">View Solution</Button>
      </Card.Body>
    </Card></Col>

    <Col><Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title style={{fontSize: 16, fontWeight: "bold"}}>Leadership Development</Card.Title>
        <Card.Text>
        Develop and grow high-potential talent and people managers to lead in the new world of work.
        </Card.Text>
        <Button variant="outline-primary">View Solution</Button>
      </Card.Body>
    </Card></Col>
    </Row>

      </div>
    </div>
  );
}

export default About;
