import React from 'react';
import { Redirect , useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import config from '../config';
import { Container, Content, FlexboxGrid, Panel, ButtonToolbar, Button, FormGroup, ControlLabel, Form, Alert } from 'rsuite';
import Header from '../components/header/Header';
var jwtDecode = require('jwt-decode');

export default function ChangePassword() {
    const { register, handleSubmit, errors, watch } = useForm();
    const history = useHistory();
    const onSubmit = async data => {
        console.log(data)
        var reqconfig = {
            headers: { Authorization: localStorage.usertoken },
            ...data
        };
        axios.put(config.APILink + `UpdatePassword`,  reqconfig )
            .then(res => {
                if (res.data.code === 200) {
                    Alert.success(res.data.success, 5000);
                    history.push('/')
                } else {
                    console.log(res)
                    Alert.warning(res.data.error, 5000);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };
    try {
        jwtDecode(localStorage.usertoken)
    } catch (error) {
        return <Redirect to='/login' />;
    }
    return (
        <div className="show-fake-browser box-page profile">
            <Container>
                <Header />
                <Content>
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item colspan={12}>
                            <Panel header={<h3>Change Password</h3>} bordered>
                                <Form onSubmit={handleSubmit(onSubmit)} id="registerForm">
                                    <FormGroup>
                                        <ControlLabel>Old Password</ControlLabel>
                                        <input
                                            name="Password"
                                            id="Password"
                                            type="password"
                                            className={errors.Password ? "rs-input input-error" : "rs-input"}
                                            ref={register({
                                                required: 'Old Password Required',
                                                minLength: 8
                                            })}
                                        />
                                        <span className="errorMessage">{errors.Password && errors.Password.message}</span>
                                        <span className="errorMessage">{errors.Password && errors.Password.type === 'minLength' && <span>must be at least 8 characters</span>}</span>
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>New Password</ControlLabel>
                                        <input
                                            name="NewPassword"
                                            id="NewPassword"
                                            type="password"
                                            className={errors.NewPassword ? "rs-input input-error" : "rs-input"}
                                            ref={register({
                                                required: 'Password Required',
                                                minLength: 8
                                            })}
                                        />
                                        <span className="errorMessage">{errors.NewPassword && errors.NewPassword.message}</span>
                                        <span className="errorMessage">{errors.NewPassword && errors.NewPassword.type === 'minLength' && <span>must be at least 8 characters</span>}</span>
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
                                                minLength: 8,
                                                validate: (value) => {
                                                    return value === watch('NewPassword');
                                                }
                                            })}
                                        />
                                        <span className="errorMessage">{errors.repeatpassword && errors.repeatpassword.message}</span>
                                        <span className="errorMessage">{errors.repeatpassword && errors.repeatpassword.type === 'minLength' && <span>must be at least 8 characters</span>}</span>
                                    </FormGroup>
                                    <ButtonToolbar>
                                        <Button type="submit" appearance="primary">Change Password</Button>
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
