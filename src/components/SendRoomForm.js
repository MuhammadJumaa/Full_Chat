import React, { Component } from 'react'

class SendRoomForm extends Component {
    constructor(){
        super()
        this.state = {
            roomName :''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            roomName:e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.createRoom(this.state.roomName)
        this.setState({roomName:''})
    }
    render() {
        return (
            <div className="roomForm">
            <form className="send-room-form" onSubmit={this.handleSubmit}>
                <input
                value={this.state.roomName}
                onChange={this.handleChange}
                className="rs-input"
                placeholder="Create a room"
                required
                />
            </form>         
        </div>
        )
    }
}
export default SendRoomForm;