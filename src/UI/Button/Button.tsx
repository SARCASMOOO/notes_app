import React from "react";
const Tappable = require('react-tappable');

// Styles
import styles from './Button.module.css';

interface Props {
    onClick?: () => void;

    children?: React.ReactNode;

    className: string;
}

const getButtonStyles = (className: string) => `${styles.Button} ${className}`;

const Button = ({onClick, children, className}: Props) =>  (
        <Tappable className={getButtonStyles(className)} onTap={onClick}>
            {children}
        </Tappable>
);

export default Button;
