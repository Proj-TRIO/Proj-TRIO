import React from "react";
import headerlogo from "../../assets/headerlogo.jpg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Collapse, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import { Col, Row, Container, Button, Image } from 'react-bootstrap';

function Header() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  const mainStyle = {
    padding: "100px",
    height: "100vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "column"
  };
  return (
    <Container className="header" id="header" style={mainStyle}>
      <Row>
        <Col style={{ marginTop: "100px" }} >
          <Row className="text-heading1 margin-bot-30">
            <h1><b>Corporate Mentors</b></h1>
          </Row>
          <Row className="home-banner-small-text" style={{marginLeft: -1}}>
          Empowering BIPOC communities and immigrants by connecting them to mentors in the corporate world to increase opportunities.
          </Row>
          <Container className="div-block-17">
            <Row>
              <Col>  <Button className="ttc-button">
                WHY US
         </Button></Col>
              <Col>
                <Button className="ttc-buttonbigoutline--blue ">
                  CONTACT US
         </Button>
              </Col>
            </Row>

          </Container>
        </Col>
        <Col>
          <img src={require("../../assets/headerlogo.jpg")} />
        </Col>

      </Row>
    </Container >
  );
}

export default Header;
