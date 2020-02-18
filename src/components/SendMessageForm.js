import React, { Component } from 'react'
import { Button } from 'rsuite';
import PropTypes from 'prop-types'

class SendMessageForm extends Component {
    static propTypes = {
        onSubmitMessage: PropTypes.func.isRequired,
    }
    constructor() {
        super()
        this.state = {
            message: '',
            disabled: true
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
        this.props.onSubmitMessage(this.state.message)
        this.setState({ message: '' });
        console.log(this.state.message);
    }
    render() {
        return (
            <div className="bottom">
                <form
                    onSubmit={this.handleSubmit}
                    className="send-message-form">
                    <input disabled={this.state.disabled}
                        className="rs-input"
                        onChange={this.handleChange}
                        value={this.state.message}
                        placeholder="Type A Message @name" />
                    <Button disabled={this.state.disabled} type="submit" value={'Send'} color="blue">Send</Button>
                </form>
            </div>
        )
    }
}
export default SendMessageForm;