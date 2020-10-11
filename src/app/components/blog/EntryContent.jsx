import React from 'react';
import ReadMore from './ReadMore';

const EntryContent = (props) => {
  return (
    <div className="entry-content">
      {props.children}
      <ReadMore blogId={props.blogId} />
    </div>
  );
}

export default EntryContent;