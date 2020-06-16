import React, { Component } from "react";
import Emoji from "./Emoji";

class GenerateEmoji extends Component {
  static defaultProps = {
    emojis: [
      "👽",
      "🚀",
      "🖖",
      "🐨",
      "🧚🏻‍♀️",
      "🦁",
      "🦄",
      "🦠",
      "🐢",
      "🦕",
      "🔥",
      "🌈",
      "🔮",
      "🤯",
      "🍭",
      "🧸",
      "🍁",
      "👾",
      "🔫",
      "🐚",
      "📷",
      "🥐",
    ]
   };

   constructor(props) {
    super(props);
    this.state = { emoji: "🔮" };
    this.generate = this.generate.bind(this);
  }

  generate() {
   const newEmoji = this.props.emojis[
     Math.floor(Math.random() * this.props.emojis.length)
   ];
   this.setState({
     emoji: newEmoji
   });
 }

 componentWillMount(){
   this.generate();
 }

 render() {
     return (
     <>
      <span className="GenerateEmoji" role="img" onLoad={this.generate}>{this.state.emoji}</span>
     </>
   );
  }
}

 export default GenerateEmoji;
