/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var LoginButton = require('../components/LoginButton.jsx');
var LanguageButton = require('../components/LanguageButton.jsx');
var Course = require('../components/Course.jsx');
var Button = require('../components/ButtonComponent.jsx');
var $ = require('jquery');
var Esprima = require('esprima');

require('./MainPage.less');

var MainPage = React.createClass({

    getInitialState: function() {
        return {
            currentPage: "home",
            codesBlock: {
                "Основы Javascript": "alert('Привет, Мир!');\n",
                "Основы Javascript T1": ""
            },
            submitButton: "Проверить",
            pages: {
                home: this.getHomePage,
                courses: this.getCoursesPage,
                "Основы Javascript T1": this.getTaskPage,
                "Основы Javascript": this.getJSBeginner,
                "Структуры данных": this.getStructCourse,
                "Функции и замыкания": this.getFunctionCourse,
                "Объекты и методы": this.getObjectCouser,
                "JS разное": this.getDiff,
                "CSS для JavaScript-разработчика": this.getJSCss
            }
        };
    },

    componentDidMount: function() {
        $('body').height(1000).css('background',"#438793");
        $('#UI').css('background',"#438793");
    },

    getTaskPage() {

        return (<div className="beginCourse">
                    <div className="beginHeader">
                        <span className="title">Задание 1</span>
                        <div className="infoBlock">
                            <span className="leftTitile"><i className="fa fa-bar-chart"></i> Для начинающих</span>
                            <span className="rightTitile"><i className="fa fa-male"></i> Сейчас проходят: 231</span>
                        </div>
                    </div>
                    <div className="beginContent">
                        <h2>
                            Сделайте страницу, которая выводит «Я love - JavaScript!»
                        </h2>

                        <div className="task">
                            <div id="mirrorEditor" />
                            <Button bsStyle={"primary"}
                                    class="_look"
                                    onClick={this.compileCode}
                                    text={"Смотреть"}/>
                        </div>
                    </div>
                    <Button bsStyle={"success"}
                            class="_task_submit"
                            onClick={this.submitTask.bind(this, this.state.currentPage)}
                            text={this.state.submitButton}/>
                </div>)
    },

    submitTask: function(task) {

        var tryTask = Esprima.parse(this.myCodeMirror.getValue());

        var correct = false;

        if (tryTask.body && tryTask.body[0] && tryTask.body[0].expression && tryTask.body[0].expression.callee) {

            if (tryTask.body[0].expression.type == "CallExpression") {
                if (tryTask.body[0].expression.callee.name == "alert") {
                    var value = tryTask.body[0].expression.arguments[0].value;
                    if (value == "I lova Javascript" ||
                        value == "I love - Javascript" ||
                        value == "I - javascript" ||
                        value == "i love - javascript" ||
                        value == "i love javascript" ||
                        value == "Я love - Javascript" ) {
                        this.setState({
                            submitButton: "Верно"
                        });
                        correct = true;
                    }
                }
            }

        }

        if (!correct) {
            this.setState({
                submitButton: "Ошибка"
            })
        }
    },

    getHomePage: function() {
        return (<div className="beginCourse">
                    <div className="beginHeader">
                        <span className="title">Создайте свой план обучения</span>
                    </div>
                    <div className="CoursesPage">
                        {this.getPlan()}
                    </div>
                </div>)
    },

    getCourses: function() {
        var texts = [];

        texts.push({
            name : "Основы Javascript",
            img: "start",
            exp: 112
        });

        texts.push({
            name : "Структуры данных",
            exp: 75
        });

        texts.push({
            name : "Функции и замыкания",
            exp: 105
        });

        texts.push({
            name : "Объекты и методы",
            exp: 101
        });

        texts.push({
            name : "JS разное",
            exp: 96
        });

        texts.push({
            name : "CSS для JavaScript-разработчика",
            exp: 70
        });

        var courses = [];

        for (var i = 0; i < texts.length; i++) {
            courses.push(<Course data={texts[i]}
                                 courses={this.props.user.courses}
                                 subscribe={this.subscribeCourse} />);
        }

        return courses;
    },

    getPlan: function() {
        var texts = [];

        texts.push({
            name : "Пройдите екскурсию сервисом",
            img: "start",
        });

        texts.push({
            name : "Расскажите о себе",
            img: "info",
        });

        texts.push({
            name : "Пройдите тест",
        });

        texts.push({
            name : "Выбирете цели",
        });

        var plan = [];

        for (var i = 0; i < texts.length; i++) {
            plan.push(<Course data={texts[i]}
                              courses={this.props.user.courses}
                              subscribe={this.subscribeCourse} />);
        }

        return plan;
    },

    subscribeCourse: function(name) {
        var self = this;
        var user = {
            name: name
        }
        $.ajax({
            type: 'POST',
            data: user,
            url: "/subscribeCourse",
            dataType: "json",
            error: function(e){
                console.log(e);
            },
            success: function(e){
                self.setState({
                    currentPage: name
                });
                self.props.user.courses.push(name);
                self.forceUpdate();
            }
        });
    },

    getCoursesPage: function() {

        return (<div className="CoursesPage">
                    {this.getCourses()}
                </div>)
    },

    startTask: function(name) {
        this.codemirror = !this.codemirror;
        this.setState({
            currentPage: "Основы Javascript T1"
        });

    },

    componentDidUpdate: function() {
        var self =  this;
        if (!this.codemirror) {

            this.myCodeMirror = CodeMirror(document.getElementById("mirrorEditor"), {
                value: self.state.codesBlock[self.state.currentPage],
                mode:  "javascript",
                autoCloseBrackets: true,
                styleActiveLine: true,
                lineNumbers: true,
                autoCloseTags: true,
                lineWrapping: true
            });

            console.log(this.myCodeMirror.getValue())
        }
        if (document.getElementById("mirrorEditor")) {
            this.codemirror = true;
        } else {
            this.codemirror = false;
        }
    },

    getJSBeginner: function() {

        return (<div className="beginCourse">
                    <div className="beginHeader">
                        <span className="title">Введение в JavaScript</span>
                        <div className="infoBlock">
                            <span className="leftTitile"><i className="fa fa-bar-chart"></i> Для начинающих</span>
                            <span className="rightTitile"><i className="fa fa-male"></i> Сейчас проходят: 231</span>
                        </div>
                    </div>
                    <div className="beginContent">
                        <p>
                            <i>JavaScript</i> изначально создавался для того, чтобы сделать web-странички «живыми».
                            Программы на этом языке называются скриптами. Они подключаются напрямую к HTML и,
                            как только загружается страничка — тут же выполняются.
                        </p>
                        <h2>
                            Что умеет JavaScript?
                        </h2>
                        <p>
                            Современный JavaScript — это «безопасный» язык программирования общего назначения.
                            Он не предоставляет низкоуровневых средств работы с памятью,
                            процессором, так как изначально был ориентирован на браузеры, в которых это не требуется.
                            В браузере JavaScript умеет делать все, что относится к манипуляции со страницей,
                            взаимодействию с посетителем и, в какой-то мере, с сервером.
                        </p>
                        <h2>
                            Привет, мир!
                        </h2>
                        <strong><i>alert(...) — </i></strong>
                        <br />
                        <p>Отображает окно с сообщением и ждет, пока посетитель не нажмет «Ок»</p>
                        <div className="task">
                            <div id="mirrorEditor" />
                            <Button bsStyle={"primary"}
                                    class="_look"
                                    onClick={this.compileCode}
                                    text={"Смотреть"}/>
                        </div>
                    </div>

                    <Button bsStyle={"primary"}
                            class="_task"
                            onClick={this.startTask.bind(this, 'Основы Javascript')}
                            text={"Задание"}/>
                </div>);
    },

    compileCode: function() {
        eval(this.myCodeMirror.getValue());
    },

    getStructCourse: function() {
        return <div />
    },

    getFunctionCourse: function() {
        return <div />
    },

    getObjectCouser: function() {
        return <div />
    },

    getDiff: function() {
        return <div />
    },

    getJSCss: function() {
        return <div />
    },

    logOut: function() {
        var self = this;

        $.ajax({
            type: 'GET',
            url: "/logout",
            error: function(e){
                console.log(e);
            },
            success: function(result){
                if (self.props.update) {
                    self.props.update();
                }
            }
        });
    },

    goToProfile: function() {
        location.href='/profile';
    },

    setActiveTab: function(e) {
        $('.nav.nav-tabs li').removeClass('active');
        $(e.target.parentNode).addClass('active');
        this.setState({
            currentPage: $(e.target.parentNode).attr('role')
        });
        return false;
    },

    toogleMenu: function(e) {
        if ($('.menuContent .dropdown-menu').is(":visible")) {
            $('.menuContent .dropdown-menu').hide();
        } else {
            $('.menuContent .dropdown-menu').show();
        }
    },

    render: function() {

        var page = this.state.pages[this.state.currentPage]
            ? this.state.pages[this.state.currentPage]()
            : "";

        return (
            <div className='MainPage'>
                <div className='MainHeader'>
                    <div className="menuContent">
                        <div className="menu">
                            <ul className="nav nav-tabs">
                                <li role="home" onClick={this.setActiveTab}
                                                className="active" style={{marginLeft: 42}}>
                                    <a href="#">Домой</a>
                                </li>
                                <li role="courses" onClick={this.setActiveTab}>
                                    <a href="#">Курсы</a>
                                </li>
                                <li role="intresting" onClick={this.setActiveTab}>
                                    <a href="#">Интерестное</a>
                                </li>
                                <li role="lessons" onClick={this.setActiveTab}>
                                    <a href="#">Уроки</a>
                                </li>
                                <li role="tranings" onClick={this.setActiveTab}>
                                    <a href="#">Тренировки</a>
                                </li>
                                <li role="team" onClick={this.setActiveTab}>
                                    <a href="#">Команда</a>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-default dropdown-toggle"
                                    type="button"
                                    id="dropdownMenu1"
                                    onClick={this.toogleMenu}
                                    data-toggle="dropdown"
                                    aria-expanded="true">
                              {this.props.user.name}
                              <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                                <li role="presentation" onClick={this.goToProfile}>
                                    <a role="menuitem" tabindex="-1" href="#">Настройки аккаунта</a>
                                </li>
                                <li role="presentation" onClick={this.logOut}>
                                    <a role="menuitem" tabindex="-1" href="#">Выход</a>
                                </li>
                                <li role="presentation" className="divider"></li>
                                <li role="presentation">
                                    <a role="menuitem" tabindex="-1" href="#">Еще ...</a>
                                </li>
                            </ul>
                        </div>
                        <div className="contentBlock">
                            <div className="courseContent">
                                {page}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
});

module.exports = MainPage;
