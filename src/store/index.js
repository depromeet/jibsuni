import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

  export function withStore(Component) {
    const store = createStore(rootReducer, devTools);
  
    function ComponentWithStore({ ...props }) {
      return (
        <Provider store={store}>
          <Component {...props} />
        </Provider>
      );
    }
  
    return ComponentWithStore;
  }


  