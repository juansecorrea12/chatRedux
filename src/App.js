import React from "react";
import "./App.css";
import ContainerMessage from "./components/containermessage.jsx";
import store from "./redux /store";
import Message from "./components/message";
import InputMessage from "./components/inputMessage.jsx";
function App() {
  const { messageReducer } = store.getState();
  const messages = messageReducer.messages;
  return (
    <div className="App">
      <h1>Mensajes bidireccionales</h1>
      <ContainerMessage>
        <div>
          {messages.map((message, index) => {
            return <Message key={index} message={message} />;
          })}
        </div>
        <div className="type_msg">
          <InputMessage />
        </div>
      </ContainerMessage>
    </div>
  );
}

export default App;
