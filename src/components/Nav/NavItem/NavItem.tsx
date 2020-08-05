import React from "react";

// Styles
import styles from './NavItem.module.css';

// Models
import NavModel from "../../../models/NavModel";

// Interfaces
interface Props {
    id: NavModel;

    title: string;

    clicked: (id: NavModel) => void;

    selected: NavModel;
}

const navStyles = ( selected: NavModel, id: NavModel ) => (
    `${ styles.NavItem } ${( selected === id ) ? styles.CurrentItem : null }`
);

const NavItem = ( { id, title, clicked, selected} : Props ) => (
    <li className={navStyles( selected, id )}

        onClick={() => clicked( id )}>

        <span>{ title }</span>

    </li>
);

export default NavItem;