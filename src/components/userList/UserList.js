import React, { Component } from 'react'
import { Input , Icon } from 'rsuite';
import './UserList.scss';
import {fetchProducts} from '../../actions/userActions';
import {connect} from 'react-redux';

class UserList extends Component {
    componentDidMount() {
        this.props.dispatch(fetchProducts());
    }
    render() {
        const { users } = this.props;
        return (
            <section className="userList">
                <div className="messengerSearch">
                    <div className="settings">
                        <a href="#/" className="cog">
                            <Icon icon="cogs" />
                        </a>
                        <h5>{this.props.user}</h5>
                        <a href="#/" className="plus">
                            <Icon icon='plus' />
                        </a>
                    </div>
                    <div className="search">
                        <Input placeholder="Search Messages" />
                    </div>
                </div>
                <div className="usersList">
                {users.map(user =>
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
                    )}
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.items,
    loading: state.users.loading,
    error: state.users.error
  });
//mapstatetoprops -> state'de o anda ne var ise onu 
//component içerisinde props olarak kullanmamızı sağlayan bir map'leme işlemi...

export default  connect(mapStateToProps)(UserList);
//connect -> store componente bağlamak için kullanılır.