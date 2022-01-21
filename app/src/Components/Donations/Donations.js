import React from 'react';
import HeadingImg from './HeadingImg.png';
import './Donations.css';

function Donations() {
    return (
        <div className="donations-page">
            <div className="header-border-donate">
                <div className="header-donate">
                    <img src={HeadingImg} alt='donate'/>
                    <p className="header-title-donate">DONATE</p>
                    <div className="header-title-donate underline-donate"></div>
                </div>
            </div>
            <div className="text">
                <em className="thanks">We thank you, in advance, for your generosity in helping us make our area a more sustainable environment in which to live, work and play.</em>
                <h1 className="support">Support Us</h1>
                <p className="donation-description">
                    Give your tax-deductible donation securely via our Joint Plan of Work partner, <b>Virginia Organizing</b>. Select Center for Sustainable Communities when donating.
                    <br></br><br></br>
                    Virginia Organizing is officially registered with the Department of Agriculture and Consumer Services, P.O. Box 1163, Richmond, VA 23209.  You can write to this Department for all relevant financial statements and procedures regarding the solicitation of contributions.  Your donation is tax-deductible to the extent allowed by law.
                </p>
                <a href="https://donatenow.networkforgood.org/1388125" target="_blank" rel="noreferrer" className="donate-btn">DONATE</a>
                <h2>Tax Deduction Instructions</h2>
                <p className="donation-description">
                    Looking to donate to <b>Sustainability Solutions Institute</b>? Did you know that charitable gifts to SSG are tax deductible under section 501(c)(3) of the Internal Revenue Code?
                    <br></br><br></br>
                    Organization Name:  <b>Virginia Organizing</b>
                    <br></br>
                    Tax ID: <b>54-1674992</b>
                    <br></br><br></br>
                    To deduct a charitable contribution, you must file Form 1040 and itemize deductions on Schedule A. Here are some resources from the IRS to help:
                </p>
                <ul className="irs-resources">
                    <li><a href="https://www.irs.gov/taxtopics/tc506" target="_blank" rel="noreferrer">Publication 526</a></li>
                    <li><a href="https://www.irs.gov/publications/p526#en_US_2015_publink1000229849" target="_blank" rel="noreferrer">How to report on lines 16 through 19 of Schedule A (Form 1040)</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Donations;