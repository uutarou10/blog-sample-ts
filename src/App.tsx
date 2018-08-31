import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import './App.css';
import logo from './logo.svg';
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts.request())
});

export default connect(null, mapDispatchToProps)(App);
