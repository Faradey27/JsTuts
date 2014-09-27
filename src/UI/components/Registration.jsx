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

  render: function() {
    return (
        <div className="Registration">
            <span className="text">Бесплатная регистрация</span>
            <ValidationField placeholder="Email или Логин"/>
            <ValidationField placeholder="Пароль"/>
            <RegistrationButton bsStyle={"warning"}
                                text={"ЗАРЕГИСТРИРОВАТЬСЯ"}/>
            <RegistrationDropDownList bsStyle={"primary"}
                                      text={"ВКОНТАКТЕ"}/>
        </div>
    );
  }
});

module.exports = Registration;
