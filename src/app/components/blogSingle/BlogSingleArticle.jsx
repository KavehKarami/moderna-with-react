import React from 'react';
import { Link } from 'react-router-dom';
import EntryMeta from '../blog/EntryMeta';
import EntryMetaItem from '../blog/EntryMetaItem';
import BlogSingleFooter from './BlogSingleFooter';

const BlogSingle = (props) => {
  return (
    <article className="entry entry-single">
      <div className="entry-img">
        <img src={require(`../../../assets/img/blog-post-${props.blogId}.jpg`)} alt="" className="img-fluid" />
      </div>

      <h2 className="entry-title">
        <Link to={`/blog/${props.blogId}`}>{props.title}</Link>
      </h2>

      <EntryMeta>
        <EntryMetaItem icon="icofont-user" title="John Doe" blogId={props.blogId} />
        <EntryMetaItem icon="icofont-wall-clock" title={<time dateTime="2020-01-01">Jan 1, 2020</time>} blogId={props.blogId} />
        <EntryMetaItem icon="icofont-comment" title="12 Comments" blogId={props.blogId} />
      </EntryMeta>

      <div className="entry-content">
        <p>
          Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et
          laboriosam eius aut nostrum quidem aliquid dicta.
          Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos
          aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
        </p>

        <p>
          Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non reiciendis. Sequi in accusamus harum vel
          aspernatur. Excepturi numquam nihil cumque odio. Et voluptate cupiditate.
        </p>

        <blockquote>
          <i className="icofont-quote-left quote-left"></i>
          <p>
            Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam
            doloribus minus autem quos.
          </p>
          <i className="las la-quote-right quote-right"></i>
          <i className="icofont-quote-right quote-right"></i>
        </blockquote>

        <p>
          Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore tempore provident
          voluptas mollitia aliquid. Id repellendus quia. Asperiores nihil magni dicta est suscipit perspiciatis.
          Voluptate ex rerum assumenda dolores nihil quaerat.
          Dolor porro tempora et quibusdam voluptas. Beatae aut at ad qui tempore corrupti velit quisquam rerum.
          Omnis dolorum exercitationem harum qui qui blanditiis neque.
          Iusto autem itaque. Repudiandae hic quae aspernatur ea neque qui. Architecto voluptatem magni. Vel
          magnam quod et tempora deleniti error rerum nihil tempora.
        </p>

        <h3>Et quae iure vel ut odit alias.</h3>
        <p>
          Officiis animi maxime nulla quo et harum eum quis a. Sit hic in qui quos fugit ut rerum atque. Optio
          provident dolores atque voluptatem rem excepturi molestiae qui. Voluptatem laborum omnis ullam quibusdam
          perspiciatis nulla nostrum. Voluptatum est libero eum nesciunt aliquid qui.
          Quia et suscipit non sequi. Maxime sed odit. Beatae nesciunt nesciunt accusamus quia aut ratione
          aspernatur dolor. Sint harum eveniet dicta exercitationem minima. Exercitationem omnis asperiores natus
          aperiam dolor consequatur id ex sed. Quibusdam rerum dolores sint consequatur quidem ea.
          Beatae minima sunt libero soluta sapiente in rem assumenda. Et qui odit voluptatem. Cum quibusdam
          voluptatem voluptatem accusamus mollitia aut atque aut.
        </p>
        <img src={require("../../../assets/img/blog-post-4.jpg")} className="img-fluid" alt="" />

        <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
        <p>
          Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro amet nostrum. In assumenda quia quae a
          id praesentium. Quos deleniti libero sed occaecati aut porro autem. Consectetur sed excepturi sint non
          placeat quia repellat incidunt labore. Autem facilis hic dolorum dolores vel.
          Consectetur quasi id et optio praesentium aut asperiores eaque aut. Explicabo omnis quibusdam esse. Ex
          libero illum iusto totam et ut aut blanditiis. Veritatis numquam ut illum ut a quam vitae.
        </p>
        <p>
          Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim omnis ipsa voluptas incidunt. Nulla sit
          eaque mollitia nisi asperiores est veniam.
        </p>

      </div>

      <BlogSingleFooter />
    </article>
  );
}

export default BlogSingle;