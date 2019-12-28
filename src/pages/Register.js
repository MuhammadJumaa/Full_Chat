import React, { Component } from 'react'
import { Container,Header,Navbar,Content,FlexboxGrid,Panel,Form,FormGroup,ControlLabel,FormControl,ButtonToolbar,Button} from 'rsuite';

export default class MessageList extends Component {
    render() {
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
                                    <Form fluid>
                                        <FormGroup>
                                            <ControlLabel>Name</ControlLabel>
                                            <FormControl name="name" />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Last Name</ControlLabel>
                                            <FormControl name="name" />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Username</ControlLabel>
                                            <FormControl name="name" />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Email Address</ControlLabel>
                                            <FormControl name="name" />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Password</ControlLabel>
                                            <FormControl name="password" type="password" />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Repeat Password</ControlLabel>
                                            <FormControl name="password" type="password" />
                                        </FormGroup>
                                        <FormGroup>
                                            <ButtonToolbar>
                                                <Button appearance="primary">Register</Button>
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
