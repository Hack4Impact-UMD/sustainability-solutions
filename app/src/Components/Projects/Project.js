import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import "./Project.css";
import {IoClose} from 'react-icons/io5';

function Project(props) {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    return (
        <div>
             <figure className="project" onClick={() => setOpen(o => !o)}>
                <img src={props.img} className="project-img" alt={props.alt}/>
                <figcaption className="project-name">{props.title}</figcaption>
                <Popup modal open={open} onClose={closeModal}>
                    <div className="project-popup">
                        <button className="project-close" onClick={closeModal}><IoClose/></button>
                        <h1 className="project-name-popup">{props.title}</h1>
                        <div class="project-underline-popup"></div>
                        <p>{props.description}</p>
                    </div>
                </Popup>
            </figure>
        </div>
    )
}

export default Project;
