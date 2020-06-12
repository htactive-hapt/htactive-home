import React, { Component } from 'react'
import Service from './services/Service'
import Commitment from './commitment/Commitment'
import About from './abouthtactive/About';
import Whychooseus from './whychooseus/Whychooseus';
export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    icon: "fa fa-laptop",
                    card_title: "Web Applications",
                    card_content: "Design and develop web applications, hosting service, domain, SEO.",
                    button: "READ MORE"
                },
                {
                    icon: "fa fa-mobile",
                    card_title: "Mobile Applications",
                    card_content: "Design and develop mobile applications, publish and app store optimization.",
                    button: "READ MORE"
                },
                {
                    icon: "fa fa-gamepad",
                    card_title: "Mobile Games",
                    card_content: "Design and develop mobile games, publish and app store optimization.",
                    button: "READ MORE"
                }
            ],
            dataCollapse: [
                {
                    icon: "fa fa-gavel",
                    name: "Reliance",
                    text: "Professional ethics is the number one criteria. For customer, we will always be honest because only the trust and satisfaction of customers bring us success."
                },
                {
                    icon: "fa fa-star",
                    name: "Fast and high quality commitment",
                    text: "We measure our success as a company by how well we achieve, not by the size of our profits. We'll do our best to bring you just the satisfied in the fastest way. When the service provider is not good just as committed, HT Active will refund to you. There will always be so."
                },
                {
                    icon: "fa fa-usd",
                    name: "Savings and effieciency",
                    text: "We do services not only for the profits, but also by the passion. We’re developers, designers, support specialists and gamers. We all love programing. Our services will savings and efficiency."
                },
                {
                    icon: "fa fa-weixin",
                    name: "24/7 supporting",
                    text: "HT Active will always support, serve, and maintain our customer for long term. Beside that, we provide a live chat system, working 24/7, that will help you immediate access to help."
                }
            ]
        };
    }
    render() {
        return (
            <div>
                <Commitment />
                <Service data={this.state.data} />
                <About dataCollapse={this.state.dataCollapse} />
                <Whychooseus />
            </div>
        )
    }
}
