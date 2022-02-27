import React from 'react'

const H3 = (props) => {
    return (
        <h3 className={props.className} id={props.id}>{props.text}</h3>
    )
};

export default H3;