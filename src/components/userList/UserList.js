import React, { Component } from 'react'
import { Input } from 'rsuite';
import './UserList.scss';
import {fetchProducts} from '../../actions/userActions';
import {connect} from 'react-redux';
import {Redirect} from  "react-router-dom";
var jwtDecode = require('jwt-decode');

class UserList extends Component {
    componentDidMount() {
        this.props.dispatch(fetchProducts());
    }
    GetMessages=(UserId)=>{
console.log(UserId);
    }
    render() {
        try{
            console.log(jwtDecode(localStorage.usertoken));
            jwtDecode(localStorage.usertoken)
        }catch(error){
            return <Redirect to='/login'/>;
        }
        const { users } = this.props;
        return (
            <section className="userList">
                <div className="messengerSearch">
                    <div className="title">
                       <h1>User List</h1>   
                    </div>
                    <div className="search">
                        <Input placeholder="Search Messages" />
                    </div>
                </div>
                <div className="usersList">
                {users.map(user =>
                    <div className="item" key={user.id} onClick={this.GetMessages.bind(this,user.id)}>
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
                    )}
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.items,
    loading: state.users.loading,
    error: state.users.error,
  });
//mapstatetoprops -> state'de o anda ne var ise onu 
//component içerisinde props olarak kullanmamızı sağlayan bir map'leme işlemi...

export default  connect(mapStateToProps)(UserList);
//connect -> store componente bağlamak için kullanılır.