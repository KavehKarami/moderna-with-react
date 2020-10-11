import React from 'react';
import { Link } from 'react-router-dom';
import EntryContent from './EntryContent';
import EntryMeta from './EntryMeta';
import EntryMetaItem from './EntryMetaItem';

const Article = (props) => {
  return (
    <article className="entry">

      <div className="entry-img">
        <img src={props.imgURL} alt="" className="img-fluid" />
      </div>

      <h2 className="entry-title">
        <Link to={`/blog/${props.blogId}`}>{props.title}</Link>
      </h2>

      <EntryMeta>
        <EntryMetaItem icon="icofont-user" title="John Doe" blogId={props.blogId} />
        <EntryMetaItem icon="icofont-wall-clock" title={<time dateTime="2020-01-01">Jan 1, 2020</time>} blogId={props.blogId} />
        <EntryMetaItem icon="icofont-comment" title="12 Comments" blogId={props.blogId} />
      </EntryMeta>

      <EntryContent blogId={props.blogId}>
        <p>
          Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et
          laboriosam eius aut nostrum quidem aliquid dicta.
          Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos
          aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
        </p>
      </EntryContent>

    </article>
  );
}

export default Article;