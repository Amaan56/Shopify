import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postBooks } from '../../actions/booksActions';

class BooksForm extends React.Component {
  handleSubmit(e) {
    const book = [
      {
        title: this.refs.title.value,
        description: this.refs.description.value,
        price: this.refs.price.value
      }
    ];
    this.props.postBooks(book);
    e.preventDefault();
  }
  render() {
    return (
      <form className="card">
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="title">Book Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              ref="title"
              placeholder="Enter title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Book description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              ref="description"
              placeholder="Enter description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Book Price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              ref="price"
              placeholder="Enter price"
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={this.handleSubmit.bind(this)}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postBooks: postBooks }, dispatch);
}
export default connect(null, mapDispatchToProps)(BooksForm);
