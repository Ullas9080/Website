import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomePage from "./Home/Homepage";
import AboutPage from "./About/AboutPage";
import CoursePage from "./Course/Course.jsx";
import Events from "./Events/Eventspage";
import Facullty from "./Facullty/FaculltyPage";
import ContactPage from "./Contact/ContactPage";
import "./FrontPage.css";
export default function FrontPage() {
  return (
    <div className="FrontpageBody">
      <BrowserRouter>
        <div className="pages">
          <div className="collegeimg">
            <img
              width="45"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/FA5252/graduation-cap--v1.png"
              alt="graduation-cap--v1"
            />
          </div>
          <div className="collegeName">
            <h3>BMSCCM</h3>
          </div>

          <div className="page">
            <Link to="/Home" className="sub-page">
              Home
            </Link>
            <Link to="/About" className="sub-page">
              About
            </Link>
            <Link to="/Facullty" className="sub-page">
              Facullty
            </Link>
            <Link to="/Course" className="sub-page">
              Course
            </Link>
            <Link to="/Events" className="sub-page">
              Events
            </Link>
            <Link to="/ContactPage" className="sub-page">
              Contact
            </Link>
          </div>
        </div>

        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Facullty" element={<Facullty />} />
          <Route path="/Course" element={<CoursePage />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/ContactPage" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
