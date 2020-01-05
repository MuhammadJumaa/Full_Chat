import React, { Component } from 'react'
import { Icon } from 'rsuite';
import './MessageList.scss'
import SendMessageForm from '../SendMessageForm';

const DUMMY_DATA = [
    {
        senderId:'Fatih',
        text:'naber'
    },
    {
        senderId:'jumma',
        text:'nasılsın'
    },
    {
        senderId:'yunus',
        text:'iyi sen'
    }
]

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
                    {DUMMY_DATA.map((message,index)=>{
                        return (
                        <div key={index}>
                            <div>{message.senderId}</div>
                            <div>{message.text}</div>
                        </div>
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