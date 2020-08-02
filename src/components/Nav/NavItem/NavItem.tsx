import classes from './NavItem.module.css';

const React = require('react');

const NavItem = (props: { title: string; clicked: any; selected: string;}) => {
    let styles =  [classes.NavItem]
    if(props.selected === props.title) {
        styles.push(classes.CurrentItem);
    }
    return (<li className={styles.join(' ')}
        onClick={() => props.clicked(props.title)}>
        <span>{props.title}</span>
    </li>);
}


export default NavItem;