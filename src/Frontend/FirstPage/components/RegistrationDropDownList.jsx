/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var SplitButton = require('react-bootstrap').SplitButton;
var RegistrationButton = require('./ButtonComponent.jsx');

require('./RegistrationDropDownList.less');

var RegistrationDropDownList = React.createClass({

  render: function() {
    return (
        <div className="RegistrationDropDownList">
          <SplitButton bsStyle={this.props.bsStyle} title={this.props.text}>
            <RegistrationButton bsStyle={"danger"} text="GOOGLE" />
            <RegistrationButton bsStyle={"primary"} text="FACEBOOK" />
          </SplitButton>
        </div>
    );
  }
});

module.exports = RegistrationDropDownList;
