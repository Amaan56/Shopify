import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BookItem from './BookItem';
import BooksForm from './BooksForm';
import Cart from './Cart';
import { getBooks } from '../../actions/booksActions';

//import { Grid, Row, Col, Button } from 'react-bootstrap';

class BooksList extends React.Component {
  componentDidMount() {
    this.props.getBooks();
  }
  render() {
    //console.log('Are we accessing the state', this.props.books);
    const booksList = this.props.books.map(book => {
      return (
        //  <div className="col-md-4" key={book.id}>
        <BookItem
          _id={book._id}
          title={book.title}
          description={book.description}
          price={book.price}
        />
        //  </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h4>Cart :</h4>
                <Cart />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <BooksForm />
          </div>
          <div className="col-md-6">{booksList}</div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { books: state.books.books };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getBooks: getBooks
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
