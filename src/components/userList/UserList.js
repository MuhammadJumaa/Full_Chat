import React, { Component } from 'react'
import { Input } from 'rsuite';
import './UserList.scss';
import {fetchProducts,fetchInputState} from '../../actions/rootActions';
import {connect} from 'react-redux';
//import {Redirect} from  "react-router-dom";

class UserList extends Component {
    componentDidMount() {
        this.props.dispatch(fetchProducts());
    }
    GetMessages=(friendId)=>{
        this.props.dispatch(fetchInputState(friendId));
    }
    render() {
        const { app } = this.props;
        //const {activeClass} = this.props;
        // if(this.props.code===204){
        //     localStorage.usertoken='';
        //     return <Redirect to='/login'/>;
        // }
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
                {app.map(user =>
                    <div className="item" key={user.id} onClick={this.GetMessages.bind(this,user.id)}>
                        <div className="itemCont">
                            <div className="img">
                                <img src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" alt="test" />
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
    app: state.app.users,
    code: state.app.code,
    activeClass:state.app.activeClass
  });
//mapstatetoprops -> state'de o anda ne var ise onu 
//component içerisinde props olarak kullanmamızı sağlayan bir map'leme işlemi...

export default  connect(mapStateToProps)(UserList);
//connect -> store componente bağlamak için kullanılır.