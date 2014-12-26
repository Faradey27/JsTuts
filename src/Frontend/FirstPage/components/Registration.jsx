/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var ValidationField = require('./ValidationField.jsx');
var RegistrationButton = require('./ButtonComponent.jsx');
var RegistrationDropDownList = require('./RegistrationDropDownList.jsx');
var ServerAccessUtils = require('../../ServerAccessUtils.js');
var serverAccessUtils = new ServerAccessUtils();

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
            url: "/signup",
            dataType: "json",
            error: function(e){
                console.log(e);
            },
            success: function(e){
                location.href='/profile';
            }
        });
    },

    render: function() {
        return (
            <div className="Registration">
                <span className="text">Бесплатная регистрация</span>
                <ValidationField ref="login" placeholder="Email или Логин"/>
                <ValidationField ref="password" type="password" placeholder="Пароль"/>
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
