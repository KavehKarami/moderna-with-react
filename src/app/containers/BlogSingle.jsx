import React from 'react';
import Breadcrumb from '../components/shared/sections/Beadcrumb';
import BlogSidebar from '../components/blog/BlogSidebar';
import { useParams } from "react-router-dom"
import BlogAuthor from '../components/blogSingle/BlogAuthor';
import BlogSingleArticle from '../components/blogSingle/BlogSingleArticle';
import BlogComment from '../components/blogSingle/BlogComment';

const BlogSingle = () => {
  const { id } = useParams();

  return (
    <main id="main">
      <Breadcrumb isNested={true} name="Blog" id={id} />

      <section className="blog" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 entries">
              <BlogSingleArticle blogId={id} title="Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia reiciendis" />

              <BlogAuthor author="Jane Smith" imgURL={require("../../assets/img/blog-author.jpg")} about="Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas." />

              <BlogComment />
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

export default BlogSingle;