import React from "react";
import 'reactjs-popup/dist/index.css';
import "./aboutBoardMembers.css";
import TeamMember from './teamMember';
import Eilleen from "./Images/Eilleen Woll.jpg"
import Eric from "./Images/Eric Harris.jpg"
import Jill from "./Images/Jill Gambill.jpg"
import Karen from "./Images/Karen Campblin.jpg"
import Sarah from "./Images/Sarah Williams.jpg"
import William from "./Images/William Harris.jpg"

import headshot from './Images/headshot.jpeg'
import headerImage from './Images/our team.png';

const team = [
  {img: Karen, name: "Karen Campblin", position: "Chair"},
  {img: Eric, name: "Eric Harris", position: "Secretary"},
  {img: Sarah, name: "Sarah Williams", position: "Board Member"},
  {img: headshot, name: "Tonya Eddy", position: "Board Member"},
  {img: Eilleen, name: "Eilleen Woll", position: "Board Member"},
  {img: Jill, name: "Jill Gambill", position: "Board Member"},
  {img: William, name: "William Harris", position: "Board Member"},
]

function AboutBoardMembers() {
  return (
    <div className="board-members">
      <div className="about-team-header-border">
        <div className="header">
          <img src={headerImage} alt='our team'/>
          <h1 class="about-team-header-title">MEET THE ADVISORY BOARD</h1>
          <div class="about-team-header-title about-team-underline"></div>
        </div>
      </div>
      <div className="members-box">
        {team.map(member => 
          <TeamMember member={member}/>
        )}
      </div>
    </div>
  );
}

export default AboutBoardMembers;
