import React from 'react';

function Message(props) {
  return (
    <div className="alert alert-primary" role="alert">
      {props.message}
    </div>
  )
}

export default Message;