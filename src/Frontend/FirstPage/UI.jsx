
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
var LoginWindow = require('./components/LoginPage.jsx');
var scroll = require('scroll')




require('./UI.less');

var UI = React.createClass({
    getInitialState: function () {
        return {
            isLoginActive: false
        };
    },

    handleToggle: function () {
        this.setState({
          isLoginActive: !this.state.isLoginActive
        });
    },

    render: function() {
        var loginWindow = this.state.isLoginActive
            ? <LoginWindow hide={this.handleToggle}/>
            : '';
        return (
            <div ref="UI" onClick={this.onScroll} className='UI'>
                {loginWindow}
                <Header login={this.handleToggle} />
                <Registration />
                <Logo />
                <BodyTextContent />
                <SliderInFrame />
            </div>
        );
    }
});

module.exports = UI;

function refreshWorkouts (workouts) {
        $(".all-workouts").html("");
        var self = this;
        var i;
        for (i = 0; i<workouts.length; i++) {
            console.log(workouts[i]);
            addWorkoutBlock(workouts[i], i+1);
            console.log("before: "+i);
            var deffer = Q.deffer();
            syncExercises(workouts[i].w_id).then(function(data){
                deffer.resolved(data);
            });
        }

    }