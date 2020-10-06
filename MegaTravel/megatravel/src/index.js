import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Activities from './activities';

ReactDOM.render(
 <React.StrictMode>
   <App />
 </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  React.createElement("form", {id: 'ContactForm', method: 'post', action: 'formsubmit.php' },
      
      React.createElement('h3', null, "Destination"),
      React.createElement(Activities, null),

      ),
  document.getElementById('activities')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
