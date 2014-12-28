/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

require('./BodyTextContent.less');

var BodyTextContent = React.createClass({

    render: function() {

        return (
            <div ref="BodyTextContent" className='BodyTextContent'>
                <span className="title">JsTuts. Современный javascript.</span>
                <div className="content">
                    <span>JsTuts – это простой и эффективный способ изучить javascript.</span>
                </div>
            </div>
        );
    }
});

module.exports = BodyTextContent;
