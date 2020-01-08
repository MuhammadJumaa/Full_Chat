import React, { Component } from 'react'
import { Icon } from 'rsuite';
import './MessageList.scss'
import SendMessageForm from '../SendMessageForm';
import Message from '../Message';

class MessageList extends Component {
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
                    {this.props.messages.map((message,index)=>{
                        return (
                            <Message key={index} username={message.senderId} text={message.text}/>
                        )
                    })
                    }
                </div>
                <SendMessageForm/>
            </section>
        )
    }
}

export default MessageList;