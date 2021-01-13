import React, { Component } from "react";
import {
  Widget,
  addResponseMessage,
  addUserMessage,
  dropMessages,
} from "react-chat-widget";

import "react-chat-widget/lib/styles.css";

class Client extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to our store!");
    addResponseMessage("Are you looking for anything in particular?");
  }

  handleNewUserMessage = (newMessage) => {
    dropMessages();
    console.log(`New message incoming! ${newMessage}`);
    addUserMessage(newMessage);
  };

  componentWillUnmount() {}

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          title="My E-commerce Live Chat"
          subtitle="Ready to help you"
        />
      </div>
    );
  }
}

export default Client;
