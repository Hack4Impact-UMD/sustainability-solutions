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
                    <a className="close" onClick={closeModal}>&times;</a>
                    <img className="popup-headshot" src={member.img} alt='headshot'/>
                    <h1 className="name-popup">{member.name}</h1>
                    <div class="underline-popup"></div>
                    <h2 className="position-popup">{member.position}</h2>
                    <p>{member.description}</p>
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
