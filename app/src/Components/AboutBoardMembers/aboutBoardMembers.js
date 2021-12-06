import React from "react";
import 'reactjs-popup/dist/index.css';
import "./aboutBoardMembers.css";
import TeamMember from './teamMember';
import headshot from './headshot.jpeg'
import headerImage from './our team.png';

const team = [
  {img: headshot, name: "Karen Campblin", position: "Chair"},
  {img: headshot, name: "Eric Harris", position: "Secretary"},
  {img: headshot, name: "Sarah Williams", position: "Board Member"},
  {img: headshot, name: "Tonya Eddy", position: "Board Member"},
  {img: headshot, name: "Eilleen Woll", position: "Board Member"},
  {img: headshot, name: "Jill Gambill", position: "Board Member"},
  {img: headshot, name: "William Harris", position: "Board Member"},
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
