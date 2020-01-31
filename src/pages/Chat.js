import React, { Component } from 'react';
import UserList from '../components/userList/UserList';
import MessageList from '../components/messageList/MessageList';
import RoomList from '../components/roomList/RoomList';
import axios from 'axios';
//import { Redirect } from 'react-router'

const URL = 'ws://localhost:3030'

class Chat extends Component {
    constructor(props){
        super(props)
        this.state = {
            messages: [],
            redirect: true,
        }
    }
    ws = new WebSocket(URL);
    componentDidMount(){
        this.ws.onopen = () => {
            console.log('connected')
        }
        this.ws.onclose = () => {
            console.log("disconnected");
            this.setState({
                ws: new WebSocket(URL),
            })
        }
        axios.get(`http://10.25.1.70:5000/api/chat`)
            .then(res => {
                if(res.data.code===200){
                    this.setState({ redirect:false })    
                }
        }).catch((e)=> {
            this.setState({ redirect: true })
            console.log(e);
        });       
        
    }
    addMessage = message =>
    this.setState(state => ({ messages: [message, ...state.messages] }))
    submitMessage = messageString => {
        const message = { message: messageString }
        this.ws.send(JSON.stringify(message))
        this.addMessage(message)
    }
    render(){
        /*
        if (this.state.redirect) {
            return <Redirect to='/login'/>;
          }
        */
        return(
            <main>
                <UserList />
                <MessageList
                    messages={this.state.messages}
                    ws={this.ws}
                    onSubmitMessage={messageString => this.submitMessage(messageString)}
                 />
                <RoomList />
            </main>
        )
    }
}
export default Chat;



