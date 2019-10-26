import React from 'react';
import './styles.scss';

import { Divider } from '../../Atoms';
import { Icon } from 'react-fa';

const Work = ({
    role,
    skills,
    company,
    description,
    duration,
    current,
    lastItem
}) => {
    return (
        <div className="work w3-container">
            <h5><b>{role}</b></h5>
            <h6 className="w3-text-teal"><Icon className={'w3-margin-right'} name={'code'} />{skills}</h6>
            <h6 className="w3-text-teal"><Icon className={'w3-margin-right'} name={'building'} />{company}</h6>
            <h6 className="w3-text-teal"><Icon className={'w3-margin-right'} name={'calendar'} />{duration} {current && '-'} {current && <span className="w3-tag w3-teal w3-round">Current</span>}</h6>
            <p><Icon className={'w3-margin-right'} name={'quote-left'} />{description}</p>
            <Divider invisible={lastItem} />
        </div>
    )
}

export default Work;
