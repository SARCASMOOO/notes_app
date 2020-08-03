import React from "react";

import styles from "../components/Tasks/Task/Task.module.css";

// @ts-ignore
import Tappable from 'react-tappable';


function Button({onClick, icon, className}: { onClick?: () => void, icon?: string, className?: string }) {
    return (
        <Tappable className={`${styles.TaskMoreInfo} ${className}`} onTap={onClick}>
            <img style={{width: '2.2em', paddingLeft: '1em', paddingTop: '0.3em'}} src={icon} alt=""/>
        </Tappable>
    );
}

export default Button;