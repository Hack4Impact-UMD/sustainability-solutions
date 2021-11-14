import React from "react";
import 'reactjs-popup/dist/index.css';
import "./aboutBoardMembers.css";
import TeamMember from './teamMember';

const team = [
  {img: '/aboutBoardMembers/headshot.jpeg', name: "Ben Lin", position: "Position"},
  {img: '/aboutBoardMembers/headshot.jpeg', name: "Ethan", position: "Position"},
  {img: '/aboutBoardMembers/headshot.jpeg', name: "Sadena", position: "Position"},
  {img: '/aboutBoardMembers/headshot.jpeg', name: "Katherine", position: "Position"},
  {img: '/aboutBoardMembers/headshot.jpeg', name: "Vibhu", position: "Position"},
  {img: '/aboutBoardMembers/headshot.jpeg', name: "Priya", position: "Position"},
  {img: '/aboutBoardMembers/headshot.jpeg', name: "Julie", position: "Position"},
]

function AboutBoardMembers() {
  return (
    <div className="board-members">
      <div className="header-border">
        <div className="header">
          <img src='/aboutBoardMembers/meet_the_board_header.jpg' alt='wave'/>
          <h1 class="header-title">MEET THE BOARD</h1>
          <div class="header-title underline"></div>
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
