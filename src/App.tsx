import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { Dispatch } from 'redux';
import indexScreen from './components/screens/index';
import postScreen from './components/screens/post';
import { fetchPosts } from './module/posts';
import { history } from './store';

interface PropTypes {
  fetchPosts: () => any
}

class App extends React.Component<PropTypes> {
  public componentDidMount() {
    this.props.fetchPosts();
  }

  public render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact={true} path='/' component={indexScreen} />
          <Route path='/posts/:id' component={postScreen} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts.request())
});

export default connect(null, mapDispatchToProps)(App);
