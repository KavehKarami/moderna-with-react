import React from 'react';

const Loading = () => {
  return (
    <div className="mb-3">
      <div className="loading">Loading</div>
      <div className="error-message"></div>
      <div className="sent-message">Your message has been sent. Thank you!</div>
    </div>
  );
}

export default Loading;