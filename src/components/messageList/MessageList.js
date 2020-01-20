import React, { Component } from 'react'
import { Icon } from 'rsuite';
import './MessageList.scss'
import SendMessageForm from '../SendMessageForm';
import Message from '../message/Message';

class MessageList extends Component {
    render() {
        if (!this.props.roomId) {
            return (
                <section className="messageList joinARoom">
                    <div className="center">
                        <h1>
                            <span>Join a Room</span>
                            <Icon icon="hand-o-right" />
                        </h1>
                    </div>
                </section>
            )
        }
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

                    {this.props.messages.map((message, index) => {
                        return (
                            <Message key={index} username={message.senderId} text={message.text} />
                        )
                    })
                    }

                </div>
                <SendMessageForm sendMessage={this.props.sendMessage} />
            </section>
        )
    }
}

export default MessageList;