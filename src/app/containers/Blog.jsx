import React from 'react';
import Article from '../components/blog/Article';
import BlogSidebar from '../components/blog/BlogSidebar';
import Pagination from '../components/blog/Pagination';
import Breadcrumb from '../components/shared/sections/Beadcrumb';

const Blog = () => {
  return (
    <main id="main">
      <Breadcrumb name="Blog" />

      <section className="blog" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 entries">
              <Article imgURL={require("../../assets/img/blog-post-1.jpg")} blogId="1" title="Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia reiciendis" />
              <Article imgURL={require("../../assets/img/blog-post-2.jpg")} blogId="2" title="Nisi magni odit consequatur autem nulla dolorem." />
              <Article imgURL={require("../../assets/img/blog-post-3.jpg")} blogId="3" title="Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint." />
              <Article imgURL={require("../../assets/img/blog-post-4.jpg")} blogId="4" title="Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem. Veniam eius velit ab ipsa quidem rem." />

              <Pagination />
            </div>

            <div className="col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;