import React from "react";

const Button = props => {

    const buttonClass = "btn btn-" + props.color
    return (
        <button className={buttonClass}>{props.title}</button>
    )
}

export default Button