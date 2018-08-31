import * as React from 'react';
import { connect } from 'react-redux';
import Post from '../../model/post';
import { RootState } from '../../module';
import PostComponent from './post';

interface PropTypes {
  posts: Post[]
}

const postList: React.SFC<PropTypes> = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map(post => (
          <PostComponent
            key={post.id}
            post={post}
          />
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  posts: state.posts.posts
});

export default connect(mapStateToProps)(postList);
