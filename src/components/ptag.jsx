import React from 'react'

const Ptag = (props) => {
    return (
        <p className={props.className}>
            {props.children}
        </p>
    )
}

export default Ptag;