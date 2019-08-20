import React from "react";

const Message = ({ message, color, size, title }) => {
  return (
    <div className="columns">
      <div className="column" />
      <div className="column is-three-fifths">
        <article className={`message ${color} ${size} is-text-center`}>
          {title && (
            <div className="message-header">
              <p>{title}</p>
              <button className={`delete ${size}`} aria-label="delete" />
            </div>
          )}
          <div className="message-body">{message}</div>
        </article>
      </div>
      <div className="column" />
    </div>
  );
};

Notification.defaultProps = {
  message: "",
  color: "",
  size: "",
  title: ""
};

export default Message;
