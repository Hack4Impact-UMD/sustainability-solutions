import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./aboutBoardMembers";
import styles from "./aboutBoardMembers.css";

function aboutBoardMembers() {
  return (
    <div className="board-members">
      <div className={styles.boardMember}>
        <h1>Meet the Board</h1>
        <div className="members-box">
          <figure>
            <img src='/aboutBoardMembers/headshot.jpeg' alt='headshot' />
            <figcaption>Ben</figcaption>
          </figure>
          <figure>
            <img src='/aboutBoardMembers/headshot.jpeg' alt='headshot' />
            <figcaption>Ethan</figcaption>
          </figure>
          <figure>
            <img src='/aboutBoardMembers/headshot.jpeg' alt='headshot' />
            <figcaption>Sadena</figcaption>
          </figure>
          <figure>
            <img src='/aboutBoardMembers/headshot.jpeg' alt='headshot' />
            <figcaption>Katherine</figcaption>
          </figure>
          <figure>
            <img src='/aboutBoardMembers/headshot.jpeg' alt='headshot' />
            <figcaption>Vibhu</figcaption>
          </figure>
          <figure>
            <img src='/aboutBoardMembers/headshot.jpeg' alt='headshot' />
            <figcaption>Priya</figcaption>
          </figure>
          <figure>
            <img src='/aboutBoardMembers/headshot.jpeg' alt='headshot' />
            <figcaption>Julie</figcaption>
          </figure>
        </div>
      </div>
      <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Popup content here !!</div>
      </Popup>
    </div>
  );
}

export default aboutBoardMembers;
