import NavItem from './NavItem/NavItem';
import classes from './Nav.module.css';
import {Component} from "react";
import {render} from "react-dom";

const React = require('react');


class Nav extends Component<any, any> {
    state = {
        selected: 'TODAY'
    }

    updateSelected = (name: string) => this.setState({selected: name});

    render(): any {
        return (
            <nav>
                <ul className={classes.Nav}>
                    <NavItem title='TODAY' selected={this.state.selected} clicked={this.updateSelected}/>
                    <NavItem title='NEXT' selected={this.state.selected} clicked={this.updateSelected}/>
                    <NavItem title='DONE' selected={this.state.selected} clicked={this.updateSelected}/>
                </ul>
                <hr/>
            </nav>
        );
    }
}

export default Nav;