import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
const store=createStore(
    (state = {})=> state,
    applyMiddleware(thunk)
);
ReactDOM.render(
<Provider store={store} >
<Router>
<Route exact path='/' component={App}>

</Route>
</Router></Provider>, document.getElementById('root'));
registerServiceWorker();
