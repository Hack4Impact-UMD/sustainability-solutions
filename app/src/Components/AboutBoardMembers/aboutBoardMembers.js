import React from "react";
import "./aboutBoardMembers";
import styles from "./aboutBoardMembers.css";

function aboutBoardMembers() {
  return (
    <div className="board-members">
      <div className={styles.boardMember}>
        <h1>About the Board Members</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="members-box">
          <figure>
            <img src='headshot.jpeg' alt='headshot' />
            <figcaption>Ben</figcaption>
          </figure>
          <figure>
            <img src='headshot.jpeg' alt='headshot' />
            <figcaption>Ethan</figcaption>
          </figure>
          <figure>
            <img src='headshot.jpeg' alt='headshot' />
            <figcaption>Sadena</figcaption>
          </figure>
          <figure>
            <img src='headshot.jpeg' alt='headshot' />
            <figcaption>Katherine</figcaption>
          </figure>
          <figure>
            <img src='headshot.jpeg' alt='headshot' />
            <figcaption>Vibhu</figcaption>
          </figure>
          <figure>
            <img src='headshot.jpeg' alt='headshot' />
            <figcaption>Priya</figcaption>
          </figure>
          <figure>
            <img src='headshot.jpeg' alt='headshot' />
            <figcaption>Julie</figcaption>
          </figure>
          <figure>
            <img src='headshot.jpeg' alt='headshot' />
            <figcaption>Steven</figcaption>
          </figure>
        </div>
        <button className="donation-btn">Donations</button>
      </div>
    </div>
  );
}

export default aboutBoardMembers;
