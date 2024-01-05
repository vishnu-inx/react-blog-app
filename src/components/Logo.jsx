import React from 'react';
import { logo } from '../constant';

function Logo(props) {
    return (
        <img src={logo} alt="logo" width={props.width} style={{ marginTop: "7px" }} />
    )
}

export default Logo;