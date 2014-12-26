/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var LoginButton = require('../components/LoginButton.jsx');
var LanguageButton = require('../components/LanguageButton.jsx');

require('./Header.less');

var Header = React.createClass({

    render: function() {

        return (
            <div ref="header" className='Header'>
                <LoginButton onClick={this.props.login} />
                <LanguageButton />
            </div>
        );
    }
});

module.exports = Header;
