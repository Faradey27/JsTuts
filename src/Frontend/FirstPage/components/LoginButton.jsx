/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var LoginButtonButton = require('./ButtonComponent.jsx');

require('./LoginButton.less');

var LoginButton = React.createClass({

    render: function() {
        return (
            <div className="LoginButton">
              <LoginButtonButton bsStyle={"default"}
                                 onClick={this.props.onClick}
                                 text={"ВОЙТИ"}/>
            </div>
        );
    }
});

module.exports = LoginButton;
