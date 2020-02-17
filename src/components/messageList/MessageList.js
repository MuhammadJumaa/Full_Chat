import React, { Component } from 'react'
import SendMessageForm from '../SendMessageForm';
import Message from '../message/Message';
import './MessageList.scss'

class MessageList extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: '',
            key:''
        }
    }
    render() {
        return (
            <section className="messageList">
                <div className="top">
                    <div className="titleAndIcons">
                        <div className="title">
                            <h1>Chat</h1>
                        </div>
                    </div>
                </div>
                <div className="center">
                    {
                        this.props.messages.map((message,index)=>{
                            return(
                                <Message 
                                    key={index} text={message.message}
                                />
                            )
                        })
                    }
                    
                </div>
                <SendMessageForm 
                    onSubmitMessage = {this.props.onSubmitMessage}
                />
            </section>
        )
    }
}
export default MessageList;