import React, { useState } from 'react';
import './styles.scss';

import { Images } from '../../../Shared';
import { Icon } from 'react-fa';
import Flag from 'react-country-flag';
import { ProgressBar, Education, ShimmerPlaceholder } from '../../Molecules';
import { Basics, Languages, Educations, MajorSkills, Hobbies } from '../../../Configs';
import { CardWrapper } from '../../Wrappers';

const SideBar = () => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="side-bar w3-third">
            <div className="w3-white w3-card w3-text-grey w3-margin-bottom">
                <div className="w3-display-container">
                    <div id="avatar-div">
                        {loading &&
                            <ShimmerPlaceholder />
                        }
                        <img
                            src={Images.photo}
                            style={{ width: '100%' }}
                            onLoad={() => {
                                setLoading(false);
                            }}
                        />
                    </div>
                    <div className="w3-display-bottomleft w3-container w3-text-black">
                        <h2 id="profile-name" className="name-text">
                            {Basics.name}
                        </h2>
                    </div>
                </div>
                <div className="w3-container">
                    <div id="basic-info-div">
                        {Basics.infos.map(({ key, icon, value }) => {
                            let content = (_value, _key) => (
                                <p key={_key}>
                                    <Icon className={'w3-margin-right w3-large w3-text-teal'} size={'3x'} name={icon} />
                                    {_value}
                                </p>
                            );
                            if (typeof value === 'object' && value.length) {
                                return value.map((item, index) => {
                                    return content(item, index);
                                });
                            }

                            return content(value, key);
                        })}

                        {Basics.mobiles.map(({ number, country }) => {
                            return (
                                <p>
                                    <Icon className={"w3-margin-right w3-large w3-text-teal"} name={'volume-control-phone'} />
                                    <Flag styleProps={{ marginRight: 16 }} code={country} svg />
                                    {number}
                                </p>

                            );
                        })}
                    </div>
                    <hr />
                    <CardWrapper
                        noShadow
                        title={'Languages'}
                        iconName={'language'}
                    >
                        {Languages.map(({ language, percent }) => {
                            return (
                                <ProgressBar large key={language} percent={percent}>
                                    {language}
                                </ProgressBar>
                            );
                        })}
                    </CardWrapper>
                </div>
            </div>

            <CardWrapper
                title={'Education'}
                iconName={'graduation-cap'}
            >
                {Educations.map(({ level, trade, institute, duration }, index) => {
                    return (
                        <Education
                            key={level}
                            level={level}
                            trade={trade}
                            institute={institute}
                            duration={duration}
                            lastItem={index === Educations.length - 1}
                        />
                    );
                })}
            </CardWrapper>

            <CardWrapper
                title={'Major Skills'}
                iconName={'empire'}
            >
                {MajorSkills.map(({ skill, percent }) => {
                    return (
                        <ProgressBar key={skill} label={skill} percent={percent}>
                            {percent}%
                        </ProgressBar>
                    );
                })}
            </CardWrapper>

            <CardWrapper
                title={'Hobbies'}
                iconName={'heartbeat'}
            >
                {Hobbies.map(({ hobby }) => {
                    return (
                        <ProgressBar large key={hobby}>
                            {hobby}
                        </ProgressBar>
                    );
                })}
            </CardWrapper>
        </div>
    )
}

export default SideBar;
