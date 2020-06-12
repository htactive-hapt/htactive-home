import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'
import './about.css'
import hands from '../../../assets/handss.png'

import { Collapse } from 'antd';

const { Panel } = Collapse;
export default class About extends Component {
    render() {
        const { dataCollapse } = this.props
        return (
            <div className="about">
                <Row className="abouthtactive">
                    <Col span={24}>
                        <p className="about-title text-center">ABOUT HT ACTIVE</p>
                        <div className="separator">
                        </div>
                        <p className="lead text-center">HT Active is the team of Young & Brilliant people. We will help and support all you need about Software Solutions.
                            We’re developers, designers, support specialists and gamers. We have all you needs.</p>
                    </Col>
                </Row>
                <Row className="meet-team">
                    <Col span={4}>

                    </Col>
                    <Col span={8}>
                        <Row>
                            <h2>Meet the team - HT Active</h2>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <img className="hand-img" src={hands} alt="" />
                            </Col>
                            <Col span={10}>
                                <p id="paragrap">We work on the services, product and comunication. We love what we do, and who we do it with. To HT Active, all customers are friends.</p>
                            </Col>
                            <Col span={2}>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={22}>
                                <p id="paragrap">We work on the services, product and comunication. We love what we do, and who we do it with.
                             To HT Active, all customers are friends.</p>
                            </Col>
                            <Col span={2}>
                            </Col>
                        </Row>
                        <Row>
                            <Button className="btn-default btn" id="read-more">READ MORE</Button>
                        </Row>
                    </Col>
                    <Col span={8} className="my-ant-collapse">
                        {(dataCollapse || []).map((value, index) => {
                            return (
                                <Collapse accordion className="myCollapse">
                                    <Panel header={value.name} key={index} className="my-collapse-header">
                                        <p className="collapse-text">{value.text}</p>
                                    </Panel>
                                </Collapse>
                            );
                        })}
                    </Col>
                    <Col span={4}>

                    </Col>
                </Row>
                <Row className="contact-now">
                    <Col span={16}>
                        <h1 className="text-center">DON'T MISS OUT, CONTACT US NOW!</h1>
                        <p className="text-center">We will reply your message as soon as possible.</p>
                    </Col>
                    <Col span={8}>
                        <Button className="btn-default btn" id="read-more">CONTACT</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
