import React, { Component } from 'react'
import ReactDOM from 'react-dom';
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
    componentDidUpdate(){
        const node = ReactDOM.findDOMNode(this)
        node.scrollTop = node.scrollHeight
    }
    render() {
        const { currentConversationMessages } = this.props;
        return (
            <article className="center">
                <div >
                    {
                        currentConversationMessages.map((message,index)=>{
                            return(
                                <Message 
                                    key={index} text={message.message} sender={message.sender} senderUser={message.senderUser}
                                />
                            )
                        })
                    }
                    
                </div>
                <SendMessageForm 
                    onSubmitMessage = {this.props.onSubmitMessage}
                />
            </article>
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