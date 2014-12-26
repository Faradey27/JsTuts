'use strict';

window.$ = require('jquery');

var UI = require('./UI.jsx');

var React = require('react/addons');
require('bootstrap/dist/css/bootstrap.css');

$(document).ready(function(){
    $.ajax({
        type: 'GET',
        url: "/isLogin",
        error: function(e){
            console.log(e);
        },
        success: function(isLogin){
            if (isLogin) {
                location.href='/profile';
            } else {
                React.renderComponent( UI({}), document.getElementById('content') );
            }
        }
    });
});
