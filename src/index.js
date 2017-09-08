import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import FiltersContainer from './containers/FiltersContainer';
import VisiblePosts from './containers/VisiblePosts';
import blogApp from './reducers';

let store = createStore(blogApp);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <FiltersContainer />
      <VisiblePosts />
    </div>
  </Provider>,
  document.getElementById('root')
);
