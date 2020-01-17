import React, { Component } from 'react'
import SendRoomForm from '../SendRoomForm';
import './RoomList.scss'

class RoomList extends Component {
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
                                this.props.rooms.map(room=>{
                                    return(
                                        <li key={room.id}>
                                            <a 
                                            onClick={() => this.props.subscribeToRoom(room.id)} 
                                            href="/#">
                                                # {room.name}
                                            </a>
                                        </li>
                                    )
                                })
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