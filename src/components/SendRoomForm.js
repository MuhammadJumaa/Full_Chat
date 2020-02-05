import React, { Component } from 'react'
import axios from 'axios';

class SendRoomForm extends Component {
    constructor(){
        super()
        this.state = {
            value :'',
            roomName:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            value:e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const data = {
            roomName: this.state.value
        }
        axios.post('http://10.11.0.68:5000/api/rooms/add', {data})
            .then((res)=>{
                console.log("result  ->" + res);
            })
            .catch(err => console.log(err));
        this.setState({
            value:''
        });
    }
    render() {
        return (
            <div className="roomForm">
            <form className="send-room-form" onSubmit={this.handleSubmit}>
                <input
                name="roomName"
                id="roomName"
                value={this.state.value}
                onChange={this.handleChange}
                className="rs-input"
                placeholder="Create a room"
                />
            </form>         
        </div>
        )
    }
}
export default SendRoomForm;