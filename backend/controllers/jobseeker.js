const express = require('express')
const fileUpload = require('express-fileupload')
const User = require("../models/User");
const JobSeeker = require("../models/JobSeeker");
var fs = require('fs');
var path = require('path');
const mongodb = require('mongodb');

const ProfilePicture = require("../models/Image");
const Resume = require("../models/Resume");
const Recruiter = require("../models/Recruiter");

// Profile text data API
const add_job_seeker = async (req, res) => {

    if (!req.body.firstName || !req.body.lastName || !req.body.phoneNumber || !req.body.age || !req.body.bio || !req.body.workExp || !req.body.education || !req.body.currStatus || !req.body.options) {
        return res.status(400).send("There are missing fields in request body");
    }
    else {
        JobSeeker.exists({ uid: req.user._id }, function (err, docs) {
            if (docs != null) {
                res.status(403).send("User already exists, use 'put' endpoint for update")
            } else {
                const new_job_seeker = new JobSeeker({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    uid: req.user._id,
                    phoneNumber: req.body.phoneNumber,
                    age: req.body.age,
                    bio: req.body.bio,
                    workExperience: req.body.workExp,
                    education: req.body.education,
                    appliedPost: [],
                    currStatus: req.body.currStatus,
                    profilePicture: req.body.profilePicture,
                    resume: req.body.resume,
                    options: req.body.options
                });
                new_job_seeker
                    .save()
                    .then((result) => {
                        res.status(200).send(result);
                    })
                    .catch((err) => {
                        console.log(err);
                        res.status(500).send(err)
                    });
            }
        });
    }
};

const update_job_seeker = async (req, res) => {

    JobSeeker.exists({ uid: req.user._id }, function (err, docs) {
        if (docs == null) {
            res.status(403).send("User doesn't exist")
        } else {
            filter = { uid: req.user._id }

            let update = {}
            if (req.body.firstName) {
                update["firstName"] = req.body.firstName
            }
            if (req.body.lastName) {
                update["lastName"] = req.body.lastName
            }
            if (req.body.phoneNumber) {
                update["phoneNumber"] = req.body.phoneNumber
            }
            if (req.body.bio) {
                update["bio"] = req.body.bio
            }
            if (req.body.workExp) {
                update["workExperience"] = req.body.workExp
            }
            if (req.body.education) {
                update["education"] = req.body.education
            }
            if (req.body.currStatus) {
                update["currStatus"] = req.body.currStatus
            }

            JobSeeker.findOneAndUpdate(filter, update).then((result) => {
                res.status(200).send(result);
            }).catch((err) => {
                console.log(err);
                res.status(500).send(err)
            });


        }
    });
}

const view_job_seeker_profile = async (req, res) => {
    JobSeeker.find({ uid: req.user._id }, function (err, docs) {
        if (err) {
            res.send(400).send("User doesnt exist")
            console.log(err);
        }
        else {
            res.status(200).send(docs)
        }
    });
}
const view_job_seekers = async (req, res) => {
    JobSeeker.find({}, function (err, jobseekers) {
        if (err) {
            res.send(500).send("Internal Err")
            console.log(err);
        }
        else {
            res.status(200).send(jobseekers)
        }
    });
}

const add_job_seeker_profile_picture = async (req, res) => {
    if (!req.files.image.name) {
        return res.status(400).send("File is missing a name");
    }
    else {
        ProfilePicture.exists({ _id: req.user._id }, function (err, docs) {
            if (docs != null) {
                res.status(403).send("Profile picture for this user already exists, use 'put' endpoint for update")
            } else {
                const new_profile_picture = new ProfilePicture({
                    _id: req.user._id,
                    data: mongodb.Binary(req.files.image.data)
                });
                new_profile_picture
                    .save()
                    .then((result) => {
                        res.status(200).send(result);
                    })
                    .catch((err) => {
                        console.log(err);
                        res.status(500).send(err)
                    });
            }
        });
    }
};

