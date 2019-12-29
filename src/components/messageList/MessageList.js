import React, { Component } from 'react'
import { Icon , Input , Button } from 'rsuite';
import './MessageList.scss'

export default class MessageList extends Component {
    render() {
        return (
            <section className="messageList">
                <div className="top">
                    <div className="titleAndIcons">
                        <div className="title">
                            <h1>Chat</h1>
                        </div>
                        <div className="Icons">
                            <a href="#/">
                                <Icon icon="phone" />
                            </a>
                            <a href="#/">
                                <Icon icon="video-camera" />
                            </a>
                            <a href="#/">
                                <Icon icon="info-circle" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="center">
                    chat List
                </div>
                <div className="bottom">
                    <form action="">
                        <Input placeHolder="Type A Message @name" />
                        <Button color="blue">Submit</Button>
                    </form>
                </div>
            </section>
        )
    }
}
