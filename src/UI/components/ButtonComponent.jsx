
/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Button = require('react-bootstrap').Button;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;

require('./ButtonComponent.less');

var ButtonComponent = React.createClass({

  render: function() {

    return (
        <div className="ButtonComponent">
            <ButtonToolbar>
                <Button bsStyle={this.props.bsStyle}>{this.props.text}</Button>
            </ButtonToolbar>
        </div>
    );
  }
});

module.exports = ButtonComponent;
