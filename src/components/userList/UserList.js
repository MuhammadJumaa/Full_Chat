import React, { Component } from 'react'
import { Input , Icon } from 'rsuite';
import axios from 'axios';
import './UserList.scss'


export default class UserList extends Component {
    constructor(props){
        super(props);
        this.state = {
            users:[]
        }
        console.log("constructor");
    }
    componentDidMount(){
        console.log("componentDidMount");
        axios.get('http://10.16.0.63:5000/api/users')
        .then(res=> {
            console.log(res);
            this.setState({
                users:res.data.results
            });
        })
    }
    render() {
        console.log("render");
        return (
            <section className="userList">
                <div className="messengerSearch">
                    <div className="settings">
                        <a href="#/" className="cog">
                            <Icon icon="cogs" />
                        </a>
                        <h5>Messenger</h5>
                        <a href="#/" className="plus">
                            <Icon icon='plus' />
                        </a>
                    </div>
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