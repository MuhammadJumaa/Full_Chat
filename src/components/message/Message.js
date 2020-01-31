import React from 'react'
import './message.scss'

function Message(props) {
    return (
        <div className="message">
            <div className="message-username">username</div>
            <div className="message-text">{props.text}</div>
        </div>
    )
}

export default Message;