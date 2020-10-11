import React from 'react';
import Breadcrumb from '../components/shared/sections/Beadcrumb';
import BlogSidebar from '../components/blog/BlogSidebar';
import { useParams } from "react-router-dom"
import BlogAuthor from '../components/blogSingle/BlogAuthor';
import BlogSingleArticle from '../components/blogSingle/BlogSingleArticle';

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

              <div className="blog-comments">

                <h4 className="comments-count">8 Comments</h4>

                <div id="comment-1" className="comment clearfix">
                  <img src={require("../../assets/img/comments-1.jpg")} className="comment-img  float-left" alt="" />
                  <h5><a href="/blog/#">Georgia Reader</a> <a href="/blog/#" className="reply"><i className="icofont-reply"></i> Reply</a></h5>
                  <time dateTime="2020-01-01">01 Jan, 2020</time>
                  <p>
                    Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae
                    est qui cum soluta.
                    Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et.
                </p>
                </div>

                <div id="comment-2" className="comment clearfix">
                  <img src={require("../../assets/img/comments-2.jpg")} className="comment-img  float-left" alt="" />
                  <h5><a href="/blog/#">Aron Alvarado</a> <a href="/blog/#" className="reply"><i className="icofont-reply"></i> Reply</a></h5>
                  <time dateTime="2020-01-01">01 Jan, 2020</time>
                  <p>
                    Ipsam tempora sequi voluptatem quis sapiente non. Autem itaque eveniet saepe. Officiis illo ut beatae.
                </p>

                  <div id="comment-reply-1" className="comment comment-reply clearfix">
                    <img src={require("../../assets/img/comments-3.jpg")} className="comment-img  float-left" alt="" />
                    <h5><a href="/blog/#">Lynda Small</a> <a href="/blog/#" className="reply"><i className="icofont-reply"></i> Reply</a></h5>
                    <time dateTime="2020-01-01">01 Jan, 2020</time>
                    <p>
                      Enim ipsa eum fugiat fuga repellat. Commodi quo quo dicta. Est ullam aspernatur ut vitae quia mollitia
                      id non. Qui ad quas nostrum rerum sed necessitatibus aut est. Eum officiis sed repellat maxime vero
                      nisi natus. Amet nesciunt nesciunt qui illum omnis est et dolor recusandae.
                      Recusandae sit ad aut impedit et. Ipsa labore dolor impedit et natus in porro aut. Magnam qui cum.
                      Illo similique occaecati nihil modi eligendi. Pariatur distinctio labore omnis incidunt et illum.
                      Expedita et dignissimos distinctio laborum minima fugiat.
                      Libero corporis qui. Nam illo odio beatae enim ducimus. Harum reiciendis error dolorum non autem
                      quisquam vero rerum neque.
                  </p>

                    <div id="comment-reply-2" className="comment comment-reply clearfix">
                      <img src={require("../../assets/img/comments-4.jpg")} className="comment-img  float-left" alt="" />
                      <h5><a href="/blog/#">Sianna Ramsay</a> <a href="/blog/#" className="reply"><i className="icofont-reply"></i> Reply</a>
                      </h5>
                      <time dateTime="2020-01-01">01 Jan, 2020</time>
                      <p>
                        Et dignissimos impedit nulla et quo distinctio ex nemo. Omnis quia dolores cupiditate et. Ut unde
                        qui eligendi sapiente omnis ullam. Placeat porro est commodi est officiis voluptas repellat quisquam
                        possimus. Perferendis id consectetur necessitatibus.
                    </p>
                    </div>

                  </div>

                </div>

                <div id="comment-3" className="comment clearfix">
                  <img src={require("../../assets/img/comments-5.jpg")} className="comment-img  float-left" alt="" />
                  <h5><a href="/blog/#">Nolan Davidson</a> <a href="/blog/#" className="reply"><i className="icofont-reply"></i> Reply</a></h5>
                  <time dateTime="2020-01-01">01 Jan, 2020</time>
                  <p>
                    Distinctio nesciunt rerum reprehenderit sed. Iste omnis eius repellendus quia nihil ut accusantium
                    tempore. Nesciunt expedita id dolor exercitationem aspernatur aut quam ut. Voluptatem est accusamus iste
                    at.
                    Non aut et et esse qui sit modi neque. Exercitationem et eos aspernatur. Ea est consequuntur officia
                    beatae ea aut eos soluta. Non qui dolorum voluptatibus et optio veniam. Quam officia sit nostrum
                    dolorem.
                </p>
                </div>

                <div id="comment-4" className="comment clearfix">
                  <img src={require("../../assets/img/comments-6.jpg")} className="comment-img  float-left" alt="" />
                  <h5><a href="/blog/#">Kay Duggan</a> <a href="/blog/#" className="reply"><i className="icofont-reply"></i> Reply</a></h5>
                  <time dateTime="2020-01-01">01 Jan, 2020</time>
                  <p>
                    Dolorem atque aut. Omnis doloremque blanditiis quia eum porro quis ut velit tempore. Cumque sed quia ut
                    maxime. Est ad aut cum. Ut exercitationem non in fugiat.
                </p>

                </div>

                <div className="reply-form">
                  <h4>Leave a Reply</h4>
                  <p>Your email address will not be published. Required fields are marked * </p>
                  <form action="">
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <input name="name" type="text" className="form-control" placeholder="Your Name*" />
                      </div>
                      <div className="col-md-6 form-group">
                        <input name="email" type="text" className="form-control" placeholder="Your Email*" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col form-group">
                        <input name="website" type="text" className="form-control" placeholder="Your Website" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col form-group">
                        <textarea name="comment" className="form-control" placeholder="Your Comment*"></textarea>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Post Comment</button>
                  </form>
                </div>
              </div>
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