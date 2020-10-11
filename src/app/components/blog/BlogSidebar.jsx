import React from 'react';
import BlogCategory from './BlogCategory';
import BlogTags from './BlogTags';
import PostItem from './PostItem';

const BlogSidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Search</h3>
      <div className="sidebar-item search-form">
        <form action="">
          <input type="text" />
          <button type="submit"><i className="icofont-search"></i></button>
        </form>
      </div>

      <BlogCategory />

      <h3 className="sidebar-title">Recent Posts</h3>
      <div className="sidebar-item recent-posts">
        <PostItem imgURL={require("../../../assets/img/recent-posts-1.jpg")} title="Nihil blanditiis at in nihil autem" time={<time dateTime="2020-01-01">Jan 1, 2020</time>} />
        <PostItem imgURL={require("../../../assets/img/recent-posts-2.jpg")} title="Quidem autem et impedit" time={<time dateTime="2020-01-01">Jan 1, 2020</time>} />
        <PostItem imgURL={require("../../../assets/img/recent-posts-3.jpg")} title="Id quia et et ut maxime similique occaecati ut" time={<time dateTime="2020-01-01">Jan 1, 2020</time>} />
        <PostItem imgURL={require("../../../assets/img/recent-posts-4.jpg")} title="Laborum corporis quo dara net para" time={<time dateTime="2020-01-01">Jan 1, 2020</time>} />
        <PostItem imgURL={require("../../../assets/img/recent-posts-5.jpg")} title="Et dolores corrupti quae illo quod dolor" time={<time dateTime="2020-01-01">Jan 1, 2020</time>} />
      </div>

      <BlogTags />
    </div>
  );
}

export default BlogSidebar;