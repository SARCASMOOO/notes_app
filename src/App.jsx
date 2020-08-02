"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
require("./assets/css/index.css");
var Layout_1 = require("./components/Layout/Layout");
var Nav_1 = require("./components/Nav/Nav");
var App = function () { return (<Layout_1.default>
        <Nav_1.default />
        <main>{'Main'}</main>
        <footer>{'Footer'}</footer>
    </Layout_1.default>); };
exports.default = App;
