import React, { Component } from 'react'
import { Icon } from 'rsuite';
import { Dropdown } from 'rsuite';
import { Redirect, Link } from "react-router-dom";
import { connect } from 'react-redux';
import './header.scss';

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
                        <Dropdown title={userData.email} placement="bottomEnd">
                            <Link className="rs-dropdown-item-content" to="/Profile">Profil</Link>
                            <Link className="rs-dropdown-item-content" to="/ChangePassword">Change Password</Link>
                            <Link className="rs-dropdown-item-content" appearance="ghost" to="" onClick={this.Logout} href="#/" >Logout</Link>
                        </Dropdown>
                        <Icon icon="user-circle" />
                    </div>
                </div>
            </header>
        )
    }
}

export default connect()(Header);