import React from "react";

const Button = ({
    title,
    onClick,
    type = 'button',
    disabled = false,
    className = '',
  }) => {
    return (
      <button
        type={type}
        className={`btn ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {title}
      </button>
    );
  };
  
  export default Button;