import React, { Component } from 'react'
import axios from 'axios';
import SendRoomForm from '../SendRoomForm';
import './RoomList.scss'
import {Redirect} from  "react-router-dom";
import config from '../../config'
class RoomList extends Component {
    constructor(props){
        super(props)
        this.state = {
            rooms:[]
        }
    }
    componentDidMount(){
        var reqconfig = {
            headers: { Authorization: localStorage.usertoken }
        };
        axios.post(config.APILink+'/rooms',reqconfig)
        .then(res=>{
          //  console.log("rooms -> " + res);
          if(res.data.code===200)
            this.setState({
                rooms:res.data.results
            })
            if(res.data.code===204){
                localStorage.usertoken='';
                return <Redirect to='/login'  />
            }
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