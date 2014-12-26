
/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var ModalWindow = require('./ModalWindow.jsx');
var ValidationField = require('./ValidationField.jsx');
var LoginButton = require('./ButtonComponent.jsx');
var LoginDropDownList = require('./RegistrationDropDownList.jsx');

require('./LoginPage.less');

var LoginPage = React.createClass({

    sendLoginData() {
        var user = {
            email: this.refs.login.getText(),
            password: this.refs.password.getText()
        };

        $.ajax({
            type: 'POST',
            data: user,
            url: "/login",
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
            <div className="LoginPage">
                <ModalWindow title="Вход"
                             hide={this.props.hide}>
                            <div className="login">
                                <ValidationField ref="login" placeholder="Email или Логин"/>
                                <ValidationField ref="password" type="password" placeholder="Пароль"/>
                                <LoginButton bsStyle={"warning"}
                                                    onClick={this.sendLoginData}
                                                    text={"Войти"}/>
                            </div>
                            <hr className="separator"/>
                            <div className="loginFooter">
                                <LoginButton bsStyle={"primary"}
                                                          text={"ВКОНТАКТЕ"}/>
                                <LoginButton bsStyle={"danger"}
                                                          text="GOOGLE" />
                                <LoginButton bsStyle={"primary"} class="_fb"
                                                          text="FACEBOOK" />
                            </div>
                </ModalWindow>
            </div>
        );
    }
});

module.exports = LoginPage;
