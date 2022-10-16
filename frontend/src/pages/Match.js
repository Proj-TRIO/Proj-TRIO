import * as React from 'react';
import JobSeekerController from "../controller/JobSeekerController";
import RecruiterController from "../controller/RecruiterController";
import UserController from "../controller/UserController";
import { useNavigate, UseNavigate } from 'react-router-dom';
import { Container, Col, Row, Form, Image, Button, Spinner } from "react-bootstrap";
import {
    Avatar,
} from "@mui/material";
export default function Match() {
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
            <Container style={{marginTop: "10%"}}>
            {
                !pfp ? (
                <Spinner animation="border" role="status" style={{marginLeft: "50%"}}>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                ) : (
                    <Container style={{maxWidth:"45%", marginTop:"5%", border: "1px solid rgba(0, 0, 0, 0.05)", boxShadow: "5px 5px 1px #9E9E9E"}}>
            <Row style={{backgroundColor: '#e5f2f0'}}> 
               <Row style={{fontSize: 20, fontWeight: "bold", fontFamily: "sans-serif", paddingLeft: "5%", paddingTop: "3%"}}>
               {mentee}, meet {mentor}!
               </Row>
               <Row style={{padding: "5%", paddingBottom: 0}}>
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
                        <Col style={{ width: "100%", maxWidth: "100%"}}>
                            <Row style={{color: "blue", fontSize: 17, paddingTop: "5%"}}>
                                {mentor} {mentorLastName}
                            </Row>
                            <Row style={{color: "grey"}}>
                                {intern}, {position}
                            </Row>
                            <Row style={{padding: "3%"}}>
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
               <Row style={{maxWidth: "20%", margin: "2%", marginTop: "3%", padding: "1%"}}>
                    <Button variant="primary" size="sm" href="/dashboard">Say Hello 👋</Button>{' '}
               </Row>
            </Row>

            <Row>
                <Row style={{padding: "5%"}}>
                    <Row style={{fontWeight: "bold", fontSize: 20}}>
                        🤔 Why {mentor}?
                    </Row>
                    <Row style={{color: "grey", fontSize: 18}}>
                        You have been introduced to {mentor} because you are looking 
                        to meet more senior collegaues in your department and sector.
                    </Row>
                </Row>
                <Row style={{padding: "5%", paddingTop: "0"}}>
                    <Row style={{fontWeight: "bold", fontSize: 20}}>
                        💭 Suggested Topic
                    </Row>
                    <Row style={{color: "grey", fontSize: 18}}>
                        Increase your knowledge of our products, teams 
                        <br />
                        and divisions by:
                        <br />
                        <div></div>1) Sharing an overview of your division and what makes it unique
                        <br />
                        2) Discussing an interesting project you have worked on recently
                        <br />
                        <br />
                    </Row>
                </Row>
            </Row>
            </Container>
                ) 
            }
            </Container>
        )
    }