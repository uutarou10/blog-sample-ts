import * as React from 'react';
import Post from '../../model/post';
import CommentsComponent from '../Comments';

const postComponent: React.SFC<{post: Post}> = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <small>{post.commentIds.length} comment(s)</small>
      <hr />
      <div>{post.body}</div>
      <hr />
      <CommentsComponent commentIds={post.commentIds} />
    </div>
  );
};

export default postComponent;