import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, updateCart } from '../../actions/cartActions';

class BookItem extends React.Component {
  handleCart(e) {
    const book = [
      ...this.props.cart,
      {
        _id: this.props._id,
        title: this.props.title,
        description: this.props.description,
        price: this.props.price,
        quantity: 1
      }
    ];
    if (this.props.cart.length > 0) {
      //Not Empty cart
      let _id = this.props._id;
      const cartIndex = this.props.cart.findIndex(cart => {
        return cart._id === _id;
      });
      if (cartIndex === -1) {
        //Not found
        this.props.addToCart(book);
      } else {
        //We need to update quantity
        this.props.updateCart(_id, 1);
      }
    } else {
      //Empty Cart
      this.props.addToCart(book);
    }
  }
  render() {
    return (
      <div className="card">
        <div className="row">
          <div className="col-xs-12 ">
            <div className="card-body">
              <h6>{this.props.title}</h6>
              <p>{this.props.description}</p>
              <h6>{this.props.price}</h6>
              <button
                className="btn btn-primary"
                onClick={this.handleCart.bind(this)}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { cart: state.cart.cart };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addToCart: addToCart,
      updateCart: updateCart
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
