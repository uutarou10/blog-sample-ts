import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import PostList from './components/PostList';
import { fetchPosts } from './module/posts';

interface PropTypes {
  fetchPosts: () => any
}

class App extends React.Component<PropTypes> {
  public componentDidMount() {
    this.props.fetchPosts();
  }

  public render() {
    return (
      <div className="App">
        <PostList />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts.request())
});

export default connect(null, mapDispatchToProps)(App);
