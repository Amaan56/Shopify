import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers/index';
import { addToCart } from './actions/cartActions';
import { postBooks, deleteBooks, updateBooks } from './actions/booksActions';
import { logger } from 'redux-logger';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

//Post a book
store.dispatch(
  postBooks([
    {
      id: 1,
      title: 'A flying man',
      description: 'Hey bro',
      price: 44.5
    },
    {
      id: 2,
      title: 'I too had a love story',
      description: 'My Nigga',
      price: 776
    },
    {
      id: 3,
      title: 'Stranger Things',
      description: 'American web television series',
      price: 44.5
    }
  ])
);

//DELETE a book
store.dispatch(
  deleteBooks({
    id: 1
  })
);

// Update Books
store.dispatch(
  updateBooks({
    id: 2,
    title: 'Xmen'
  })
);

//CART operations
store.dispatch(addToCart([{ id: 1 }]));
