require("dotenv").config();

const { json, urlencoded } = require("body-parser");
const cors = require("cors");
const express = require("express");
const fileUpload = require("express-fileupload");
const { AuthRoutes, RecruiterRoutes, JobSeekerRoutes } = require('./routes')
const { passport, store } = require("./mongodb_setup/setup")
const session = require('express-session');

const app = express();


app.use(express.static(__dirname + '/public'));
app.use(fileUpload())
app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: 'Trio',
    cookie: {
        sameSite: 'none', //add
        secure: true,  //add
        maxAge: 30000
    },
    proxy: true,
    store: store,
    resave: true,
    saveUninitialized: true
}));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Credentials", true)
    next();
})
app.use(passport.initialize());
app.use(passport.session());



app.use(json()); // for parsing application/json
app.use(urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
const port = process.env.PORT || 4000;

app.use(
    cors({
        origin: "https://proj-trio.vercel.app",
    })
);


app.use("/auth", AuthRoutes);
app.use("/recruiter", RecruiterRoutes);
app.use("/jobseeker", JobSeekerRoutes);

app.listen(port, () => console.log(`Listening on port ${port}..`));




