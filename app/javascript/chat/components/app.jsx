import React from 'react';

import MessageList from '../containers/message_list';


class App extends React.Component {
  render() {
    return (
      <div className="messaging-wrapper">

        <MessageList selectedChannel={this.props.match.params.channel} />
      </div>
    );
  }
}

export default App;
