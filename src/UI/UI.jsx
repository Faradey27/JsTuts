
/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Registration = require('./components/Registration.jsx');
var Header = require('./SiteBlocks/Header.jsx');
var Logo = require('./components/Logo.jsx');
var BodyTextContent = require('./SiteBlocks/BodyTextContent.jsx');
var SliderInFrame = require('./components/SliderInFrame.jsx');

require('./UI.less');

var UI = React.createClass({

    render: function() {

        return (
            <div ref="UI" className='UI'>
                <Header />
                <div><Registration /></div>
                <Logo />
                <BodyTextContent />
                <SliderInFrame />
            </div>
        );
    }
});

module.exports = UI;
