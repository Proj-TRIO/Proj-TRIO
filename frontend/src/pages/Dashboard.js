
import { Col, Row, Container, Button, Card, CardGroup } from 'react-bootstrap';


import one_one from "../assets/1-1.jpg"
import mentorfiles from "../assets/mentorfiles.jpeg"
import resumereview from "../assets/resumereview.jpeg"
import webinar from "../assets/corporate4.jpeg"
import CoporateNetwork from "../assets/corporatenetwork.jpeg"
import React, { useState } from "react";
import MainImage from "../assets/corporate2.jpeg"


export default function Dashboard() {
    const temp = [one_one, mentorfiles, resumereview, webinar];
    const text_field = ["1:1 Sesssions", "Mentor Files", 'Webinar Sessions', "Resume Review"]
    const [flip, setFlip] = useState(false);
    return (
        <Container style={{ backgroundColor: 'white', minHeight: "100%", minWidth: "100%" }}>
            <Container style={{ padding: "10%" }}>

                <Row>
                    <Container style={{
                        backgroundColor: 'white'
                    }}>

                        <Row md={1} className="g-12" style={{ marginBottom: "5%" }}>
                            {Array.from({ length: text_field.length }).map((_, idx) => (
                                <Col style={{
                                    margin: "5px",
                                    padding: "2px",
                                    paddingLeft: "20%",
                                    paddingTop: "5%",
                                    // paddingRight: "10px",
                                }} >
                                    <Row>
                                        <Col>
                                            <Card style={{ width: '300px', minHeight: '30\0px', paddingTop: "10px", paddingLeft: "10px", paddingRight: "10px" }}>
                                                <Card.Img variant="top" src={temp[idx]} width="0px" height="220px" />
                                                <Card.Body>
                                                    <Card.Title><Card.Link href="/dashboard/WebinarVideos">{text_field[idx]}</Card.Link></Card.Title>
                                                    <Card.Text>
                                                        Random Text
              </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            hell
                                    </Col>
                                    </Row>


                                </Col >
                            ))
                            }
                        </Row >

                    </Container >
                </Row>
            </Container>

        </Container>


    )
}
