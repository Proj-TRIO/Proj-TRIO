import React, { useState, useRef } from 'react';
import { Grid, Paper, TextField, Button } from '@mui/material'
import RecruiterController from "../../controller/RecruiterController";
import JobSeekerController from "../../controller/JobSeekerController";
import {Dropdown, Container, Row, Col} from 'react-bootstrap';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useNavigate, UseNavigate } from 'react-router-dom';

const RecruiterForm = (props) => {
    const navigate = useNavigate();
    const [profileFormValues, setProfileFormValues] = useState((props.profile && props.profile.length !== 0) ? props.profile : [{ firstName: "", lastName: "", phoneNumber: "", company: "", age: 20, bio: "", currStatus: "asd",  education: [{school: "UTSC", program: "Computer Science", gradDate: "2024"}],}])
    const [workFormValues, setWorkFormValues] = useState((props.profile && props.profile.length !== 0) ? props.profile[0].workExperience : [{ company: "", jobTitle: "", startDate: "", description: "" }])
    const notNewProfile = (props.profile && props.profile.length !== 0)
    const [selectedPicture, setSelectedPicture] = useState();
    const [selectedPictureURL, setSelectedPictureURL] = useState(props.pfp ? `data:image/png;base64,${props.pfp}` : null);
    const [isPictureClicked, setIsPictureClicked] = useState(false);
    const [selectedResume, setSelectedResume] = useState(props.resume ? props.resume : null);
    const [isResumeClicked, setIsResumeClicked] = useState(false);
    const ResumeInput = useRef(null);
    const PictureInput = useRef(null);
    const pfpExist = props.pfp != null
    const resumeExist = props.resume != null
    const [status, setStatus] = useState("Select your current status")
    const [level, setLevel] = useState("Select your relevant experience level")
    const [industry, setIndustry] = useState("Tell us which industry you are interested in")
    const [goal, setGoal] = useState("Goal")

    const handleResumeClick = event => {
        ResumeInput.current.click();
    };
    const handlePictureClick = event => {
        PictureInput.current.click();
    };

    const handleResumeChange = event => {
        setSelectedResume(event.target.files[0]);
        setIsResumeClicked(true)
    };
    const handlePictureChange = event => {
        setSelectedPicture(event.target.files[0]);
        setSelectedPictureURL(URL.createObjectURL(event.target.files[0]))
        setIsPictureClicked(true)
    };
    let handleProfileChange = (event) => {
        let newProfileFormValues = [...profileFormValues];
        newProfileFormValues[0][event.target.name] = event.target.value;
        setProfileFormValues(newProfileFormValues);
    }
    let handleWorkChange = (i, e) => {
        let newWorkFormValues = [...workFormValues];
        newWorkFormValues[i][e.target.name] = e.target.value;
        setWorkFormValues(newWorkFormValues);

    }
    let addWorkFormFields = () => {
        setWorkFormValues([...workFormValues, { company: "", jobTitle: "", startDate: "", description: "" }])
    }
    let removeWorkFormFields = (i) => {
        let newWorkFormValues = [...workFormValues];
        newWorkFormValues.splice(i, 1);
        setWorkFormValues(newWorkFormValues)
    }
    let handleSubmit = (event) => {
        event.preventDefault()
        let body = profileFormValues
        delete body.workExperience;
        body[0].workExp = workFormValues
        body[0].options = [
            status, level, industry, goal
        ]
        if (selectedPicture != null && isPictureClicked) {
            console.log(pfpExist)
            if (pfpExist) {
                
                JobSeekerController.updatePfp(selectedPicture).then((res) => { console.log('image uploaded') });
            } else {
                JobSeekerController.addPfp(selectedPicture).then((res) => { console.log('image uploaded') });
            }
        }
        if (selectedResume != null && isResumeClicked) {
            if (resumeExist) {
                RecruiterController.updateResume(selectedResume).then((res) => { console.log('resume uploaded') });
            } else {
                RecruiterController.addResume(selectedResume).then((res) => { console.log('resume uploaded') });
            }
        }
        if (notNewProfile) {

          RecruiterController.updateRecruiter(body[0]).then((res) => { if (!res.status) { props.close() } });

        } else {
          RecruiterController.addRecruiter(body[0]).then((res) => { navigate('/profile')});
        }

    }
    return (
        <Grid style={{textAlign: "center", backgroundColor: "white"}}>
            <Paper elevation={0}
                style={{ paddingLeft: "20%", width: "80%", minHeight: "100%", paddingTop: "5%" }}
            >
                <form onSubmit={handleSubmit}>
                    <div style={{ textAlign: "center" }}>
                        <div>
                            <input
                                ref={PictureInput}
                                type="file"
                                accept="image/png, image/jpeg"
                                onChange={handlePictureChange}
                                style={{ display: 'none' }}
                            />
                            <img style={{ width: 150, height: 150 }} src={selectedPictureURL ? selectedPictureURL : require('../../assets/JobSeekerFormImageUpload.png')} onClick={() => handlePictureClick()} />
                            <div>
                            <Row>
                                <Col>
                                <TextField
                                    label='First Name'
                                    placeholder='Enter First Name'
                                    fullWidth
                                    name='firstName'
                                    value={profileFormValues[0].firstName}
                                    style={{ backgroundColor: "white", margin: "5%" }}
                                    onChange={e => handleProfileChange(e)}
                                    required
                                />
                                </Col>
                                <Col>
                                <TextField
                                    label='Last Name'
                                    placeholder='Enter Last Name'
                                    name='lastName'
                                    value={profileFormValues[0].lastName}
                                    onChange={e => handleProfileChange(e)}
                                    fullWidth
                                    required
                                    style={{ backgroundColor: "white", margin: "5%" }}
                                />
                                </Col>
                            </Row>
                            <Row>
                                <Col><TextField
                                    label='Email'
                                    placeholder='Enter Email'
                                    name='email'
                                    value={props.user.email}
                                    disabled
                                    fullWidth
                                    required
                                    style={{ backgroundColor: "white", margin: "5%" }}
                                /></Col>
                                <Col><TextField
                                    label='Phone Number'
                                    placeholder='Enter Phone Number'
                                    name='phoneNumber'
                                    type="number"
                                    value={profileFormValues[0].phoneNumber}
                                    onChange={e => handleProfileChange(e)}
                                    fullWidth
                                    required
                                    style={{ backgroundColor: "white", margin: "5%" }}
                                /></Col>
                            </Row>
                            </div>
                        </div>
                        <div>
                            <TextField
                                label='Short Bio'
                                placeholder='Enter Bio'
                                name='bio'
                                value={profileFormValues[0].bio}
                                style= {{ margin: "3%", width: "50%"}}
                                onChange={e => handleProfileChange(e)}
                                fullWidth
                                multiline
                                rows={4}
                                required
                                fullWidth
                            />
                        </div>

                        
                        <Grid align='left' fontSize={19} style={{paddingLeft: "2%"}}>
                        <br />
                            <h3>Preferences</h3>
                        <br />
                        </Grid>
                        <Container align='left' style={{paddingLeft: "3%"}}>
                        <Row style={{margin: "2%"}}>
                        <Col style={{fontWeight: "bold"}}>Employment Status</Col>
                        <Col >
                        <Dropdown>
                                    <Dropdown.Toggle style={{width: "100%", borderColor: "grey", backgroundColor: "white", color: "grey"}} id="dropdown-basic">
                                        {status}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={()=>{setStatus("Employed Full Time")}}>Employed Full Time</Dropdown.Item>
                                        <Dropdown.Item onClick={()=>{setStatus("Employed Part Time")}}>Employed Part Time</Dropdown.Item>
                                        <Dropdown.Item onClick={()=>{setStatus("Self Employed Full Time")}}>Self Employed Full Time</Dropdown.Item>
                                        <Dropdown.Item onClick={()=>{setStatus("Self Employed Part Time")}}>Self Employed Part Time</Dropdown.Item>
                                        <Dropdown.Item onClick={()=>{setStatus("Unemployed looking for a job")}}>Unemployed looking for a job</Dropdown.Item>
                                    </Dropdown.Menu>
                        </Dropdown>
                        </Col>
                        </Row>
                        <Row style={{margin: "2%"}}>
                            <Col style={{fontWeight: "bold"}}>Desired Industry</Col>
                            <Col><Dropdown>
                                    <Dropdown.Toggle style={{width: "100%", borderColor: "grey", backgroundColor: "white", color: "grey"}} id="dropdown-basic">
                                        {industry}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={()=>{setIndustry("Media and news")}}>Media and news</Dropdown.Item>
                                        <Dropdown.Item onClick={()=>{setIndustry("Software Engineering")}}>Software Engineering</Dropdown.Item>
                                        <Dropdown.Item onClick={()=>{setIndustry("Pharmaceutical")}}>Pharmaceutical</Dropdown.Item>
                                        <Dropdown.Item onClick={()=>{setIndustry("Other")}}>Other</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown></Col>
                        </Row>
                        <Row style={{margin: "2%"}}>  
                        <Col style={{fontWeight: "bold"}}>Experience Level</Col>
                        <Col><Dropdown>
                                    <Dropdown.Toggle style={{width: "100%", borderColor: "grey", backgroundColor: "white", color: "grey"}} id="dropdown-basic">
                                        {level}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={()=>{setLevel("Intern")}}>Intern</Dropdown.Item>
                                        <Dropdown.Item onClick={()=>{setLevel("Junior")}}>Junior</Dropdown.Item>
                                        <Dropdown.Item onClick={()=>{setLevel("Mid")}}>Mid</Dropdown.Item>
                                        <Dropdown.Item onClick={()=>{setLevel("Lead")}}>Lead</Dropdown.Item>
                                        <Dropdown.Item onClick={()=>{setLevel("Not Applicable")}}>Not Applicable</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown></Col>
                        </Row>
                        <Row style={{margin: "2%"}}>  
                        <Col style={{fontWeight: "bold"}}>Learning Goal</Col>
                        <Col><Dropdown>
                                    <Dropdown.Toggle style={{width: "100%", borderColor: "grey", backgroundColor: "white", color: "grey"}} id="dropdown-basic">
                                        {goal}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={()=>{setGoal("Land Job")}}>Land Job</Dropdown.Item>
                                        <Dropdown.Item onClick={()=>{setGoal("Switch Career")}}>Switch Career</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown></Col>
                        </Row>
                        </Container>
                        <Grid align='left' fontSize={19} style={{paddingLeft: "2%"}}>
                        <br />
                            <h3>Work Experiences</h3>
                        <br />
                        </Grid>

                        {workFormValues.map((element, index) => (
                            <div className="form-inline" key={index} style={{ paddingBottom: 20, paddingLeft: "0%" }}>
                            <Container style={{paddingLeft: "0%"}}>
                                <TextField
                                    label='Company'
                                    placeholder='Enter Company Name'
                                    fullWidth
                                    name='company'
                                    value={workFormValues[index].company}
                                    style={{ width: 240, paddingBottom: "1em", paddingRight: "3%", left: -25 }}
                                    InputProps={{ sx: {  } }}
                                    onChange={e => handleWorkChange(index, e)}
                                    required
                                />
                                <TextField
                                    label='Job title'
                                    placeholder='Enter Job title'
                                    name='jobTitle'
                                    value={workFormValues[index].jobTitle}
                                    style={{ width: 240, paddingBottom: "1em", paddingRight: "3%" }}
                                    InputProps={{ sx: {  } }}
                                    onChange={e => handleWorkChange(index, e)}
                                    required
                                />
                                <TextField
                                    label='Date'
                                    placeholder='Enter Job Date'
                                    name='startDate'
                                    value={workFormValues[index].startDate}
                                    style={{ width: 240, paddingBottom: "1em", paddingRight: "3%" }}
                                    InputProps={{ sx: {  } }}
                                    onChange={e => handleWorkChange(index, e)}
                                    required
                                />
                                </Container>
                                <TextField
                                    label='Description'
                                    placeholder='Enter Job Description'
                                    name='description'
                                    value={workFormValues[index].description}
                                    sx={{ borderRadius: 3, right: 13, paddingBottom: "1em", }}
                                    InputProps={{ sx: { height: 125, width: 760 } }}
                                    onChange={e => handleWorkChange(index, e)}
                                    multiline
                                    rows={4}
                                    required
                                />
                                {
                                    index ?
                                        <Button type="button" color='secondary' variant='filled' className="button remove" sx={{ backgroundColor: "#91a4e8", textTransform: 'none', color: "#FFFFFF", fontSize: 19, right: 340, marginBottom: 2 }} onClick={() => removeWorkFormFields(index)}>Remove</Button>
                                        : null
                                }
                            </div>
                        ))}
                        
                        <div className="button-section">
                            <Button type="button" color='secondary' variant='filled' className="button add" sx={{ backgroundColor: "#91a4e8", textTransform: 'none', color: "#FFFFFF", fontSize: 19, right: 359, marginBottom: 2 }} onClick={() => addWorkFormFields()}>Add</Button>
                        </div>
                        <Grid align='left' fontSize={19} style={{paddingLeft: "2%"}}>
                        <br />
                            <h3>Resume</h3>
                        <br />
                        </Grid>
                    </div>
                    <div style={{ paddingTop: 10 }}>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            ref={ResumeInput}
                            accept="application/pdf"
                            onChange={handleResumeChange}
                            style={{ display: 'none' }}
                        />

                        <Button startIcon={<FileUploadIcon />} type='button' color='black' variant='filled' onClick={handleResumeClick} sx={{ right: 250, width: 300, border: 2, borderColor: "grey", color: "grey", textTransform: 'none', fontSize: 19 }} fullWidth>{isResumeClicked ? selectedResume.name: 'Upload Resume'}</Button>
                    </div>
                    <div >
                        <Button type='submit' color='secondary' variant='filled' sx={{ borderRadius: 3, left: 295, width: 130, height: 45, backgroundColor: "#91a4e8", textTransform: 'none', color: "#FFFFFF", fontSize: 19, marginBottom: 10 }} fullWidth>Submit</Button>
                    </div>
                </form>
            </Paper>
        </Grid>
    );
}
export default RecruiterForm