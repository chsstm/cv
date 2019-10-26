import React from 'react';
import './styles.scss';

import { SideBar, Footer } from '../../Cells';
import { CardWrapper } from '../../Wrappers';
import { Works, Projects, AllSkills } from '../../../Configs';
import { Work, Project, ProgressBar } from '../../Molecules';

const Landing = () => {
    return (
        <div>
            {/* Page Container */}
            <div className="w3-content w3-margin-top" style={{ maxWidth: 1400 }}>
                {/* The Grid */}
                <div className="w3-row-padding">
                    <SideBar />
                    <div className="w3-twothird">
                        <CardWrapper
                            large
                            iconName={'briefcase'}
                            title={'Work Experience'}
                        >
                            {Works.map(({ role, skills, company, description, duration, current }, index) => {
                                return (
                                    <Work
                                        key={index}
                                        role={role}
                                        skills={skills}
                                        company={company}
                                        description={description}
                                        duration={duration}
                                        current={current}
                                        lastItem={index === Works.length - 1}
                                    />
                                );
                            })}
                        </CardWrapper>
                        <CardWrapper
                            large
                            iconName={'simplybuilt'}
                            title={'My Projects'}
                        >
                            {Projects.map(({ name, role, platform, skills, link, description, duration, running }, index) => {
                                return (
                                    <Project
                                        key={index}
                                        name={name}
                                        role={role}
                                        platform={platform}
                                        skills={skills}
                                        link={link}
                                        description={description}
                                        duration={duration}
                                        current={running}
                                        lastItem={index === Projects.length - 1}
                                    />
                                );
                            })}
                        </CardWrapper>
                        <CardWrapper
                            large
                            iconName={'snowflake-o'}
                            title={'Technical Skills'}
                        >
                            {[0, 1].map(section => {
                                let skills = AllSkills.filter((_, index) => index % 2 === section);

                                return (
                                    <div key={section} className="w3-container w3-col s6 w3-center">
                                        {skills.map(({ skill, percent }) => {
                                            return (
                                                <ProgressBar key={skill} label={skill} percent={percent}>
                                                    {percent}%
                                                </ProgressBar>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </CardWrapper>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Landing;
