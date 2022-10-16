
import { Col, Row, Container, Button, Card, CardGroup } from 'react-bootstrap';
import React, { useEffect } from 'react'
import VideosController from '../controller/Videos'
import ReactPlayer from 'react-player';

export default function WebinarVideos() {
    var [all_Videos, set_all_Videos] = React.useState([]);
    const videoRef = React.useRef();

    // videoRef.current?.load();

    if (all_Videos.length == 0) {

        VideosController.getJobSeeker().then((res) => {
            console.log(res)
            set_all_Videos(res.videos)

        });
    }
    console.log(all_Videos)





    return (
        <Container style={{ marginTop: "80px", padding: "40px" }}>
            <Row xs={1} md={2} className="g-4">
                {all_Videos.map((a, idx) => (
                    <Col>
                        {
                            idx == 5 ?
                                <video ref={videoRef} width="320" height="240" controls>
                                    <source src={a.sources[0].src} />
                                </video>
                                :
                                <video ref={videoRef} width="320" height="240" controls>
                                    <source src={a.sources[1].src} />
                                </video>
                        }
                    </Col>
                ))}
            </Row>
        </Container>

    )
}
