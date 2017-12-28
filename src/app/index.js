//REACT
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
//React router
//import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { applyMiddleware, createStore } from 'redux';

//Reducers
import reducers from './reducers/index';

//Actions
import { addToCart } from './actions/cartActions';
import { postBooks, deleteBooks, updateBooks } from './actions/booksActions';

//Middleware
import { logger } from 'redux-logger';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);
//React Components
import BooksList from './components/pages/BooksList';
import BooksForm from './components/pages/BooksForm';
import Cart from './components/pages/Cart';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Main from './Main';

render(
  <Provider store={store}>
    <div className="container">
      <Menu />
      <BooksList />
      <Footer />
    </div>
  </Provider>,
  window.document.getElementById('app')
);
