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
import Camellia from "./Images/Camellia Moses Okpodu.jpg"
import headerImage from './Images/our team.png';

const team = [
  {img: Karen, name: "Karen Campblin", position: "Chair", description: "Virginia State Conference Climate and Energy Justice Leader Initiative. Founded in 1935, the Virginia State Conference of NAACP Branches (Virginia NAACP) is the oldest and largest nonpartisan civil rights organization in the Commonwealth, overseeing over 100 NAACP branches, youth councils, and college chapters. She is also the Co Founder and Leader of the Virginia Green New Deal a state wide coalition of environmental, social justice, and advocacy groups who focus on the design of policy to advance clean energy, transportation, social justice, equitable workforce among others. The Green New Deal Coalition proposes to create thousands of good jobs while addressing the climate emergency and restoring the Virginia environment."},
  {img: Eric, name: "Eric Harris", position: "Secretary", description: "Senior Project Manager and Program Specificialist Cisco Systems"},
  {img: Sarah, name: "Dr. Sarah Williams", position: "Board Member", description: "Licensed Clinical Psychologist/Executive Coach, also has her own television show, Ask Dr. Sarah, and works with at-risk youth. Developed a love of the water and the environment as a native of the Florida panhandle. Serves on the Chesapeake Redevelopment and Housing Authority. Doctor of Philosophy, Education; Education Specialist Degree, MS, Clinical Mental Health Counseling."},
  {img: Eilleen, name: "Eilleen Woll", position: "Board Member", description: "Sierra Club, Director of Off Shore Wind"},
  {img: Jill, name: "Jill Gambill", position: "Board Member", description: "Public Service faculty at the University of Georgia, serving as the Coastal Community Resilience Specialist for UGA Marine Extension and Georgia Sea Grant"},
  {img: William, name: "William Harris", position: "Board Member", description: "Project Manager, Computer Systems Specialist"},
  {img: Camellia, name: "Camellia Moses Okpodu", position: "Board Member", description: "Professor and Dean School of Arts and Sciences University of Wyoming, Former Dean of Arts and Science at Xavier University New Orleans"},
]

function AboutBoardMembers() {
  return (
    <div className="board-members">
      <div className="about-team-header-border">
        <div className="header">
          <img src={headerImage} alt='our team'/>
          <h1 className="about-team-header-title">MEET THE ADVISORY BOARD</h1>
          <div className="about-team-header-title about-team-underline"></div>
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
