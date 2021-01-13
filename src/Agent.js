import React, { useState } from "react";
import ChatWithCustomer from "./components/ChatWithCustomer/ChatWithCustomer";

const Agent = () => {
  const [state, setState] = useState({
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
    selectedCustomer: "se",
    chat: [
      { text: "ASDasd", id: "1", receiver: "ME" },
      { text: "asd", id: "2", receiver: "interlocutor" },
    ],
    sendingMessage: "",
    sender: "ME",
    chatIsLoading: false,
    customerIsLoading: false,
  });

  const selectCustomer = (id) => {
    setState((prevState) => ({
      ...prevState,
      selectedCustomer: id,
    }));
    console.log(id);
  };
  const onChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Message text: " + state.sendingMessage);
  };
  return (
    <div>
      <ChatWithCustomer
        selectCustomer={selectCustomer}
        onChange={onChange}
        handleSubmit={handleSubmit}
        state={state}
      />
    </div>
  );
};

export default Agent;
