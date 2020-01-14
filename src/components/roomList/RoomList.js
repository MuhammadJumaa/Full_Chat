import React, { Component } from 'react'
import './RoomList.scss'

class RoomList extends Component {
    render() {
        console.log(this.props.rooms)
        return (
            <section className="roomList">
                <div className="title">
                    <h5>Room List</h5>
                </div>
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
            </section>
        )
    }
}

export default RoomList;