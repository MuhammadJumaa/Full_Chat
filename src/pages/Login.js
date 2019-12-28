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
                                <span className="navbar-brand logo">Full Chat Login</span>
                            </Navbar.Header>
                        </Navbar>
                    </Header>
                    <Content>
                        <FlexboxGrid justify="center">
                            <FlexboxGrid.Item colspan={12}>
                                <Panel header={<h3>Login</h3>} bordered>
                                    <Form fluid>
                                        <FormGroup>
                                            <ControlLabel>Username or email address</ControlLabel>
                                            <FormControl name="name" />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Password</ControlLabel>
                                            <FormControl name="password" type="password" />
                                        </FormGroup>
                                        <FormGroup>
                                            <ButtonToolbar>
                                                <Button appearance="primary">Sign in</Button>
                                                <Button appearance="link">Register</Button>
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
