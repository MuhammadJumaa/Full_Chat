import React, { Component } from 'react'
import { Button } from 'rsuite'
import {connect} from 'react-redux'
import {fetchSendMessage} from '../actions/rootActions';

class SendMessageForm extends Component {
    constructor() {
        super()
        this.state = {
            disabled: true,
            message:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            message: e.target.value,
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const {friendId} = this.props;
        this.props.dispatch(fetchSendMessage(this.state.message,friendId))
        this.setState({ 
            message: '',
        });
    }
    render() {
        const { inputState} = this.props;
        return (
            <div className="bottom">
                <form
                    onSubmit={this.handleSubmit}
                    className="send-message-form">
                    <input disabled={inputState}
                        className="rs-input"
                        onChange={this.handleChange}
                        value={this.state.message}
                        placeholder="Type A Message @name" />
                    <Button disabled={!this.state.message} type="submit" value={'Send'} color="blue">Send</Button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    inputState:state.app.inputState,
    message:state.app.message,
    friendId:state.app.friendId,
    currentConversationMessages: state.app.currentConversationMessages
});
export default connect(mapStateToProps)(SendMessageForm);