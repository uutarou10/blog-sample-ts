import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from './module';

const epicMiddleware = createEpicMiddleware();
export const history = createBrowserHistory();

export const configureStore = () => {
  const store = createStore(
    connectRouter(history)(rootReducer),
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        epicMiddleware
      )
    )
  );

  epicMiddleware.run(rootEpic);

  return store;
}