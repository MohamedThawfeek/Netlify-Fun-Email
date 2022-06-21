import React from "react";
import "./Bottom.css";
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';


const Bottom = () => {
  return (
    <div className="bottom">
      <h3>EDUTINKER</h3>
      <h1>Watch Why Schools Love eduTinker</h1>
      <h5>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ipsum
        vestibulum
        <br />
        bibendum egestas in rhoncus mauris mollis dignissim. Orci, sit hac sit
        est, id.
      </h5>

      <div className="bottom__content">
        <div className="bottom__image">
        <PlayCircleFilledWhiteOutlinedIcon  className="play"/>
        </div>
        <div className="bottom__contentBox">
            <h3> eduTinker LMS saved us a lot of time and helped us arrange the whole
          system in very organised manner in a few clicks.</h3>
         
          <br/>
          <h4>
          Monika Chandra
          
          </h4>
          <p>Principal, St.John Matriculation School</p>
         
        </div>
      </div>
    </div>
  );
};

export default Bottom;
