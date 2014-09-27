'use strict';

window.$ = require('jquery');

var UI = require('./UI/UI.jsx');

var React = require('react/addons');
require('bootstrap/dist/css/bootstrap.css');

$(document).ready(function(){
    React.renderComponent( UI({}), document.getElementById('content') );
});
