import React from "react";

import styles from "../components/Tasks/Task/Task.module.css";

// SVG
import moreIcon from "../assets/images/more.svg";
import finishIcon from "../assets/images/finish.svg";
import doneIcon from "../assets/images/checkmark.svg";

// onClick for mobile
const Tappable = require('react-tappable');


export enum ButtonType {
    MARK_STARTED,
    MARK_DONE,
    MORE_INFO
}


function Button({onClick, type}: { onClick?: () => void, type: ButtonType}) {
    let icon: string;
    let className: string;
    let alt: string;

    switch (type) {
        case ButtonType.MARK_STARTED:
            icon = doneIcon;
            className = styles.MARK_STARTED;
            alt = 'Mark as started button';
            break;
        case ButtonType.MARK_DONE:
            icon = finishIcon;
            className = styles.MARK_DONE;
            alt = 'Mark as done button';
            break;
        case ButtonType.MORE_INFO:
            icon = moreIcon;
            className = styles.MORE_INFO;
            alt = 'More info button';
            break;
    }

    return (
        <Tappable className={`${styles.Button} ${className}`} onTap={onClick}>
            <img src={icon} alt={alt}/>
        </Tappable>
    );
}

export default Button;