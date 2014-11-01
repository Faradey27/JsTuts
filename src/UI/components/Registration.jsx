/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var ValidationField = require('./ValidationField.jsx');
var RegistrationButton = require('./ButtonComponent.jsx');
var RegistrationDropDownList = require('./RegistrationDropDownList.jsx');

require('./Registration.less');

var Registration = React.createClass({

    sendRegistrationData() {
        var user = {
            email: this.refs.login.getText(),
            password: this.refs.password.getText()
        };
        $.ajax({
            type: 'POST',
            data: user,
            url: "http://192.168.1.139:8080/register",
            dataType: "json",
            error: function(e){console.log('error');},
            success: function(e){console.log('success')}
        });
    },

    render: function() {
        return (
            <div className="Registration">
                <span className="text">Бесплатная регистрация</span>
                <ValidationField ref="login" placeholder="Email или Логин"/>
                <ValidationField ref="password" placeholder="Пароль"/>
                <RegistrationButton bsStyle={"warning"}
                                    onClick={this.sendRegistrationData}
                                    text={"ЗАРЕГИСТРИРОВАТЬСЯ"}/>
                <RegistrationDropDownList bsStyle={"primary"}
                                          text={"ВКОНТАКТЕ"}/>
            </div>
        );
    }
});

module.exports = Registration;
