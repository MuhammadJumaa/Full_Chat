import React, { Component } from 'react'
import SendRoomForm from '../SendRoomForm';
import {fetchRooms} from '../../actions/roomActions';
import {connect} from 'react-redux';
import './RoomList.scss'

class RoomList extends Component {
    componentDidMount(){
        this.props.dispatch(fetchRooms());
    }
    render() {
        const { rooms } = this.props;
        return (
            <section className="roomCont">
                <div className="title">
                    <h5>Room List</h5>
                </div>
                <div className="roomList">
                    <div className="list">
                        <ul>
                            {rooms.map(room =>
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

const mapStateToProps = state => ({
    rooms: state.rooms.items,
    loading: state.rooms.loading,
    error: state.rooms.error,
});
//mapstatetoprops -> state'de o anda ne var ise onu 
//component içerisinde props olarak kullanmamızı sağlayan bir map'leme işlemi...

export default connect(mapStateToProps)(RoomList);
//connect -> store componente bağlamak için kullanılır.