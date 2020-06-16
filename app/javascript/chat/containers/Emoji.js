import React, { Component } from "react";

class Emoji extends Component {
  render() {
    return (
      <span
        className="Emoji"
        role="img"
      >
        {this.props.emoji}
      </span>
    );
  }
}

export default Emoji;
