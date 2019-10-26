import React from 'react';
import './styles.scss';

import { Divider } from '../../Atoms';
import { Icon } from 'react-fa';

const Project = ({
    name,
    role,
    platform,
    skills,
    link,
    description,
    duration,
    current,
    lastItem
}) => {
    return (
        <div className="project w3-container">
            <h5><b>{name}</b></h5>
            <h6 className="w3-text-teal"><b>{role}</b></h6>
            <h6 className="w3-text-teal"><Icon className={'w3-margin-right'} name={'window-restore'} />{platform}</h6>
            <h6 className="w3-text-teal"><Icon className={'w3-margin-right'} name={'code'} />{skills}</h6>
            {!!link &&
                <a target="new" href={link}><h6 className="w3-text-blue"><Icon className={'w3-margin-right'} name={'chain'} />{link}</h6></a>
            }
            <h6 className="w3-text-teal"><Icon className={'w3-margin-right'} name={'calendar'} />{duration} {current && '-'} {current && <span className="w3-tag w3-teal w3-round">Current</span>}</h6>
            <p><Icon className={'w3-margin-right'} name={'quote-left'} />{description}</p>
            <Divider invisible={lastItem} />
        </div >
    )
}

export default Project;
