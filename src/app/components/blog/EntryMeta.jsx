import React from 'react';

const EntryMeta = (props) => {
  return (
    <div className="entry-meta">
      <ul>
        {props.children}
      </ul>
    </div>
  );
}

export default EntryMeta;