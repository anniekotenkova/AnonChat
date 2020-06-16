import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMessages } from '../actions';
import Message from '../components/message';
import MessageForm from '../containers/message_form';
import Countdown from 'react-countdown';
import { CountDown } from './countdown';




class MessageList extends Component {
  UNSAFE_componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);

  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }


  render () {
    return (
      <div className="messagePage">
        <div className="header inMessenger">
          <div className="headerWidget">
            <CountDown minutes={15} />
            <div className="devider"></div>
            <a href="/pages" target="">
              <button type="submit" className="closeButton" href="/pages">Закончить беседу
                <div className="iconButton"></div>
              </button>
            </a>
          </div>
        </div>

        <div className="channelContainer">
          <div className="channelСontent" ref={(list) => { this.list = list; }}>
            {
              this.props.messages.map((message) => {
                return <Message key={message.id} message={message} />;
              })
            }
          </div>
          <MessageForm selectedChannel={this.props.selectedChannel} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
