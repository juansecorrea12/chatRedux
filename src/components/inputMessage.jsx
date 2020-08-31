import React from "react";
import store from "../redux /store";
import { sendMessage, setInputValue } from "../redux /containerMessage/actions";

export default function InputMessage() {
  return (
    <div className="input_msg_write">
      <input
        type="text"
        className="write_msg"
        placeholder="Type a message"
        onChange={(event) => store.dispatch(setInputValue(event.target.value))}
      />
      <button
        className="msg_send_btn"
        type="button"
        onClick={() => store.dispatch(sendMessage())}
      >
        <i className="fas fa-paper-plane"></i>
      </button>
    </div>
  );
}
