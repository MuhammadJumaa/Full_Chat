import React from 'react'
import UserList from '../components/userList/UserList';
import MessageList from '../components/messageList/MessageList';

function Chat() {
    return(
        <main>
            <UserList />
            <MessageList />
        </main>
    )
}

export default Chat;



