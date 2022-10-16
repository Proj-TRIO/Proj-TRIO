
import { Col, Row, Container, Button, Card, CardGroup } from 'react-bootstrap';
import React, { useEffect } from 'react'
import VideosController from '../controller/Videos'

export default function WebinarVideos() {
    var [all_Videos, set_all_Videos] = React.useState([]);
    const videoRef = React.useRef();

    if (all_Videos.length == 0) {

        VideosController.getJobSeeker().then((res) => {
            console.log(res)
            set_all_Videos(res.videos)

        });
    }
    console.log(all_Videos)
    return (
        <Container style={{ backgroundColor: 'white', minHeight: "100%", minWidth: "100%" }}>
            <Container style={{ padding: "10%" }}>
                <Row style={{ paddingLeft: "30%", }}>
                    <h1>Webinar Videos</h1>
                </Row>
                <Row style={{}}>
                    <Container style={{
                        backgroundColor: 'white'
                    }}>
                        <Row style={{ marginBottom: "5%", }}>
                            {all_Videos.map((a, idx) => (
                                <Container>
                                {
                                    idx != 5 ? (
                                        <Row style={{ padding: "3%", paddingTop: "0%", paddingBottom: "0%", borderBottom: "2px solid black" }}>
                                    <Col style={{
                                        marginTop: "1%",
                                        marginLeft: "5px",
                                        maxWidth: "35%"
                                    }}>
                                    <video ref={videoRef} width="320" height="250" controls>
                                        <source src={a.sources[1].src} />
                                    </video>
                                    </Col>
                                    <Col style={{
                                        marginTop: "7%",
                                        marginLeft: "5px",
                                    }}>
                                            <Card style={{ width: '500px', height: '240px', paddingTop: "10px", paddingLeft: "10px", paddingRight: "10px", border: "0px" }}>
                                            <Card.Body>
                                                <Card.Text>
                                                    {a.long_description == null ?
                                                        a.description
                                                        :
                                                        <p>
                                                            <h5>{a.name}</h5>
                                                            <br />
                                                            {a.long_description.substring(0, 200)}......
                                                        </p>

                                                    }


                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                    ): null
                                }
                                </Container>
                                
                            ))}

                        </Row >

                    </Container >
                </Row>
            </Container>

        </Container >



    )
}
