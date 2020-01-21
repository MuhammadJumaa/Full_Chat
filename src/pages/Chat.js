import React, { Component } from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'
import UserList from '../components/userList/UserList';
import MessageList from '../components/messageList/MessageList';
import RoomList from '../components/roomList/RoomList';
import axios from 'axios';
import { Redirect } from 'react-router'
const tokenUrl = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/97ce846c-dbaa-4ea9-a56d-6d64c8fed484/token"
const instanceLocator = "v1:us1:97ce846c-dbaa-4ea9-a56d-6d64c8fed484"

class Chat extends Component {
    constructor(props){
        super(props)
        this.state = {
            messages:[],
            joinableRooms:[],
            redirect: false,
            joinedRooms:[]
        }
        this.sendMessage = this.sendMessage.bind(this);
        axios.post(`http://10.25.1.70:5000/api/chat`, {  })
            .then(res => {
                this.setState({ redirect: true })
                console.log(res);
                console.log(res.data);
        })
        .catch((e)=> {
            this.setState({ redirect: true })
            console.log(e);
        });
        setTimeout(() => {
            //this.props.history.push("/login");
        }, 3000);
    }
    componentDidMount(){
       
        if(true){
         //   history.push('/login')
        }
        const chatManager = new ChatManager({
            instanceLocator,
            userId:'fatih',
            tokenProvider: new TokenProvider({
                url:tokenUrl
            })
        })
        chatManager.connect()
        .then(currentUser=>{
            this.currentUser = currentUser
            this.currentUser.getJoinableRooms()
            .then(joinableRooms => {
                this.setState({
                    joinableRooms,
                    joinedRooms:this.currentUser.rooms
                })
            })
            .catch(errr => console.log('error on joinableRooms: ',errr))
            this.currentUser.subscribeToRoom({
                roomId: "1f799f64-e162-46c2-a347-d0a406be56dc",
                hooks: {
                  onMessage: message => {
                    this.setState({
                        messages:[...this.state.messages,message]
                    })
                  }
                },
                messageLimit: 10
              })
        })
        .catch(err => {
            console.log('Error on connection', err)
        })
    }
    sendMessage(text){
        this.currentUser.sendMessage({
            text,
            roomId:"1f799f64-e162-46c2-a347-d0a406be56dc"
        });
    }
    render(){
        if (true) {
            return <Redirect to='/login'/>;
          }
        return(
            <main>
                <UserList />
                <MessageList messages={this.state.messages} sendMessage={this.sendMessage} />
                <RoomList rooms={[...this.state.joinableRooms,...this.state.joinedRooms]}/>
            </main>
        )
    }
}
export default Chat;



