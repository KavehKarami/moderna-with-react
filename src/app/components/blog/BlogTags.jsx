import React from 'react';

const BlogTags = () => {
  const tags = ["App", "IT", "Business", "Mac", "Linux", "Design", "Office", "Creative", "Studio", "Smart", "Tips", "Marketing"]
  return (
    <React.Fragment>
      <h3 className="sidebar-title">Tags</h3>
      <div className="sidebar-item tags">
        <ul>
          {tags.map(tag => <li><a href="/blog/#">{tag}</a></li>)}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default BlogTags;