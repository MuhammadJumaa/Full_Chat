import React from 'react';
import { useForm } from 'react-hook-form';
import {Link} from "react-router-dom";
import { Container, Header, Navbar, Content, FlexboxGrid, Panel, ButtonToolbar, Button , FormGroup , ControlLabel , Form , Alert} from 'rsuite';

export default function Register() {
    const { register, handleSubmit, errors ,watch } = useForm();
    //const onSubmit = data => console.log(data);
    const onSubmit = async data => { 
        console.log(data);
        Alert.success('Registration Successful', 5000);
        document.getElementById("registerForm").reset();
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
                            <span className="navbar-brand logo">Full Chat Register</span>
                        </Navbar.Header>
                    </Navbar>
                </Header>
                <Content>
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item colspan={12}>
                            <Panel header={<h3>Register</h3>} bordered>
                                <Form onSubmit={handleSubmit(onSubmit)} id="registerForm">
                                    <FormGroup>
                                        <ControlLabel>Name</ControlLabel>
                                        <input
                                            name="name"
                                            id="name"
                                            type="text"
                                            className={errors.name ? "rs-input input-error" : "rs-input"}
                                            ref={register({
                                                required: 'Name Required',
                                            })}
                                        />
                                        <span className="errorMessage">{errors.name && errors.name.message}</span>
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Last Name</ControlLabel>
                                        <input
                                            name="lastname"
                                            id="lastname"
                                            type="text"
                                            className={errors.lastname ? "rs-input input-error" : "rs-input"}
                                            ref={register({
                                                required: 'Lastname Required',
                                            })}
                                        />
                                        <span className="errorMessage">{errors.lastname && errors.lastname.message}</span>
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>User Name</ControlLabel>
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
                                        <ControlLabel>Email Adress</ControlLabel>
                                        <input
                                            name="email"
                                            id="email"
                                            type="text"
                                            className={errors.email ? "rs-input input-error" : "rs-input"}
                                            ref={register({
                                                required: 'Email Required',
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                    message: "Invalid Email Address"
                                                }
                                            })}
                                        />
                                        <span className="errorMessage">{errors.email && errors.email.message}</span>
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Password</ControlLabel>
                                        <input
                                            name="password"
                                            id="password"
                                            type="password"
                                            className={errors.password ? "rs-input input-error" : "rs-input"}
                                            ref={register({
                                                required: 'Password Required',
                                                minLength:8
                                            })}
                                        />
                                        <span className="errorMessage">{errors.password && errors.password.message}</span>
                                        <span className="errorMessage">{errors.password && errors.password.type === 'minLength' && <span>must be at least 8 characters</span>}</span>
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Repeat Password</ControlLabel>
                                        <input
                                            name="repeatpassword"
                                            id="repeatpassword"
                                            type="password"
                                            className={errors.repeatpassword ? "rs-input input-error" : "rs-input"}
                                            ref={register({
                                                required: 'Repeat Required',
                                                minLength:8,
                                                validate: (value) => {
                                                    return value === watch('password'); 
                                                }
                                            })}
                                        />
                                        <span className="errorMessage">{errors.repeatpassword && errors.repeatpassword.message}</span>
                                        <span className="errorMessage">{errors.repeatpassword && errors.repeatpassword.type === 'minLength' && <span>must be at least 8 characters</span>}</span>
                                    </FormGroup>
                                    <ButtonToolbar>
                                        <Button type="submit" appearance="primary">Submit</Button>
                                        <Link  to="/Login" appearance="link">Login</Link>
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