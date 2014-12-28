
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
var Q = require("q");
var MainPage = require("./SiteBlocks/MainPage.jsx");

require('./UI.less');

var UI = React.createClass({

    getInitialState: function () {
        return {
            isLoginActive: false,
            currentPage: "load",
            user: {
                name: "Default",
                courses: []
            },
            pages: {
                load: this.getLoadingPage,
                login: this.getLoginPage,
                main: this.getMainPage
            }
        };
    },

    componentDidMount: function() {
        this.checkUserAutification();
    },

    checkUserAutification: function() {
        var page;
        var self = this;

        this.isUserLogin().then(function(data){

            if (data.isLogin) {
                page = "main";
                self.state.user.name = data.user.user.local.email;
                self.state.user.courses = data.user.user.courses;
            } else {
                page = "login";
            }
            self.setState({
                currentPage: page
            });
        });
    },

    getLoadingPage: function() {
        return (<div className="loading" ><i className="fa fa-spinner fa-spin"></i></div>);
    },


    getLoginPage: function() {
        $('body').css('background',"#22B473");
        $('#UI').css('background',"#22B473");
        return (<div>
                    {this.getLoginWindow()}
                    <Header login={this.handleToggle} />
                    <Registration update={this.update}/>
                    <Logo />
                    <BodyTextContent />
                    <SliderInFrame />
                </div>);
    },

    update: function() {
        this.checkUserAutification();
    },

    getMainPage: function() {
        return (<MainPage update={this.update}
                          user={this.state.user}/>);
    },

    isUserLogin: function() {
        var deffer = Q.defer();
        $.ajax({
            type: 'POST',
            url: "/isLogin",
            error: function(e){
                deffer.reject()
            },
            success: function(result){
                deffer.resolve(result);
            }
        });
        return deffer.promise;
    },

    handleToggle: function () {
        this.setState({
          isLoginActive: !this.state.isLoginActive
        });
    },

    getLoginWindow: function() {

        var loginWindow = this.state.isLoginActive
            ? <LoginWindow update={this.update}
                           hide={this.handleToggle}/>
            : '';
        return loginWindow;
    },

    render: function() {

        var page = this.state.pages[this.state.currentPage]
            ? this.state.pages[this.state.currentPage]()
            : "";

        return (
            <div ref="UI" onClick={this.onScroll} className='UI' id="UI">
                {page}
            </div>
        );
    }
});

module.exports = UI;