import React from 'react';
import './Donations.css';
import HeadingImg from './HeadingImg.png';

function Donations() {

    return (
        <div>
            <div className="header-border">
                <div className="header">
                    <img src={HeadingImg}/>
                    <div className="header-title">
                        <h1>DONATE</h1>
                        <div className="donate-underline" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Donations;