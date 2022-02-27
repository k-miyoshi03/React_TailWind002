import { render } from '@testing-library/react';
import React from 'react';

const Source = (props) => {
    return (
        <source className={props.className} srcSet={props.mediaSrc} media={props.media} />
    )
};

export default Source;