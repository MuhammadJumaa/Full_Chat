import React, { Component } from 'react';
import UserList from '../components/userList/UserList';
import MessageList from '../components/messageList/MessageList';
import RoomList from '../components/roomList/RoomList';
import {Redirect} from  "react-router-dom";
import Header from '../components/header/Header';
var jwtDecode = require('jwt-decode');

//const URL = 'ws://localhost:3030'

class Chat extends Component {
    constructor(props){
        super(props)
        this.state = {
            messages: [],
            redirect: true,
        }
    }
    //ws = new WebSocket(URL);
    componentDidMount(){
        // this.ws.onopen = () => {
        //    // console.log('connected')
        // }
        // this.ws.onclose = () => {
        //  //   console.log("disconnected");
        //     // this.setState({
        //     //     ws: new WebSocket(URL),
        //     // })
        // }
              
        
    }
    addMessage = message =>
    this.setState(state => ({ messages: [message, ...state.messages] }))
    submitMessage = messageString => {
        const message = { message: messageString }
  //      this.ws.send(JSON.stringify(message))
        this.addMessage(message)
    }
    
    render(){
        try{
            jwtDecode(localStorage.usertoken)
        }catch(error){
            return <Redirect to='/login'/>;
        }
        return(
            <main>
                <Header/>
                <section className="chatMain">
                    <UserList />
                    <MessageList
                        messages={this.state.messages}
                        ws={this.ws}
                        onSubmitMessage={messageString => 
                            this.submitMessage(messageString)}
                    />
                    <RoomList />
                </section>

            </main>
        )
    }
}
export default Chat;



