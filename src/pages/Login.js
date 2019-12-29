import React, { Component } from 'react'
import { Container,Header,Navbar,Content,FlexboxGrid,Panel,Form,FormGroup,ControlLabel,FormControl,ButtonToolbar,Button,Alert} from 'rsuite';

export default class MessageList extends Component {
    state = {
        username : "",
        password : "",
        error:false
    }
    validateForm = () => {
        const {username,password} = this.state;
        if(username === "" || password === ""){
            Alert.error('This is an error message.')
            return false;
        }
        return true;
    }
    login = async (e) => {
        e.preventDefault();
        console.log("login");
        if(!this.validateForm()){
          this.setState({
            error:true
          });
          return;
        };
    }
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
                                    <Form fluid onSubmit={this.login}>
                                        <FormGroup>
                                            <ControlLabel htmlFor="username">Username</ControlLabel>
                                            <FormControl onChange={this.changeInput}  name="username" id="username" type="text" />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel htmlFor="password">Password</ControlLabel>
                                            <FormControl  onChange={this.changeInput} name="password" id="password" type="password" />
                                        </FormGroup>
                                        <FormGroup>
                                            <ButtonToolbar>
                                                <Button type="submit" appearance="primary" >Sign in</Button>
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
