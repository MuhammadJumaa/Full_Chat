import React, { Component } from 'react'
import { Input , Icon } from 'rsuite';
import './UserList.scss'


export default class UserList extends Component {
    render() {
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
                    <div className="item">
                        <div className="itemCont">
                            <div className="img">
                                <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="test" />
                            </div>
                            <div className="text">
                                <h1>Darlene Steeves</h1>
                                <p>Hello world! This is a long message</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemCont">
                            <div className="img">
                                <img src="https://randomuser.me/api/portraits/men/69.jpg" alt="test" />
                            </div>
                            <div className="text">
                                <h1>Maya Barnett</h1>
                                <p>Hello world! This is a long message</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemCont">
                            <div className="img">
                                <img src="https://randomuser.me/api/portraits/women/31.jpg" alt="test" />
                            </div>
                            <div className="text">
                                <h1>Sam Henry</h1>
                                <p>Hello world! This is a long message</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemCont">
                            <div className="img">
                                <img src="https://randomuser.me/api/portraits/women/31.jpg" alt="test" />
                            </div>
                            <div className="text">
                                <h1>Sam Henry</h1>
                                <p>Hello world! This is a long message</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemCont">
                            <div className="img">
                                <img src="https://randomuser.me/api/portraits/women/31.jpg" alt="test" />
                            </div>
                            <div className="text">
                                <h1>Sam Henry</h1>
                                <p>Hello world! This is a long message</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemCont">
                            <div className="img">
                                <img src="https://randomuser.me/api/portraits/women/31.jpg" alt="test" />
                            </div>
                            <div className="text">
                                <h1>Sam Henry</h1>
                                <p>Hello world! This is a long message</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemCont">
                            <div className="img">
                                <img src="https://randomuser.me/api/portraits/women/31.jpg" alt="test" />
                            </div>
                            <div className="text">
                                <h1>Sam Henry</h1>
                                <p>Hello world! This is a long message</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemCont">
                            <div className="img">
                                <img src="https://randomuser.me/api/portraits/women/31.jpg" alt="test" />
                            </div>
                            <div className="text">
                                <h1>Sam Henry</h1>
                                <p>Hello world! This is a long message</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemCont">
                            <div className="img">
                                <img src="https://randomuser.me/api/portraits/women/31.jpg" alt="test" />
                            </div>
                            <div className="text">
                                <h1>Sam Henry</h1>
                                <p>Hello world! This is a long message</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemCont">
                            <div className="img">
                                <img src="https://randomuser.me/api/portraits/women/31.jpg" alt="test" />
                            </div>
                            <div className="text">
                                <h1>Sam Henry</h1>
                                <p>Hello world! This is a long message</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemCont">
                            <div className="img">
                                <img src="https://randomuser.me/api/portraits/women/31.jpg" alt="test" />
                            </div>
                            <div className="text">
                                <h1>Sam Henry</h1>
                                <p>Hello world! This is a long message</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemCont">
                            <div className="img">
                                <img src="https://randomuser.me/api/portraits/women/31.jpg" alt="test" />
                            </div>
                            <div className="text">
                                <h1>Sam Henry</h1>
                                <p>Hello world! This is a long message</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemCont">
                            <div className="img">
                                <img src="https://randomuser.me/api/portraits/women/31.jpg" alt="test" />
                            </div>
                            <div className="text">
                                <h1>Sam Henry</h1>
                                <p>Hello world! This is a long message</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}