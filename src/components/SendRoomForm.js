import React, { Component } from 'react'

class SendRoomForm extends Component {
    render() {
        return (
            <div className="roomForm">
            <form className="send-room-form">
                <input
                className="rs-input"
                placeholder="Add Room" />
            </form>         
        </div>
        )
    }
}
export default SendRoomForm;