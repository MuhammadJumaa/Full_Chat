import React, { Component } from 'react'
import axios from 'axios';
import SendRoomForm from '../SendRoomForm';
import './RoomList.scss'

class RoomList extends Component {
    constructor(props){
        super(props)
        this.state = {
            rooms:[]
        }
    }
    componentDidMount(){
        axios.get('http://10.11.0.68:5000/api/rooms')
        .then(res=>{
            console.log("rooms -> " + res);
            this.setState({
                rooms:res.data.results
            })
        })
    }
    render() {
        return (
            <section className="roomCont">
                <div className="title">
                    <h5>Room List</h5>
                </div>
                <div className="roomList">
                    <div className="list">
                        <ul>
                            {
                                this.state.rooms.map(
                                    room=>
                                    <li key={room.id}>
                                        <a href="/#">
                                            {room.name}
                                        </a>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
                <SendRoomForm/>
            </section>
        )
    }
}

export default RoomList;