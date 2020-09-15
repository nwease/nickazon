import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from './Provider';
import reducer, {initialState} from './reducer';

ReactDOM.render(
  <React.StrictMode>
      <Provider initialState={initialState} reducer={reducer}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
