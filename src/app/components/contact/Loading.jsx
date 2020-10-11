import React from 'react';

const Loading = () => {
  return (
    <div class="mb-3">
      <div class="loading">Loading</div>
      <div class="error-message"></div>
      <div class="sent-message">Your message has been sent. Thank you!</div>
    </div>
  );
}

export default Loading;