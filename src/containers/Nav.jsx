"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
var NavItem_1 = require("../components/Nav/NavItem/NavItem");
var Nav_module_css_1 = require("../components/Nav/Nav.module.css");
var Nav = function (props) { return (<nav>
        <ol className={Nav_module_css_1.default.Nav}>
            <NavItem_1.default title='test'/>
            <NavItem_1.default title='test'/>
            <NavItem_1.default title='test'/>
        </ol>
    </nav>); };
exports.default = Nav;
