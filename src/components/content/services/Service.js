import React, { Component } from 'react'
import { Row, Col } from 'antd';
import './service.css'
export default class Service extends Component {
    render() {
        const { data } = this.props
        return (
            <div className="session-services">
                <Row>
                    <Col span={24}>
                        <h1 className="text-center service-title">SERVICE</h1>
                        <div className="separator">
                        </div>
                        <p className="lead text-center">By using our services, you will get all of the great experience.</p>
                    </Col>
                </Row>
                <Row  className="service-container">
                    {(data || []).map((value, index) => {
                        return (
                            <Col span={24/data.length}>
                                <div className="services" id="services" key={index}>
                                    <i className={value.icon} id="icon-service" />
                                    <h2 className="card-title">
                                        {value.card_title}
                                    </h2>
                                    <p className="card-content">
                                        {value.card_content}
                                    </p>
                                    <button className="btn-default btn" id="read-more">
                                        {value.button}
                                    </button>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </div >
        )
    }
}