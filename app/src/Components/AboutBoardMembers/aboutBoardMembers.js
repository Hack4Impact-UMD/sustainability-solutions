import React, {useState} from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./aboutBoardMembers.css";

function AboutBoardMembers() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

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
          <div className="shadow">
            <img src='/aboutBoardMembers/headshot.jpeg' alt='headshot'/>
            <p className="learn-more" onClick={() => setOpen(o => !o)}>Learn more</p>
            <Popup modal open={open} onClose={closeModal} position="center">
              <div className="popup">
                <a className="close" onClick={closeModal}>&times;</a>
                <img className="popup-headshot" src='/aboutBoardMembers/headshot.jpeg' alt='headshot'/>
                <h1>Ben Lin</h1>
                <div class="underline-popup"></div>
                <h2>Position</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut sem nulla pharetra diam sit amet nisl.
                  In ornare quam viverra orci. Lacus sed viverra tellus in. Imperdiet proin fermentum
                  leo vel orci porta non pulvinar neque. Habitant morbi tristique senectus et netus.
                  Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a. Molestie nunc
                  non blandit massa enim nec dui. Urna porttitor rhoncus dolor purus non enim praesent
                  elementum. In nibh mauris cursus mattis molestie a iaculis at. Tincidunt ornare massa
                  eget egestas purus viverra. Vitae ultricies leo integer malesuada.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut sem nulla pharetra diam sit amet nisl.
                  In ornare quam viverra orci. Lacus sed viverra tellus in. Imperdiet proin fermentum
                  leo vel orci porta non pulvinar neque. Habitant morbi tristique senectus et netus.
                  Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a. Molestie nunc
                  non blandit massa enim nec dui. Urna porttitor rhoncus dolor purus non enim praesent
                  elementum. In nibh mauris cursus mattis molestie a iaculis at.
                </p>
              </div>
            </Popup>
          </div>
          <figcaption>Ben Lin</figcaption>
          <figcaption>Position</figcaption>
        </figure>
        <figure>
          <div className="shadow">
            <img src='/aboutBoardMembers/headshot.jpeg' alt='headshot'/>
            <p className="learn-more">Learn more</p>
          </div>
          <figcaption>Ethan</figcaption>
          <figcaption>Position</figcaption>
        </figure>
        <figure>
          <div className="shadow">
            <img src='/aboutBoardMembers/headshot.jpeg' alt='headshot'/>
            <p className="learn-more">Learn more</p>
          </div>
          <figcaption>Sadena</figcaption>
          <figcaption>Position</figcaption>
        </figure>
        <figure>
          <div className="shadow">
            <img src='/aboutBoardMembers/headshot.jpeg' alt='headshot'/>
            <p className="learn-more">Learn more</p>
          </div>
          <figcaption>Katherine</figcaption>
          <figcaption>Position</figcaption>
        </figure>
        <figure>
          <div className="shadow">
            <img src='/aboutBoardMembers/headshot.jpeg' alt='headshot'/>
            <p className="learn-more">Learn more</p>
          </div>
          <figcaption>Vibhu</figcaption>
          <figcaption>Position</figcaption>
        </figure>
        <figure>
          <div className="shadow">
            <img src='/aboutBoardMembers/headshot.jpeg' alt='headshot'/>
            <p className="learn-more">Learn more</p>
          </div>
          <figcaption>Priya</figcaption>
          <figcaption>Position</figcaption>
        </figure>
        <figure>
          <div className="shadow">
            <img src='/aboutBoardMembers/headshot.jpeg' alt='headshot'/>
            <p className="learn-more">Learn more</p>
          </div>
          <figcaption>Julie</figcaption>
          <figcaption>Position</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default AboutBoardMembers;
