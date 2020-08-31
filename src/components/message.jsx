import React from "react";
//import sendMessage from "../redux /containerMessage/actions";
import moment from "moment";
import { useState } from "react";
import store from "../redux /store";
import { deleteMessage } from "../redux /containerMessage/actions";

export default function Message(props) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="message">
      <div className="incomming-message">
        <div className="avatar">
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="Profile"
          />
        </div>
        <div className="message-info">
          <div className="content-space">
            <p>{props.message.content}</p>
            <small
              onClick={() => setShowOptions((props.message.showOptions = true))}
            >
              <i className="fas fa-ellipsis-h"></i>
            </small>
          </div>
          <span>
            {moment(props.message.date).format("hh:mm A | dd DD MMM")}
          </span>
        </div>
        {showOptions ? (
          <div className="options">
            <ul>
              <li
                onClick={() => store.dispatch(deleteMessage(props.message.id))}
              >
                Borrar mensaje
              </li>
            </ul>
          </div>
        ) : null}
      </div>
      {/* <div className="outgoing-message">
        <div className="message-info-bot">
          <p>{props.message.content}</p>
          <span>
            {moment(props.message.date).format("hh:mm A | dd DD MMM")}
          </span>
        </div>
      </div> */}
    </div>
  );
}
