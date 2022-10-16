import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import App from "./components/app/App";
import ProfilePage from './components/profile/ProfilePage';
import RecruiterForm from './pages/CreateProfilePage';
import WebinarVideos from "./pages/WebinarVideos"
import Dashboard from "./pages/Dashboard"
import MyNavbar from './components/Navbar'
import { useNavigate } from "react-router-dom";
import Login from "./pages/LoginPage"
import Signup from "./pages/SignupPage"
import OneonOne from "./pages/One_on_OnePage"

import Auth from "./components/app/Auth"
import Landing from "./pages/Landing";

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Match from "./pages/Match";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/form" element={<RecruiterForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/match" element={<Match />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/webinarvideos" element={<WebinarVideos />} />
        <Route path="/dashboard/1-1" element={<OneonOne />} />


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
