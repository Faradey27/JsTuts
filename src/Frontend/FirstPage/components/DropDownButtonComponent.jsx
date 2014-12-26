/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;

require('./DropDownButtonComponent.less');

var DropDownButtonComponent = React.createClass({

    getItems() {
        var items = this.props.languages.map( (data,i) => {
            return (
                <div>
                    <MenuItem key={i} >{data.name}</MenuItem>
                </div>
            );
        });

        return items;
    },

    render: function() {

        return (
            <div className="DropDownButtonComponent">
                <DropdownButton bsStyle={this.props.bsStyle} title={this.props.text}>
                    {this.getItems()}
                </DropdownButton>
            </div>
        );
    }
});

module.exports = DropDownButtonComponent;
