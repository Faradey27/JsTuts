/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var Carousel = require('react-bootstrap').Carousel;
var CarouselItem = require('react-bootstrap').CarouselItem;

require('./SliderInFrame.less');

var SliderInFrame = React.createClass({

  render: function() {
    return (
        <div className="SliderInFrame">
            <Carousel>
                <CarouselItem>
                    <div className="block" />
                    <div className="carousel-caption">
                      <h3>1. Пройди тест на знание javascript</h3>
                      <p>JsLern определит уровень твоих знаний и порекомендует, что стоит изучить</p>
                      <i className="fa fa-tachometer"></i>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="block" />
                    <div className="carousel-caption">
                      <h3>2. Выполняй упражнения для практики javascript</h3>
                      <p>Множество интерактивных заданий помогут тебе закрепить теоретические знания</p>
                      <i className="fa fa-cogs"></i>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="block" />
                    <div className="carousel-caption">
                      <h3>3. Смотри видеоуроки</h3>
                      <p>Множество видеоуроков и видеокурсов будут доступны тебе</p>
                      <i className="fa fa-video-camera"></i>
                    </div>
                </CarouselItem>
            </Carousel>
        </div>
    );
  }
});

module.exports = SliderInFrame;
