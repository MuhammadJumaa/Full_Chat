import React, { Component } from 'react'
import {fetchUsers,fetchInputState} from '../../actions/rootActions';
import {connect} from 'react-redux';
import './UserList.scss';

class UserList extends Component {
    constructor(){
        super();
        this.state = {
            search:''
        }
        this.changeSearch = this.changeSearch.bind(this);
    }
    changeSearch(e){
        this.setState({
            search:e.target.value,
        });
    }
    componentDidMount() {
        this.props.dispatch(fetchUsers());
    }
    GetMessages=(friendId)=>{
        this.props.dispatch(fetchInputState(friendId));
    }
    render() {
        const { app,friendId } = this.props;
        let filterUsers = app.filter(
            (users)=>{
                return users.name.indexOf(this.state.search)!==-1;
            }
        )
        return (
            <section className="userList">
                <div className="messengerSearch">
                    <div className="title">
                       <h1>User List</h1>   
                    </div>
                    <div className="search">
                        <input
                         onChange={this.changeSearch}
                         value={this.state.search}
                         className="rs-input"
                         placeholder="Search Users" />
                    </div>
                </div>
                <div className="usersList">
                {filterUsers.map(user =>
                    <div className={friendId === user.id ? "item active" : "item"} key={user.id} onClick={this.GetMessages.bind(this,user.id)}>
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
    activeClass:state.app.activeClass,
    friendId:state.app.friendId
  });
//mapstatetoprops -> state'de o anda ne var ise onu 
//component içerisinde props olarak kullanmamızı sağlayan bir map'leme işlemi...

export default  connect(mapStateToProps)(UserList);
//connect -> store componente bağlamak için kullanılır.