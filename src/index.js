// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Router, Route, BrowserRouter } from 'react-router';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';
import { Match } from 'react-router';

useStrict(true);

ReactDOM.render((
	<BrowserRouter>
    <Match exactly pattern="/" component={ App } />
  </BrowserRouter>
), document.getElementById('react-root'));
