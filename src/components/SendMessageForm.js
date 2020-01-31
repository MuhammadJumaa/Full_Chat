import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SendMessageForm extends Component {
    static propTypes = {
        onSubmitMessage: PropTypes.func.isRequired,
    }
    constructor() {
        super()
        this.state = {
            message: '',
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
                    <input
                        className="rs-input"
                        onChange={this.handleChange}
                        value={this.state.message}
                        placeholder="Type A Message @name" />
                    <input type="submit" value={'Send'} />
                </form>
            </div>
        )
    }
}
export default SendMessageForm;