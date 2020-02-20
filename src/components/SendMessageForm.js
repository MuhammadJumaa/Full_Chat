import React, { Component } from 'react'
import { Button } from 'rsuite'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchSendMessage} from '../actions/rootActions';


class SendMessageForm extends Component {
    static propTypes = {
        onSubmitMessage: PropTypes.func.isRequired,
    }
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
            message: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.dispatch(fetchSendMessage(this.state.message))
        this.setState({ message: '' });
    }
    render() {
        const { inputState } = this.props;
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
                    <Button disabled={inputState} type="submit" value={'Send'} color="blue">Send</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    inputState:state.app.inputState,
    message:state.app.message
});
export default connect(mapStateToProps)(SendMessageForm);