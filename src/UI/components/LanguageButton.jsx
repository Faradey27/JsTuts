/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var DropDownButton = require('./DropDownButtonComponent.jsx');

require('./LanguageButton.less');
require('font-awesome/css/font-awesome.css');

var LanguageButton = React.createClass({

  render: function() {
    var languages = [];

    languages.push(
        {
            name: "Українська",
            id: 'ua'
        },
        {
            name: "Русский",
            id: "ru"
        },
        {
            name: "English",
            id: "us"
        }
    );

    return (
        <div className="LanguageButton">
            <i className="fa fa-language"></i>
            <DropDownButton bsStyle={"link"}
                            text={"Русский"}
                            languages={languages}/>
        </div>
    );
  }
});

module.exports = LanguageButton;
