/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Button = require('./ButtonComponent.jsx');
var uuid = require('uuid');

require('./Course.less');

var Course = React.createClass({

    getInitialState: function() {
        return {
            id: uuid.v4()
        };
    },

    componentDidMount: function() {
        var self = this;
        $('#'+this.state.id).mouseenter(function(){
            self.showButton();
        });
        $('#'+this.state.id).mouseleave(function(){
            self.hideButton();
        });
    },

    showButton: function() {
        var footer = $('#'+this.state.id +' .footer');
        var self = this;
        footer.height(179);
        footer.css("margin-top", "-40px");
        var endClass = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
        footer.one(endClass, function(e) {
            if ($('#'+self.state.id).is(":hover")) {
                $('#'+self.state.id +' .buttonSub').show();
            }
        });
    },

    hideButton: function() {
        var footer = $('#'+this.state.id +' .footer');
        $('#'+this.state.id +' .buttonSub').hide();
        footer.height(139);
        footer.css("margin-top", 0);
    },

    subscribe: function(name) {
        if (this.props.subscribe) {
            this.props.subscribe(name);
        }
    },

    render: function() {

        var style = {
            backgroundImage: "url(/images/courses/"+this.props.data.img+".png)",
            backgroundPositionX: -4,
            backgroundPositionY: -4
        }

        var text = this.props.courses.indexOf(this.props.data.name) == -1
            ? "ПРОЙТИ"
            : "Продолжить";

        return (
            <div className="Courses" id={this.state.id} >
                <div className="header" style={style}>
                </div>
                <div className="footer">
                    <div className="text">
                        <span>{this.props.data.name}</span>
                    </div>
                    <div className="exp">
                        <span>{this.props.data.exp} exp.</span>
                    </div>
                    <div className="buttonSub">
                        <Button bsStyle={"primary"}
                                onClick={this.subscribe}
                                data={this.props.data.name}
                                text={text}/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Course;
