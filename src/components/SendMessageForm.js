import React, { Component } from 'react'
import { Button } from 'rsuite';

class SendMessageForm extends Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.message);
    }
    render() {
        console.log(this.state.message);
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
                    <Button color="blue">Submit</Button>
                </form>
            </div>
        )
    }
}
export default SendMessageForm;