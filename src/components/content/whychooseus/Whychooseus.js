import React, { Component } from 'react'
import { Row, Col, Carousel } from 'antd'

import thirighttem from '../../../assets/team/therightteam.png'
import welisten from '../../../assets/team/welisten.png'
import creative from '../../../assets/team/creative.jpg'
import under from '../../../assets/team/under.jpg'

import owl1 from '../../../assets/casrouselautoplay/apple.jpg'
import owl2 from '../../../assets/casrouselautoplay/css3.jpg'
import owl3 from '../../../assets/casrouselautoplay/drupal.jpg'
import owl4 from '../../../assets/casrouselautoplay/html.png'
import owl5 from '../../../assets/casrouselautoplay/window.png'
import owl6 from '../../../assets/casrouselautoplay/wordpress.jpg'

import './whychooseus.css'
import { Tabs } from "antd";

const { TabPane } = Tabs;
export default class Whychooseus extends Component {
    state = {
        slides:
            [owl1,owl2, owl3, owl4, owl5, owl6],
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
        };
        return (
            <div className="why-choose-us-container">
                <Row className="text-center why-choose-container">
                    <Col span={24}>
                        <p className="text-center why-choose-title">WHY CHOOSE HT ACTIVE</p>
                        <div className="separator">
                        </div>
                        <p className="lead text-center">HT Active offers a great service in the design, development and programming of your website/application. We strive to offer the best solution for your business and impartial advice at an honest price. We are constantly investigating new technologies and recommend them when they make sense.</p>
                    </Col>
                </Row>
                <Row className="the-right-team">
                    <div className="arrow hidden-sm hidden-xs">
                        <i className="fa fa-caret-up"></i>
                    </div>
                </Row>
                <Row className="team-pane">
                    <Col span={4}>
                    </Col>
                    <Col span={16}>
                        <Tabs defaultActiveKey="1" tabPosition="left">
                            <TabPane tab="THE RIGHT TEAM" key="1">
                                <p className="list-title text-center">THE RIGHT TEAM</p>
                                <p className="list-content">We love what we do, some might say a bit too much, and we bring enthusiasm and commitment to every project we work on. Put simply, if you want a partner who cares about your business, choose HT Active.</p>
                                <img className="list-image" src={thirighttem} alt="" />
                            </TabPane>
                            <TabPane tab="WE LISTEN" key="2">
                                <p className="list-title text-center">WE LISTEN</p>
                                <p className="list-content">We listen, we discuss, we advise. We then select the best solution to fit. We don’t shoehorn projects and if we feel we’re not a good fit we’ll be honest and tell you from the outset. We're experienced programmers, we love discussing and planning new projects and have years of knowledge and ex</p>
                                <img className="list-image" src={welisten} alt="" />
                            </TabPane>
                            <TabPane tab="CREATIVE & TECHNICAL" key="3">
                                <p className="list-title text-center">CREATIVE & TECHNICAL</p>
                                <p className="list-content">Whether it’s website or application, game..., system development or custom programming, we like to keep everything under one roof to make it easier for our customers. We love nothing more than working on a great project with a fantastic client. We care about our clients and can often be found</p>
                                <img className="list-image" src={creative} alt="" />
                            </TabPane>
                            <TabPane tab="UNDER ONE ROOF" key="4">
                                <p className="list-title text-center">UNDER ONE ROOF</p>
                                <p className="list-content">HT Active is 'one-stop-shop' software solution agency providing everything you need to successfully market your business to customers. Our services include planning and strategy, design and development, building and deploying web applications/mobile application/game belong with graphic design</p>
                                <img className="list-image" src={under} alt="" />
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
                <Row className='endWC'>
                    <Col span={2}></Col>
                    <Col span={10}>
                        <div className='CarouselEndWC'>
                            <Carousel {...settings}>
                                {this.state.slides.map(function (slide, index) {
                                    return (
                                        <div key={index}>
                                            <img src={slide} alt='jhgj' />
                                        </div>
                                    );
                                })}
                            </Carousel>
                        </div>
                    </Col>
                    <Col span={6} className='textEndWC'>
                        <p>Design is not just what it looks like and feels like.
                         Design is how it works.</p>
                    </Col>
                    <Col span={4}></Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}
