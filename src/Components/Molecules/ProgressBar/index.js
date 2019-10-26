import React from 'react';
import './styles.scss';

const ProgressBar = ({
    large = false,
    label,
    percent = 100,
    children
}) => {
    return (
        <React.Fragment>
            {!!label && <p>{label}</p>}
            <div className="progress-bar w3-light-grey w3-round-xlarge w3-small w3-margin-bottom">
                <div
                    className={`progress-filled ${large ? 'large-progress' : ''} w3-container w3-center w3-round-xlarge w3-teal`}
                    style={{ width: percent + '%' }}
                >
                    {children}
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProgressBar;
