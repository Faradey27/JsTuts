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
                <span className="title">JsLern. Современный javascript.</span>
                <div className="content">
                    <span>JsLern – это простой и эффективный способ изучить javascript.</span>
                </div>
            </div>
        );
    }
});

module.exports = BodyTextContent;
