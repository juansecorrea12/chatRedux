import React from "react";
//import sendMessage from "../redux /containerMessage/actions";
import moment from "moment";
import store from "../redux /store";
import { showOptions } from "../redux /containerMessage/actions";

export default function Message(props) {
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
              onClick={() => store.dispatch(showOptions(props.message.id))}
            >
              <i className="fas fa-ellipsis-h"></i>
            </small>
          </div>
          <span>
            {moment(props.message.date).format("hh:mm A | dd DD MMM")}
          </span>
        </div>
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
