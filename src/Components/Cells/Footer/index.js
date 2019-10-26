import React from 'react';
import './styles.scss';

import { SocialMedias } from '../../../Configs';
import { Icon } from 'react-fa';

const Footer = () => {
    return (
        <footer className="footer w3-container w3-teal w3-center w3-margin-top">
            <p>Connect with social medias :</p>
            <div id="social-media-div">
                <div className="timeline-wrapper social-media-placeholder">
                </div>
                {SocialMedias.map(({ link, icon }, index) => {
                    return (
                        <a key={index} className={'social-link'} href={link} target="_blank">
                            <Icon className={'w3-hover-opacity'} size={'3x'} name={icon} />
                        </a>
                    );
                })}
            </div>
            <p>&copy; CHSSTM</p>
        </footer>
    );
}

export default Footer;
