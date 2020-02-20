import React, { Component } from 'react'
import { Icon } from 'rsuite';
import './header.scss';
import {Redirect} from  "react-router-dom";
import {connect} from 'react-redux';
var jwtDecode = require('jwt-decode');

class Header extends Component {
   Logout=()=>{
    localStorage.usertoken='';
    return <Redirect to='/login'/>;
   }
    render() {
        try{
         var userData=  jwtDecode(localStorage.usertoken);
        }catch(error){
            return <Redirect to='/login'/>;
        };
        return (
            <header>
                <div className="info">
                    <h1>{userData.email}</h1>
                    <Icon icon="user-circle" />
                    <a appearance="ghost" onClick={this.Logout} href="#">Logout</a>
                </div>
            </header>
        )
    }
}

export default  connect()(Header);