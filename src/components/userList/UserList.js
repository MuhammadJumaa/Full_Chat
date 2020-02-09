import React, { Component } from 'react'
import { Input , Icon, Form } from 'rsuite';
import axios from 'axios';
import './UserList.scss';
import config from '../../config';
import {updateUser} from '../../actions/userActions';
import {connect} from 'react-redux';

class UserList extends Component {
    constructor(props){
        super(props);
        this.state = {
            users:[]
        }
        this.onUpdateUser = this.onUpdateUser.bind(this);
    }
    componentDidMount(){
        axios.get(config.APILink+'users')
        .then(res=> {
            this.setState({
                users:res.data.results
            });
        })
    }
    onUpdateUser(){
        this.props.dispatch(updateUser('AHMET'));
        //dispatch -> action'daki datayı store göndermek.
    }
    render() {
        console.log("userlist->" + this.props.user);
        return (
            <section className="userList">
                <div className="messengerSearch">
                    <div className="settings">
                        <a href="#/" className="cog">
                            <Icon icon="cogs" />
                        </a>
                        <h5>{this.props.user}</h5>
                        <a href="#/" className="plus">
                            <Icon icon='plus' />
                        </a>
                    </div>
                    <button onClick={this.onUpdateUser}>update</button>
                    <div className="search">
                        <Input placeholder="Search Messages" />
                    </div>
                </div>
                <div className="usersList">
                    {
                        this.state.users.map(
                            user=>
                            <div className="item" key={user.id}>
                                <div className="itemCont">
                                    <div className="img">
                                        <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="test" />
                                    </div>
                                    <div className="text">
                                        <h1>{user.name} / {user.username}</h1>
                                        <p>Hello world! This is a long message</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return state;
}
//mapstatetoprops -> state'de o anda ne var ise onu 
//component içerisinde props olarak kullanmamızı sağlayan bir map'leme işlemi...


export default  connect(mapStateToProps)(UserList);
//connect -> store componente bağlamak için kullanılır.