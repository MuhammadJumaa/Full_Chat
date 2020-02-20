import React from 'react'
import './message.scss'
var jwtDecode = require('jwt-decode');

function Message(props) {
    var data =jwtDecode(localStorage.usertoken);
    return (
        <div className={"message " + (props.sender === data.user_id ? 'right' : 'left')}>
            <div className="message-username">- {props.senderUser}</div>
            <div className="message-text">{props.text}</div>
        </div>
    )
}

export default Message;