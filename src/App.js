import React from "react";
import "./App.css";
import Bottom from "./components/bottom/Bottom";
import Image from "./components/imagebox/Image";

const App = () => {
  return (
    <div className="container">
      <h5 className="head">LMS</h5>
      <h4 className="title">eduTinker Core Features</h4>
      <p className="content">
        If you want to try eduTinker for your school or coaching just drop us an
        e-mail or fill the form, we will try to get back to you within 24 hours
      </p>

      <div className="instruction">
        <div className="instructionBackground">
          <Image />
        </div>
        <div className="info_details">
          <h2>
            Single platform for
            <br />
            all class-related communication
          </h2>
          <ul>
            <li>
              Create class, add students, and chat with them anytime all from
              one place
            </li>
            <li>
              Real-time notifications to students about online classes,
              assignments, attendance, and study material
            </li>

            <li>
              Online live class with features like a whiteboard, screen sharing,
              and answering student query
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <Bottom />
      </div>
    </div>
  );
};

export default App;
