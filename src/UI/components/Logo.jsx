/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

require('./Logo.less');

var Logo = React.createClass({

  render: function() {
    return (
        <div className="Logo">
        </div>
    );
  }
});

module.exports = Logo;
