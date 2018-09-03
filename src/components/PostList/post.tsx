import * as React from 'react';
import { Link } from 'react-router-dom';
import Post from '../../model/post';

interface PropTypes {
  post: Post
}

const postComponent: React.SFC<PropTypes> = ({ post }) => {
  return (
    <li>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
      <small>
        Posted at {post.createdAt.toLocaleDateString()} | {post.commentIds.length} comments<br />
        {post.body.replace(/\n/, '').substr(0, 100)} ...
      </small>
    </li>
  );
};

export default postComponent;