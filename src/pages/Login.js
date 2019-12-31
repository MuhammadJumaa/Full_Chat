import React, { Component } from 'react'
import { Container,Header,Navbar,Content,FlexboxGrid,Panel,Form,FormGroup,ControlLabel,ButtonToolbar,Button,Alert} from 'rsuite';

class Login extends Component {
    state = {
        username : "",
        password : "",
        error:false
    }
    validateForm = () => {
        const {username,password} = this.state;
        if(username === "" || password === ""){
            Alert.error('Please dont leave any space');
            return false;
        }
        return true;
    }
    handleOnChange = (e) => {
        this.setState({
           [e.target.name] : e.target.value
        })
    }
    loginBtn = async (e) => {
        e.preventDefault();
        if(!this.validateForm()){
          this.setState({
            error:true
          });
          return;
        };
        this.props.history.push("/");
    }
    render() {
        const {username,password,error} = this.state;
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
                                    <Form fluid onSubmit={this.loginBtn}>
                                        <FormGroup>
                                            <ControlLabel htmlFor="username">Username</ControlLabel>
                                            <input type="text" onChange={this.handleOnChange} value={username} name="username" id="username" className={error ? "rs-input input-error" : "rs-input"} />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel htmlFor="password">Password</ControlLabel>
                                            <input type="text" onChange={this.handleOnChange} value={password} name="password" id="password" className={error ? "rs-input input-error" : "rs-input"} />
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

export default Login;