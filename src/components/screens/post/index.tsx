import * as React from 'react';
import { connect } from 'react-redux';
import { match } from 'react-router';
import Post from '../../../model/post';
import { RootState } from '../../../module';

interface PropTypes {
  match: match<{id: string}>
  posts: Post[]
}

const postScreenComponent: React.SFC<PropTypes> = (props) => {
  const id = parseInt(props.match.params.id, 10);
  const posts = props.posts;
  const post = posts.find(p => p.id === id);

  return (
    <div>
      <div>post id: {id}</div>
      <div>{post ? post.body : 'sorry. not found.'}</div>
    </div>
  );
}

const mapStateToProps = (state:RootState) => ({
    posts: state.posts.posts
})

export default connect(mapStateToProps)(postScreenComponent);