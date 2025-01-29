import React from 'react';
import classes from "./Button.module.css";

const Button = ({text, onClick, color}) => {
    return (
        <button style={{
            background: color
        }} className={classes.btn} onClick={onClick}>{text}</button>
    );
};

export default Button;