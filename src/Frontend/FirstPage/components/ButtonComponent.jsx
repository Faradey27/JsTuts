
/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Button = require('react-bootstrap').Button;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;

require('./ButtonComponent.less');

var ButtonComponent = React.createClass({

    onButtonClick(data) {
        if (this.props.onClick) {
            this.props.onClick(data);
        }
    },

    render: function() {

        return (
            <div className={"ButtonComponent" + this.props.class || ""}>
                <ButtonToolbar>
                    <Button bsStyle={this.props.bsStyle}
                            onClick={this.onButtonClick.bind(this, this.props.data)}>
                            {this.props.text}
                    </Button>
                </ButtonToolbar>
            </div>
        );
    }
});

module.exports = ButtonComponent;
