import React, { Component } from 'react'
import './RoomList.scss'

class RoomList extends Component {
    render() {
        const orderedRooms = [...this.props.rooms].sort((a,b)=>a.id - b.id)
        return (
            <section className="roomList">
                <div className="title">
                    <h5>Room List</h5>
                </div>
                <div className="list">
                        <ul>
                            {
                                orderedRooms.map(room=>{
                                    const active = this.props.roomId === room.id ? "active" : "";
                                    return(
                                        <li key={room.id} className={"room " + active}>
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
            </section>
        )
    }
}

export default RoomList;