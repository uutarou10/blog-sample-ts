import * as React from 'react';
import Post from '../../model/post';

interface PropTypes {
  post: Post
}

const postComponent: React.SFC<PropTypes> = ({ post }) => {
  return (
    <li>
      <p>{post.title}</p>
      <small>{post.body.replace(/\n/, '').substr(0, 100)} ...</small>
    </li>
  );
};

export default postComponent;