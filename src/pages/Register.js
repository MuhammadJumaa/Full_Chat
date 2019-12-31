import React, { Component } from 'react'
import { Alert, Container, Header, Navbar, Content, FlexboxGrid, Panel, Form, FormGroup, ControlLabel, ButtonToolbar, Button } from 'rsuite';

class Register extends Component {
    state = {   
        name: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        repeatpassword: "",
        error: false
    }
    validateForm = () => {
        const { name, lastname, username, email, password, repeatpassword } = this.state;
        if (name === "" || lastname === "" || username === "" || email === "" || password === "" || repeatpassword === "") {
            Alert.error('Please dont leave any space');
            return false;

        }
        return true;
    }
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        return;
    }
    handleOnBlur = (e) => {
        if (!this.validateForm()) {
            this.setState({
                error: true
            });
        }else {
            this.setState({
                error: false
            });
        }
    }
    registerBtn = async (e) => {
        e.preventDefault();
        if (!this.validateForm()) {
            this.setState({
                error: true
            });
        } else {
            this.setState({
                error:false
            });
        }
    }
    render() {
        const { name, lastname, username, email, password, repeatpassword, error } = this.state;
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
                                    <Form fluid onSubmit={this.registerBtn}>
                                        <FormGroup>
                                            <ControlLabel htmlFor="name">Name</ControlLabel>
                                            <input
                                                value={name}
                                                onChange={this.handleOnChange}
                                                onBlur={this.handleOnBlur}
                                                className={error ? "rs-input input-error" : "rs-input"}
                                                type="text"
                                                name="name"
                                                id="name"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Last Name</ControlLabel>
                                            <input
                                                value={lastname}
                                                onChange={this.handleOnChange}
                                                onBlur={this.handleOnBlur}
                                                className={error ? "rs-input input-error" : "rs-input"}
                                                type="text"
                                                name="lastname"
                                                id="lastname"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Username</ControlLabel>
                                            <input
                                                value={username}
                                                onChange={this.handleOnChange}
                                                onBlur={this.handleOnBlur}
                                                className={error ? "rs-input input-error" : "rs-input"}
                                                type="text"
                                                name="username"
                                                id="username"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Email Address</ControlLabel>
                                            <input
                                                value={email}
                                                onChange={this.handleOnChange}
                                                onBlur={this.handleOnBlur}
                                                className={error ? "rs-input input-error" : "rs-input"}
                                                type="text"
                                                name="email"
                                                id="email"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Password</ControlLabel>
                                            <input
                                                value={password}
                                                onChange={this.handleOnChange}
                                                onBlur={this.handleOnBlur}
                                                className={error ? "rs-input input-error" : "rs-input"}
                                                type="password"
                                                name="password"
                                                id="password"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Repeat Password</ControlLabel>
                                            <input
                                                value={repeatpassword}
                                                onChange={this.handleOnChange}
                                                onBlur={this.handleOnBlur}
                                                className={error ? "rs-input input-error" : "rs-input"}
                                                type="password"
                                                name="repeatpassword"
                                                id="repeatpassword"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <ButtonToolbar>
                                                <Button type="submit" appearance="primary">Register</Button>
                                            </ButtonToolbar>
                                        </FormGroup>
                                    </Form>
                                </Panel>
                            </FlexboxGrid.Item>
                        </FlexboxGrid>
                    </Content>
                </Container>
            </div>
        )
    }
}

export default Register;
