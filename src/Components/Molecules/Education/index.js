import React from 'react';
import './styles.scss';

import { Divider } from '../../Atoms';
import { Icon } from 'react-fa';

const Education = ({
    level,
    trade,
    institute,
    duration,
    lastItem
}) => {
    return (
        <div className="education w3-container">
            <h6><b>{level}</b></h6>
            <p className="w3-text-teal"><b>{trade}</b></p>
            <h6 className="w3-text-teal"><Icon className={'w3-text-teal fa-fw w3-margin-right'} name={'calendar'} />{duration}</h6>
            <p><Icon className={'w3-text-teal fa-fw w3-margin-right'} name={'institution'} />{institute}</p>
            <Divider invisible={lastItem} />
        </div>
    )
}

export default Education;
