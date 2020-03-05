import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import config from '../config';
import { Container, Header, Navbar, Content, FlexboxGrid, Panel, ButtonToolbar, Button, FormGroup, ControlLabel, Form,Alert } from 'rsuite';
import { Component } from 'react';
var jwtDecode = require('jwt-decode');

class Profile extends Component {
    constructor(){
        super()
        this.state = {
            data: jwtDecode(localStorage.usertoken)
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const target = event.target
        this.setState({
            data:
            {
                ...this.state.data,
                [target.name]: target.value
            }
        });     
    }
    handleSubmit(event) {
        const data = this.state.data
        var reqconfig = {
            headers: { Authorization: localStorage.usertoken },
            ...data
        };
        axios.put(config.APILink+`UpdateUser`, reqconfig)
            .then(res => {
                Alert.success('Update Successful', 5000);
                localStorage.setItem('usertoken', res.data.token)
        })
        .catch((e)=> {
            console.log(e);
        });
        event.preventDefault();
    }
    render() {
        const userData = this.state.data
        return (
            <div className="show-fake-browser box-page profile">
                <Container>
                    <Header>
                        <Navbar appearance="inverse">
                            <Navbar.Header>
                                <Link className="navbar-brand logo" to="/Chat">Chat</Link>
                            </Navbar.Header>
                        </Navbar>
                    </Header>
                    <Content>
                        <FlexboxGrid justify="center">
                            <FlexboxGrid.Item colspan={12}>
                                <Panel header={<h3>Profile</h3>} bordered>
                                    <Form id="profileForm" onSubmit={this.handleSubmit}>
                                        <FormGroup>
                                            <ControlLabel>Name</ControlLabel>
                                            <input
                                                name="name"
                                                id="name"
                                                value={userData.name}
                                                onChange={this.handleChange} 
                                                type="text"
                                                className="rs-input"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Last Name</ControlLabel>
                                            <input
                                                value={userData.lastname}
                                                onChange={this.handleChange}
                                                name="lastname"
                                                id="lastname"
                                                type="text"
                                                className="rs-input"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>User Name</ControlLabel>
                                            <input
                                                value={userData.username}
                                                onChange={this.handleChange}
                                                name="username"
                                                id="username"
                                                type="text"
                                                className="rs-input"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Email Adress</ControlLabel>
                                            <input
                                                value={userData.email}
                                                onChange={this.handleChange}
                                                name="email"
                                                id="email"
                                                type="text"
                                                className="rs-input"
                                            />
                                        </FormGroup>
                                        <ButtonToolbar>
                                            <Button type="submit" appearance="primary">Update Profile</Button>
                                        </ButtonToolbar>
                                    </Form>
                                </Panel>
                            </FlexboxGrid.Item>
                        </FlexboxGrid>
                    </Content>
                </Container>
            </div>
        );
    }
}

export default Profile;
