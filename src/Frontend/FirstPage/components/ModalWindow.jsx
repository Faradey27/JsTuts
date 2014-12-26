
/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var Modal = require('react-bootstrap').Modal;

require('./ModalWindow.less');

var ModalWindow = React.createClass({

    handleToggle: function () {
        if (this.props.hide) {
            this.props.hide();
        }
    },

    render: function() {

        return (
            <div className="ModalWindows">
                <Modal title={this.props.title} onRequestHide={this.handleToggle}>
                    {this.props.children}
                </Modal>
            </div>
        );
    }
});

module.exports = ModalWindow;
