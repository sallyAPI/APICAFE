import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

//{} state เริ่มต้น
const store = createStore(reducers,{}, applyMiddleware(reduxThunk));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



