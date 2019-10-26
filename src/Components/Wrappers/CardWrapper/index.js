import React from 'react';
import './styles.scss';

import { Icon } from 'react-fa';

const CardWrapper = ({
    large = false,
    title,
    iconName,
    noShadow = false,
    children,
}) => {
    const content = (
        <React.Fragment>
            {large ?
                <h3 className="w3-padding-16">
                    <b>
                        <Icon className={'w3-margin-right w3-text-teal'} size={'lg'} name={iconName} />
                        {title}
                    </b>
                </h3>
                :
                <p className="w3-large">
                    <b>
                        <Icon className={'w3-margin-right w3-text-teal'} name={iconName} />
                        {title}
                    </b>
                </p>
            }
            {children}
        </React.Fragment>
    );

    if (noShadow) return content;

    return (
        <div className="w3-container w3-text-grey w3-card w3-white w3-margin-bottom">
            {content}
        </div>
    );
}

export default CardWrapper
