import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions/index';
import Picker from 'emoji-picker-react';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.state.value);
    this.setState({ value: '' }); // Reset message input
  }




  render() {
    return (

      <div className="MessageInput">
        <div className="emojiPicker">
          {this.state.on &&
            <Picker />}
        </div>
        <div className="formndBtns">
          <form onSubmit={this.handleSubmit}>
            <div className="inputForm">
              <input
                ref={(input) => { this.messageBox = input; }}
                type="text"
                placeholder="Написать сообщение"
                className="formControl"
                autoComplete="off"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
          </form>
          <div className="buttonForm">
            <button onClick={this.toggle} className="emojiButton"></button>
            <button type="submit" className="enterButton" onClick={this.handleSubmit}></button>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

export default connect(null, mapDispatchToProps)(MessageForm);
