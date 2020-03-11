import React from 'react';
import axios from 'axios';
import config from '../config';
import { Container, Content, FlexboxGrid, Panel, ButtonToolbar, Button, FormGroup, ControlLabel, Form,Alert } from 'rsuite';
import Header from '../components/header/Header';
import { Component } from 'react';
import {Redirect} from  "react-router-dom";
var jwtDecode = require('jwt-decode');

class ChangePassword extends Component {
    constructor(props){
        super(props)
        this.state = {
            oldpassword:'',
            newpassword:''
        }
    }
    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      };
    handleSubmit(event,data) {
        console.log(data)
        axios.put(config.APILink+`UpdatePassword`, { data })
            .then(res => {
                if(res.code === 200){
                    Alert.success(res.message, 5000);
                }else {
                    Alert.warning(res.message,5000);
                }
        })
        .catch((e)=> {
            console.log(e);
        });
        event.preventDefault();
    };
    render() {
        try{
            jwtDecode(localStorage.usertoken)
        }catch(error){
            return <Redirect to='/login'/>;
        }
        return (
            <div className="show-fake-browser box-page profile">
                <Container>
                    <Header/>
                    <Content>
                        <FlexboxGrid justify="center">
                            <FlexboxGrid.Item colspan={12}>
                                <Panel header={<h3>Change Password</h3>} bordered>
                                    <Form onSubmit={this.handleSubmit} id="profileForm" onSubmit={this.handleSubmit}>
                                        <FormGroup>
                                            <ControlLabel>Old Password</ControlLabel>
                                            <input
                                                onChange={this.handleChange}
                                                value={this.state.oldpassword}
                                                name="oldpassword"
                                                id="oldpassword"
                                                type="text"
                                                className="rs-input"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>New Password</ControlLabel>
                                            <input
                                                onChange={this.handleChange}
                                                value={this.state.newpassword}
                                                name="newpassword"
                                                id="newpassword"
                                                type="text"
                                                className="rs-input"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>New Password Repeat</ControlLabel>
                                            <input
                                                onChange={this.handleChange}
                                                value={this.state.newpassword}
                                                name="newpassword"
                                                id="newpassword"
                                                type="text"
                                                className="rs-input"
                                            />
                                        </FormGroup>
                                        <ButtonToolbar>
                                            <Button type="submit" appearance="primary">Update Password</Button>
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

export default ChangePassword;
