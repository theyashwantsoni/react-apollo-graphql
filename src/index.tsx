import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from '@apollo/client';

import App from './App';

import 'react-toastify/dist/ReactToastify.css';
import 'semantic-ui-css/semantic.min.css';
import { client } from './constants';


ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
