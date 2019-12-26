import React, { Component } from 'react'
import Button from 'rsuite/lib/Button';

export default class UserList extends Component {
    render() {
        return (
            <section className="messengerSearchAndusersList">
                <div className="messengerSearch">
                    <div className="settings">
                        <a href="#/" className="cog">
                            <i className="fas fa-cog"></i>
                        </a>
                        <h5>Messenger</h5>
                        <a href="#/" className="plus">
                            <i className="fas fa-plus"></i>
                        </a>
                    </div>
                </div>
                <div className="usersList">
                    <Button>userslist</Button>
                </div>
            </section>
        )
    }
}