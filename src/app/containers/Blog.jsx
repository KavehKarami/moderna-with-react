import React from 'react';
import Article from '../components/blog/Article';
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

              <div className="blog-pagination">
                <ul className="justify-content-center">
                  <li className="disabled"><i className="icofont-rounded-left"></i></li>
                  <li><a href="/blog/#">1</a></li>
                  <li className="active"><a href="/blog/#">2</a></li>
                  <li><a href="/blog/#">3</a></li>
                  <li><a href="/blog/#"><i className="icofont-rounded-right"></i></a></li>
                </ul>
              </div>

            </div>

            <div className="col-lg-4">
              <div className="sidebar">

                <h3 className="sidebar-title">Search</h3>
                <div className="sidebar-item search-form">
                  <form action="">
                    <input type="text" />
                    <button type="submit"><i className="icofont-search"></i></button>
                  </form>
                </div>

                <h3 className="sidebar-title">Categories</h3>
                <div className="sidebar-item categories">
                  <ul>
                    <li><a href="/blog/#">General <span>(25)</span></a></li>
                    <li><a href="/blog/#">Lifestyle <span>(12)</span></a></li>
                    <li><a href="/blog/#">Travel <span>(5)</span></a></li>
                    <li><a href="/blog/#">Design <span>(22)</span></a></li>
                    <li><a href="/blog/#">Creative <span>(8)</span></a></li>
                    <li><a href="/blog/#">Educaion <span>(14)</span></a></li>
                  </ul>

                </div>

                <h3 className="sidebar-title">Recent Posts</h3>
                <div className="sidebar-item recent-posts">
                  <div className="post-item clearfix">
                    <img src={require("../../assets/img/recent-posts-1.jpg")} alt="" />
                    <h4><a href="blog-single.html">Nihil blanditiis at in nihil autem</a></h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>

                  <div className="post-item clearfix">
                    <img src={require("../../assets/img/recent-posts-2.jpg")} alt="" />
                    <h4><a href="blog-single.html">Quidem autem et impedit</a></h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>

                  <div className="post-item clearfix">
                    <img src={require("../../assets/img/recent-posts-3.jpg")} alt="" />
                    <h4><a href="blog-single.html">Id quia et et ut maxime similique occaecati ut</a></h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>

                  <div className="post-item clearfix">
                    <img src={require("../../assets/img/recent-posts-4.jpg")} alt="" />
                    <h4><a href="blog-single.html">Laborum corporis quo dara net para</a></h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>

                  <div className="post-item clearfix">
                    <img src={require("../../assets/img/recent-posts-5.jpg")} alt="" />
                    <h4><a href="blog-single.html">Et dolores corrupti quae illo quod dolor</a></h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>
                </div>

                <h3 className="sidebar-title">Tags</h3>
                <div className="sidebar-item tags">
                  <ul>
                    <li><a href="/blog/#">App</a></li>
                    <li><a href="/blog/#">IT</a></li>
                    <li><a href="/blog/#">Business</a></li>
                    <li><a href="/blog/#">Business</a></li>
                    <li><a href="/blog/#">Mac</a></li>
                    <li><a href="/blog/#">Design</a></li>
                    <li><a href="/blog/#">Office</a></li>
                    <li><a href="/blog/#">Creative</a></li>
                    <li><a href="/blog/#">Studio</a></li>
                    <li><a href="/blog/#">Smart</a></li>
                    <li><a href="/blog/#">Tips</a></li>
                    <li><a href="/blog/#">Marketing</a></li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;