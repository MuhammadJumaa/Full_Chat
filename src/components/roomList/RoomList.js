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
                            <li>
                                <a href="/#">
                                   room name
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <SendRoomForm/>
            </section>
        )
    }
}

export default RoomList;