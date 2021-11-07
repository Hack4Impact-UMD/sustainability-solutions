import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./aboutBoardMembers.css";

function aboutBoardMembers() {
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
        <figure>
          <img src='/aboutBoardMembers/headshot.jpeg' alt='headshot'/>
          <figcaption>Ben</figcaption>
        </figure>
        <figure>
          <img src='/aboutBoardMembers/headshot.jpeg' alt='headshot'/>
          <figcaption>Ethan</figcaption>
        </figure>
        <figure>
          <img src='/aboutBoardMembers/headshot.jpeg' alt='headshot'/>
          <figcaption>Sadena</figcaption>
        </figure>
        <figure>
          <img src='/aboutBoardMembers/headshot.jpeg' alt='headshot'/>
          <figcaption>Katherine</figcaption>
        </figure>
        <figure>
          <img src='/aboutBoardMembers/headshot.jpeg' alt='headshot'/>
          <figcaption>Vibhu</figcaption>
        </figure>
        <figure>
          <img src='/aboutBoardMembers/headshot.jpeg' alt='headshot'/>
          <figcaption>Priya</figcaption>
        </figure>
        <figure>
          <img src='/aboutBoardMembers/headshot.jpeg' alt='headshot'/>
          <figcaption>Julie</figcaption>
        </figure>
      </div>
      <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Popup content here !!</div>
      </Popup>
    </div>
  );
}

export default aboutBoardMembers;
