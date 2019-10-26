import React from 'react'

const Divider = ({
    invisible,
    color = 'lightgrey',
    width = 1
}) => {
    return (
        <hr className={'divider'} style={{ borderWidth: width, borderColor: invisible ? 'transparent' : color }} />
    );
}

export default Divider;
