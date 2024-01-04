import React from 'react';
import blogLogo from "../assets/blog-logo.png";

function Logo(props) {
    return (
        <img src={blogLogo} alt="logo" width={props.width} style={{ marginTop: "7px" }} />
    )
}

export default Logo;