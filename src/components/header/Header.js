import React, { Component } from 'react'
import { Icon } from 'rsuite';
import './header.scss';
import { Redirect, Link } from "react-router-dom";
import { connect } from 'react-redux';
var jwtDecode = require('jwt-decode');

class Header extends Component {
    Logout = () => {
        localStorage.usertoken = '';
        return <Redirect to='/login' />;
    }
    render() {
        try {
            var userData = jwtDecode(localStorage.usertoken);
        } catch (error) {
            return <Redirect to='/login' />;
        };
        return (
            <header>
                <div className="titleAndInfo">
                    <div className="title">
                        <Link to="/" >
                            <h1>Chat App</h1>
                        </Link>
                    </div>
                    <div className="info">
                        <Link to="/Profile" className="profile">
                            <h1>{userData.email}</h1>
                            <Icon icon="user-circle" />
                        </Link>
                        <a appearance="ghost" onClick={this.Logout} href="#/">Logout</a>
                    </div>
                </div>
            </header>
        )
    }
}

export default connect()(Header);