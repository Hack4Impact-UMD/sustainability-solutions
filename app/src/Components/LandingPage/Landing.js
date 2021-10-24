import React from 'react';
import { Image } from 'react-bootstrap';

import styles from './landing.css';

import Background1 from './background1.png';
import Background2 from './background2.png';

const Landing = (props) => {

    return (
        <div>
            <div>
                <Image className={styles.background1} src={Background1} alt={'Intro image'} />
                <p className={styles.title}>
                    Sustainability <br />
                    Solutions  <br />
                    Institute
                </p>
            </div>
            <div className={styles.section2}>

            </div>
            <div>
                <Image className={styles.background2} src={Background2} alt={'Intro image'} />
            </div>
        </div>
    );
}

export default Landing;