import React, { Component } from "react";

import MDSpinner from "react-md-spinner";
import config from "./config";

const agentUID = config.agentUID;

class Agent extends Component {
  state = {
    customers: [
      {
        id: "se",
        name: "I",
      },
      {
        id: "asdflkjadsfladsfj",
        name: "ME",
      },
    ],
    selectedCustomer: "",
    chat: [
      { text: "ASDasd", id: "1", receiver: "ME" },
      { text: "ASDasd", id: "2", receiver: "interlocutor" },
    ],
    chatIsLoading: false,
    customerIsLoading: false,
  };

  componentDidMount() {}

  handleSubmit = (event) => {
    event.preventDefault();
    let message = this.refs.message.value;
    console.log("Message text:" + message);
    this.refs.message.value = "";
  };

  componentWillUnmount() {}

  selectCustomer = (id) => {
    this.setState(
      {
        selectedCustomer: id,
      },
      () => {
        console.log("User id:" + id);
      }
    );
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 h-100pr border rounded">
            <div className="row">
              <div
                className="col-lg-4 col-xs-12 bg-light"
                style={{ height: 658 }}
              >
                <div className="row p-3">
                  <h2>Customer List</h2>
                </div>
                <div
                  className="row ml-0 mr-0 h-75 bg-white border rounded"
                  style={{ height: "100%", overflow: "auto" }}
                >
                  <CustomerList
                    {...this.state}
                    selectCustomer={this.selectCustomer}
                  />
                </div>
              </div>
              <div
                className="col-lg-8 col-xs-12 bg-light"
                style={{ height: 658 }}
              >
                <div className="row p-3 bg-white">
                  <h2>Who you gonna chat with?</h2>
                </div>
                <div
                  className="row pt-5 bg-white"
                  style={{ height: 530, overflow: "auto" }}
                >
                  <ChatBox {...this.state} />
                </div>
                <div
                  className="row bg-light"
                  style={{ bottom: 0, width: "100%" }}
                >
                  <form
                    className="row m-0 p-0 w-100"
                    onSubmit={this.handleSubmit}
                  >
                    <div className="col-9 m-0 p-1">
                      <input
                        id="text"
                        className="mw-100 border rounded form-control"
                        type="text"
                        name="text"
                        ref="message"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="col-3 m-0 p-1">
                      <button
                        className="btn btn-outline-secondary rounded border w-100"
                        title="Send"
                        style={{ paddingRight: 16 }}
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ChatBox extends Component {
  render() {
    const { chat, chatIsLoading } = this.props;
    if (chatIsLoading) {
      return (
        <div className="col-xl-12 my-auto text-center">
          <MDSpinner size="72" />
        </div>
      );
    } else {
      return (
        <div className="col-xl-12">
          {chat.map((message) => (
            <div key={message.id} className="message">
              <div
                className={`${
                  message.receiver !== agentUID ? "balon1" : "balon2"
                } p-3 m-1`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}

class CustomerList extends Component {
  render() {
    const { customers, customerIsLoading, selectedCustomer } = this.props;
    if (customerIsLoading) {
      return (
        <div className="col-xl-12 my-auto text-center">
          <MDSpinner size="72" />
        </div>
      );
    } else {
      return (
        <ul className="list-group list-group-flush w-100">
          {customers.map((customer) => (
            <li
              key={customer.id}
              className={`list-group-item ${
                customer.id === selectedCustomer ? "active" : ""
              }`}
              onClick={() => this.props.selectCustomer(customer.id)}
            >
              {customer.name}{" "}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Agent;
