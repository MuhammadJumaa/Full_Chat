import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Container, Header, Navbar, Content, FlexboxGrid, Panel, Form, FormGroup, ControlLabel, ButtonToolbar, Button , Alert} from 'rsuite';
import {useHistory,Link,Redirect} from "react-router-dom";
import config from '../config'
export default function Login() {
    var history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    //const onSubmit = data => console.log(data);
    const onSubmit = async data => { 
        axios.post(config.APILink+`login`, { data })
            .then(res => {
                if(res.data.code===200){
                    Alert.success('Login Successful', 5000);
                    localStorage.setItem('usertoken', res.data.token)
                    history.push('/')
                }
        })
        .catch((e)=> {
            console.log(e);
        });
        setTimeout(() => {
            //this.props.history.push("/login");
        }, 3000);
    };  
    if (localStorage.usertoken) {
        return <Redirect to='/'/>;
      }
    return (
        <div className="show-fake-browser login-page">
            <Container>
                <Header>
                    <Navbar appearance="inverse">
                        <Navbar.Header>
                            <span className="navbar-brand logo">Full Chat Login</span>
                        </Navbar.Header>
                    </Navbar>
                </Header>
                <Content>
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item colspan={12}>
                            <Panel header={<h3>Login</h3>} bordered>
                            <Form onSubmit={handleSubmit(onSubmit)} id="registerForm">
                                    <FormGroup>
                                        <ControlLabel htmlFor="username">Username</ControlLabel>
                                        <input
                                            name="username"
                                            id="username"
                                            type="text"
                                            className={errors.username ? "rs-input input-error" : "rs-input"}
                                            ref={register({
                                                required: 'Username Required',
                                            })}
                                        />
                                        <span className="errorMessage">{errors.username && errors.username.message}</span>
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel htmlFor="password">Password</ControlLabel>
                                        <input
                                            name="password"
                                            id="password"
                                            type="text"
                                            className={errors.password ? "rs-input input-error" : "rs-input"}
                                            ref={register({
                                                required: 'Password Required',
                                            })}
                                        />
                                        <span className="errorMessage">{errors.password && errors.password.message}</span>
                                    </FormGroup>
                                    <FormGroup>
                                        <ButtonToolbar>
                                            <Button type="submit" appearance="primary" >Sign in</Button>
                                            <Link  to="/Register" appearance="link">Register</Link>
                                        </ButtonToolbar>
                                    </FormGroup>
                                </Form>
                            </Panel>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Content>
            </Container>
        </div>
    );
}