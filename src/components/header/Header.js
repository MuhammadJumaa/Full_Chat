import React, { Component } from 'react'
import { Icon } from 'rsuite';
import './header.scss';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="info">
                    <h1>username</h1>
                    <Icon icon="user-circle" />
                    <a href="#/">Logout</a>
                </div>
            </header>
        )
    }
}

export default Header;