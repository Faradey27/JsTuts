/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Input = require('react-bootstrap').Input;

require('./ValidationField.less');

var ValidationField = React.createClass({

  getInitialState: function() {
    return {
      value: ''
    };
  },

  getText() {
    return this.refs.field.getValue();
  },

  validationState: function() {
    var length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  handleChange: function() {
    this.setState({
      value: this.refs.field.getValue()
    });
  },

  render: function() {

    return (
        <Input
          type={this.props.type || "text"}
          value={this.state.value}
          placeholder={this.props.placeholder}
          bsStyle={this.validationState()}
          hasFeedback
          ref="field"
          onKeyDown={this.props.onKeyDown}
          groupClassName="group-class"
          wrapperClassName="wrapper-class"
          labelClassName="label-class"
          onChange={this.handleChange} />
    );
  }
});

module.exports = ValidationField;
