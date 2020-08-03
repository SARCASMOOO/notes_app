import React from "react";

import styles from "../components/Tasks/Task/Task.module.css";

// @ts-ignore
import Tappable from 'react-tappable';

// SVG
import moreIcon from "../assets/images/more.svg";
import finishIcon from "../assets/images/finish.svg";
import doneIcon from "../assets/images/checkmark.svg";


export enum ButtonType {
    MARK_STARTED,
    MARK_DONE,
    MORE_INFO
}


function Button({onClick, type}: { onClick?: () => void, type: ButtonType}) {
    let icon: string;
    let className: string;

    switch (type) {
        case ButtonType.MARK_STARTED:
            icon = doneIcon;
            className = styles.checkmark;
            className += "";
            className += styles.Done;
            break;
        case ButtonType.MARK_DONE:
            icon = finishIcon;
            className = styles.NotDone;
            break;
        case ButtonType.MORE_INFO:
            icon = moreIcon;
            className = styles.tapStyle;
            break;
    }

    return (
        <Tappable className={`${styles.TaskMoreInfo} ${className}`} onTap={onClick}>
            <img style={{width: '2.2em', paddingLeft: '1em', paddingTop: '0.3em'}} src={icon} alt=""/>
        </Tappable>
    );
}

export default Button;