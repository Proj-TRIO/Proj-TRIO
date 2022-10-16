
import { Col, Row, Container, Button, Card, CardGroup } from 'react-bootstrap';


import one_one from "../assets/1-1.jpg"
import mentorfiles from "../assets/mentorfiles.jpeg"
import resumereview from "../assets/resumereview.jpeg"
import webinar from "../assets/corporate4.jpeg"
import CoporateNetwork from "../assets/corporatenetwork.jpeg"
import React, { useState } from "react";
import MainImage from "../assets/corporate2.jpeg"
import JobSeekerController from "../controller/JobSeekerController";
import RecruiterController from "../controller/RecruiterController";
import UserController from "../controller/UserController";
import {
    Avatar,
} from "@mui/material";

export default function Dashboard() {
    const temp = [one_one, mentorfiles, resumereview, webinar];
    const text_field = ["1:1 Sesssions", "Mentor Files", 'Webinar Sessions', "Resume Review"]
    const [flip, setFlip] = useState(false);
    const [user, setUser] = React.useState(null);
    const [mentor, setMentor] = React.useState("");
    const [mentorId, setMentorId] = React.useState("");
    const [mentee, setMentee] = React.useState("");
    const [mentorLastName, setMentorLastName] = React.useState("");
    const [intern, setIntern] = React.useState("Intern");
    const [position, setPosition] = React.useState("R&D");
    const [pfp, setPfp] = React.useState(null);

    if(!user){
            UserController.getCurrent().then((res) => {
            setUser(res);
            JobSeekerController.getJobSeeker().then((r)=>{
                setMentee(r[0].firstName)
            })
            JobSeekerController.match().then((re) => { 
                setMentor(re.firstName)
                setMentorId(re)
                setIntern(re.options[1])
                setPosition(re.options[2])
                setMentorLastName(re.lastName)
            });           
            });
        }
    
        if (!pfp) {
            RecruiterController.getPfp2(mentorId).then((res) => {
                const base64String = btoa(new Uint8Array(res.data.data).reduce(function (data, byte) {
                    return data + String.fromCharCode(byte);
                }, ''));
                setPfp(base64String)
            });
        }
    return (
        <Container style={{marginTop: "6.5%", minWidth: "100%", minHeight: "100%"}}>
            <Row style={{backgroundColor: 'white', paddingBottom: "5%"}}> 
               <Row style={{fontSize: 20, fontWeight: "bold", fontFamily: "sans-serif", paddingLeft: "5%", paddingTop: "3%"}}>
               <h3 style={{color: 'black', fontWeight: "bold"}}>Welcome {mentee}, meet your mentor {mentor}!</h3>
               </Row>
               <Row style={{padding: "3%", paddingBottom: 0, paddingTop: "1%"}}>
                <Container style={{backgroundColor: 'white'}}>
                <Row>
                        <Col style={{width: "5%", maxWidth: "20%", marginRight: "6%"}}>
                            <Avatar
                            className="profile-pic"
                            alt="idc"
                            src={`data:image/png;base64,${pfp}`}
                            sx={{
                                marginTop: "10%",
                                width: "125%",
                                height: "80%",
                                border: "white 4px solid",
                            }}
                            />
                        </Col>
                        <Col style={{ width: "100%", maxWidth: "100%",}}>
                            <Row style={{color: "black", fontSize: 17, paddingTop: "5%"}}>
                                {mentor} {mentorLastName}
                            </Row>
                            <Row style={{color: "grey"}}>
                                {intern}, {position}
                            </Row>
                            <br />
                            <Row style={{fontSize: 20, color: "grey"}}>
                                Hi {mentee}, {mentorId.bio}
                            </Row>
                            <Row style={{marginLeft: -10, paddingTop: "5%"}}>
                                <Col className="col-md-5" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", marginRight: "3%", padding: "1%", paddingLeft: "2%", borderRadius: 5}}>
                                    Consumer Product
                                </Col>
                                <Col className="col-md-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", padding: "1%", paddingLeft: "2%", borderRadius: 5}}>
                                    {position}
                                </Col>
                            </Row>
                        </Col>
                        </Row>
                </Container>
               </Row>
            </Row>
            <Row>
                <Container style={{backgroundColor: "turquoise", minWidth: "100%", paddingBottom: "5%"}}>
                    <Row>
                        <Col>
                            <h3 style={{color: "grey", fontWeight: "bold", padding: "5%", paddingBottom: 0}}>One one One</h3>
                            <Container style={{color: "grey", padding: "5%", paddingTop: "0%"}}>
                            Create guided 1:1 mentorship programs with structured curriculums and resources tailored to your business goals.
                            </Container>
                            <Button style={{marginTop: "5%", marginLeft: "5%", marginBottom: "10%"}} href="/dashboard/1-1" variant="outline-primary">Attend Session</Button>
                        </Col>
                        <Col>
                            <h3 style={{color: "grey", fontWeight: "bold", padding: "5%", paddingBottom: "0%"}}>Webinar</h3>
                            <Container style={{color: "grey", padding: "5%", paddingBottom: 0, paddingTop: 0}}>
                                Find all the global webinar conducted by the mentor in this tab
                            </Container>
                            <br />
                            <br />
                            <br />
                            <Button style={{marginLeft: "5%", marginBottom: "10%"}} href="/dashboard/webinarvideos" variant="outline-primary">Attend Webinar</Button>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    )
}
