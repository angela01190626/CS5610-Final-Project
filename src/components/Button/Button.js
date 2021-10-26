import React from 'react';
import './Button.css';

const Button = ({text,onClick}) => {
    return (
        <>
            <button type="button" onClick={(e) => onClick(e)} className="">
                {text}
            </button>
        </>
    )
}
export default Button;