const update_job_seeker_profile_picture = async (req, res) => {

    ProfilePicture.exists({ _id: req.user._id }, function (err, docs) {
        if (docs == null) {
            res.status(403).send("Profile picture doesn't exist")
        } else {
            filter = { _id: req.user._id }

            let update = {}
            update["data"] = mongodb.Binary(req.files.image.data)

            ProfilePicture.findOneAndUpdate(filter, update).then((result) => {
                res.status(200).send(result);
            }).catch((err) => {
                console.log(err);
                res.status(500).send(err)
            });
        }
    });
}

const view_job_seeker_profile_picture = async (req, res) => {
    ProfilePicture.find({ _id: req.user._id }, function (err, docs) {
        if (err) {
            res.send(400).send("User profile picture doesn't exist")
            console.log(err);
        }
        else {
            res.status(200).send(docs[0])
        }
    });
}

// Resume API
const add_job_seeker_resume = async (req, res) => {
    if (!req.files.resume.name) {
        return res.status(400).send("File is missing a name");
    }
    else {
        Resume.exists({ _id: req.user._id }, function (err, docs) {
            if (docs != null) {
                res.status(403).send("Resume for this user already exists, use 'put' endpoint for update")
            } else {
                const new_resume = new Resume({
                    _id: req.user._id,
                    name: req.files.resume.name,
                    data: mongodb.Binary(req.files.resume.data)
                });
                new_resume
                    .save()
                    .then((result) => {
                        res.status(200).send(result);
                    })
                    .catch((err) => {
                        console.log(err);
                        res.status(500).send(err)
                    });
            }
        });
    }
};

const update_job_seeker_resume = async (req, res) => {

    Resume.exists({ _id: req.user._id }, function (err, docs) {
        if (docs == null) {
            res.status(403).send("Resume doesn't exist")
        } else {
            filter = { _id: req.user._id }

            let update = {}
            update["name"] = req.files.resume.name
            update["data"] = mongodb.Binary(req.files.resume.data)

            Resume.findOneAndUpdate(filter, update).then((result) => {
                res.status(200).send(result);
            }).catch((err) => {
                console.log(err);
                res.status(500).send(err)
            });
        }
    });
}

const view_job_seeker_resume = async (req, res) => {
    Resume.find({ _id: req.user._id }, function (err, docs) {
        if (err) {
            res.send(400).send("User resume doesn't exist")
            console.log(err);
        }
        else {
            res.status(200).send(docs[0])
        }
    });
}

const match_and_add_mentor = async (req, res) => {
    Recruiter.find({}, function (err, recruiters) {
        if (err) {
            res.send(500).send("Internal Err")
            console.log(err);
        }
        else {
            // console.log(recruiters)
            // console.log(req.body);
            JobSeeker.find({ uid: req.user._id }, function (err, docs) {
                if (err) {
                    res.send(400).send("User doesnt exist")
                    console.log(err);
                }
                else {
                    // console.log(docs)
                    // console.log("---------------")
                    // console.log(recruiters)
                    // console.log("---------------")
                    // console.log(docs)
                    
                    max_common = 0;
                    max_index = 0;
                    for(let i = 0; i < recruiters.length; i++){
                        let options = recruiters[i].options
                        let temp_max_common = 0
                        for(let j = 0; j < recruiters[i].options.length; j++){
                            if(docs[0].options.includes(options[j])){
                                temp_max_common += 1
                            }
                        }
                        if(temp_max_common > max_common){
                            max_index = i
                            max_common = temp_max_common
                        }
                    }
                    res.status(200).send(recruiters[max_index])
                }
            });
        }
    });
}

module.exports = { add_job_seeker, update_job_seeker,view_job_seeker_profile, view_job_seekers, add_job_seeker_profile_picture,
    update_job_seeker_profile_picture, view_job_seeker_profile_picture, add_job_seeker_resume, update_job_seeker_resume, view_job_seeker_resume, match_and_add_mentor }