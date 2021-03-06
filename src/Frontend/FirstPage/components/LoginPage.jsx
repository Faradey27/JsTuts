
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

var ENTER = 13;

var LoginPage = React.createClass({

    sendLoginData() {
        var user = {
            email: this.refs.login.getText(),
            password: this.refs.password.getText()
        };

        var self = this;

        $.ajax({
            type: 'POST',
            data: user,
            url: "/login",
            dataType: "json",
            error: function(e){
                console.log(e);
            },
            success: function(e){
                if (self.props.update) {
                    self.props.update();
                }
                //location.href='/profile';
            }
        });
    },

    keyDown: function(e) {
        if (e.keyCode == ENTER) {
            this.sendLoginData();
        }
    },

    render: function() {

        return (
            <div className="LoginPage">
                <ModalWindow title="Вход"
                             hide={this.props.hide}>
                            <div className="login">
                                <ValidationField ref="login" placeholder="Email или Логин"/>
                                <ValidationField ref="password"
                                                 type="password"
                                                 onKeyDown={this.keyDown}
                                                 placeholder="Пароль"/>
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
