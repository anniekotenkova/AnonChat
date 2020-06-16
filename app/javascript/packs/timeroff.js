import React, { Component } from 'react';
import GenerateEmoji from "../chat/containers/generateemoji";

class Timeoff extends Component {

  render () {
    return (
      <div className="timer">
        <div className="identifyEmoji"><GenerateEmoji /></div>
        <div className="countdown">
          <p className="time">00:00</p>
          <p className="sign">Осталось</p>
        </div>
      </div>
    );
  }
}
export default Timeoff;
