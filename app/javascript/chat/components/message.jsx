import React from 'react';
import { emojify } from 'react-emojione';
import Utils from './utils';

class Message extends React.Component {

  strToRGB = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i += 1) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const c = (hash & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();
    return `#${"00000".substring(0, 6 - c.length)}${c}`;
  }

  render(){
    const DATE_OPTIONS = { weekday: 'short', month: 'short', day: 'numeric' };
    const time = new Date(this.props.message.created_at).toLocaleDateString('en-US', DATE_OPTIONS);
    const date = Utils.getShortDate(this.props.message.created_at);


    const messageFromMe = 1 == this.props.message.user_id
    this.props.message.user_id = messageFromMe
    const className = messageFromMe ?
    "messageBox currentMember" : "messageBox";
    

    return(
        <div className={className}>
          <div className="messageContainer">
            <p>{emojify(this.props.message.content)}</p>
          </div>
          <div className="messageTime">{date}</div>
        </div>
    );
  }
}

export default Message;
