import React, { Component } from 'react'
import SendMessageForm from '../SendMessageForm';
import { connect } from 'react-redux';
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
        
        const { currentConversationMessages } = this.props;
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
                        currentConversationMessages.map((message,index)=>{
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

const mapStateToProps = state => ({
    currentConversationMessages: state.app.currentConversationMessages
});
//mapstatetoprops -> state'de o anda ne var ise onu 
//component içerisinde props olarak kullanmamızı sağlayan bir map'leme işlemi...

export default connect(mapStateToProps)(MessageList);
//connect -> store componente bağlamak için kullanılır.