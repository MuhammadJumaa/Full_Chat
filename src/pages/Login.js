import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Container, Header, Navbar, Content, FlexboxGrid, Panel, Form, FormGroup, ControlLabel, ButtonToolbar, Button , Alert} from 'rsuite';
import {useHistory,Link} from "react-router-dom";
export default function Login() {
    var history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    //const onSubmit = data => console.log(data);
    const onSubmit = async data => { 
        axios.post(`http://10.25.1.70:5000/api/login`, { data })
            .then(res => {
                console.log(res);
                console.log(res.data);
                Alert.success('Login Successful', 5000);
                history.push('/')
                document.getElementById("registerForm").reset();
        })
        .catch((e)=> {
            console.log(e);
        });
        setTimeout(() => {
            //this.props.history.push("/login");
        }, 3000);
    };
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