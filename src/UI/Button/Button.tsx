import React from "react";

// Styles
import classes from './Button.module.css';

// Components
const Tappable = require('react-tappable');

// Interfaces
interface Props {
    onClick?: () => void;
    className?: string;
}

const getClassNames = (className?: string) =>  `${classes.Button} ${className ?? ''}`;

const Button = ({onClick, children, className}: React.PropsWithChildren<Props>) =>
        <Tappable className={getClassNames(className)} onTap={onClick}>
            {children}
        </Tappable>;

export default Button;
