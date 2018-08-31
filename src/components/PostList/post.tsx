import * as React from 'react';
import Post from '../../model/post';

interface PropTypes {
  post: Post
}

const postComponent: React.SFC<PropTypes> = ({ post }) => {
  return (
    <li>
      <p>{post.title}</p>
      <small>
        Posted at {post.createdAt.toLocaleDateString()} | {post.commentIds.length} comments<br />
        {post.body.replace(/\n/, '').substr(0, 100)} ...
      </small>
    </li>
  );
};

export default postComponent;