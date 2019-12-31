import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Header, Navbar, Content, FlexboxGrid, Panel, ButtonToolbar, Button , FormGroup , ControlLabel , Form} from 'rsuite';

export default function Register() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
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
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <FormGroup>
                                        <ControlLabel>Name</ControlLabel>
                                        <input
                                            name="name"
                                            id="name"
                                            type="text"
                                            className={errors.name ? "rs-input input-error" : "rs-input"}
                                            ref={register({
                                                required: 'Required',
                                            })}
                                        />
                                        {errors.name && errors.name.message}
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Last Name</ControlLabel>
                                        <input
                                            name="lastname"
                                            id="lastname"
                                            type="text"
                                            className={errors.lastname ? "rs-input input-error" : "rs-input"}
                                            ref={register({
                                                required: 'Required',
                                            })}
                                        />
                                        {errors.lastname && errors.lastname.message}
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>User Name</ControlLabel>
                                        <input
                                            name="username"
                                            id="username"
                                            type="text"
                                            className={errors.username ? "rs-input input-error" : "rs-input"}
                                            ref={register({
                                                required: 'Required',
                                            })}
                                        />
                                        {errors.username && errors.username.message}
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Email Adress</ControlLabel>
                                        <input
                                            name="email"
                                            id="email"
                                            type="text"
                                            className={errors.email ? "rs-input input-error" : "rs-input"}
                                            ref={register({
                                                required: 'Required',
                                            })}
                                        />
                                        {errors.email && errors.email.message}
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Password</ControlLabel>
                                        <input
                                            name="password"
                                            id="password"
                                            type="password"
                                            className={errors.password ? "rs-input input-error" : "rs-input"}
                                            ref={register({
                                                required: 'Required',
                                            })}
                                        />
                                        {errors.password && errors.password.message}
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Repeat Password</ControlLabel>
                                        <input
                                            name="repeatpassword"
                                            id="repeatpassword"
                                            type="password"
                                            className={errors.repeatpassword ? "rs-input input-error" : "rs-input"}
                                            ref={register({
                                                required: 'Required',
                                            })}
                                        />
                                        {errors.repeatpassword && errors.repeatpassword.message}
                                    </FormGroup>
                                    <ButtonToolbar>
                                        <Button type="submit" appearance="primary">Submit</Button>
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