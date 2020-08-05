import React from "react";
import styles from './FooterItem.module.css';

interface Props {
    className?: string;

    id: string ;

    children?: React.ReactNode;
}

const footerItem = ({className = '', children, id}: Props) => (
    <div className={className + styles.FooterItem}
         id={id}>

        {children}

    </div>
);

export default footerItem;