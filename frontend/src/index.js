import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import App from "./components/app/App";
import ProfilePage from './components/profile/ProfilePage';
import RecruiterForm from './pages/CreateProfilePage';
import MyNavbar from './components/Navbar'
import { useNavigate } from "react-router-dom";
import Login from "./pages/LoginPage"
import Signup from "./pages/SignupPage"

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
      {/* <MyNavbar /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/form" element={<RecruiterForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/match" element={<Match />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
