import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import "./teamMember.css";

function TeamMember(props) {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    let member = props.member;

    return (
        <div>
            <figure className="team-member">
                <div className="shadow">
                <img className="headshot" src={member.img} alt='headshot'/>
                <p className="learn-more" onClick={() => setOpen(o => !o)}>Learn more</p>
                <Popup modal open={open} onClose={closeModal}>
                    <div className="popup">
                    <button className="close" onClick={closeModal}>&times;</button>
                    <img className="popup-headshot" src={member.img} alt='headshot'/>
                    <h1 className="name-popup">{member.name}</h1>
                    <div class="underline-popup"></div>
                    <h2 className="position-popup">{member.position}</h2>
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
                <figcaption className="name">{member.name}</figcaption>
                <figcaption className="position">{member.position}</figcaption>
            </figure>
        </div>
    )
}

export default TeamMember;
