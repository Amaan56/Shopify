export function booksReducers(
  state = {
    books: [
      {
        _id: 1,
        title: 'A flying man',
        description: 'Hey bro',
        price: 44.5
      },
      {
        _id: 2,
        title: 'My Nigga',
        description: 'My Nigga',
        price: 776
      }
    ]
  },
  action
) {
  switch (action.type) {
    case 'GET_BOOKS':
      return { ...state, books: [...state.books] };
      break;
    case 'POST_BOOK':
      //  let books = state.books.concat(action.payload);
      //return books;
      return { books: [...state.books, ...action.payload] };
      break;
    case 'DELETE_BOOK':
      const currentBookToDelete = [...state.books];
      const indexToDelete = currentBookToDelete.findIndex(book => {
        return book._id == action.payload;
      });
      console.log(indexToDelete);
      return {
        books: [
          ...currentBookToDelete.slice(0, indexToDelete),
          ...currentBookToDelete.slice(indexToDelete + 1)
        ]
      };
      break;
    case 'UPDATE_BOOK':
      const currentBookToUpdate = [...state.books];
      const indexToUpdate = currentBookToUpdate.findIndex(book => {
        return book._id == action.payload._id;
      });
      const newBookToUpdate = {
        ...currentBookToUpdate[indexToUpdate],
        title: action.payload.title
      };
      //console.log(indexToUpdate);
      console.log(newBookToUpdate);
      return {
        books: [
          ...currentBookToUpdate.slice(0, indexToUpdate),
          newBookToUpdate,
          ...currentBookToUpdate.slice(indexToUpdate + 1)
        ]
      };
      break;
  }
  return state;
}
