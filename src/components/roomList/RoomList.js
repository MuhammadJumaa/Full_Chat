import React, { Component } from 'react'
import SendRoomForm from '../SendRoomForm';
import {fetchRooms} from '../../actions/rootActions';
import {connect} from 'react-redux';
import {Redirect} from  "react-router-dom";
import './RoomList.scss'

class RoomList extends Component {
    componentDidMount(){
        this.props.dispatch(fetchRooms());
    }
    render() {
        const { app } = this.props;
        if(this.props.code===204){
            localStorage.usertoken='';
            return <Redirect to='/login'/>;
        }
        return (
            <section className="roomCont">
                <div className="title">
                    <h5>Room List</h5>
                </div>
                <div className="roomList">
                    <div className="list">
                        <ul>
                            {app.map(room =>
                                <li key={room.id}>
                                    <a href="/#">
                                        {room.name}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <SendRoomForm/>
            </section>
        )
    }
}

const mapStateToProps = state => {
    //console.log(state);
    return {
    app: state.app.rooms,
    code: state.app.code
}
};
//mapstatetoprops -> state'de o anda ne var ise onu 
//component içerisinde props olarak kullanmamızı sağlayan bir map'leme işlemi...

export default connect(mapStateToProps)(RoomList);
//connect -> store componente bağlamak için kullanılır.