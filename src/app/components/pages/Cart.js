import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCartItem, updateCart } from '../../actions/cartActions';

class Cart extends React.Component {
  onDelete(_id) {
    const currentBookToDelete = this.props.cart;
    const indexToDelete = currentBookToDelete.findIndex(cart => {
      return cart._id == _id;
    });
    //console.log(indexToDelete);

    let cartAfterDelete = [
      ...currentBookToDelete.slice(0, indexToDelete),
      ...currentBookToDelete.slice(indexToDelete + 1)
    ];

    this.props.deleteCartItem(cartAfterDelete);
  }
  onIncrement(_id) {
    this.props.updateCart(_id, 1);
  }
  onDecrement(_id, quantity) {
    if (quantity > 0) {
      this.props.updateCart(_id, -1);
    }
  }
  render() {
    const cartItemsList = this.props.cart.map(cartItem => {
      return (
        <div className="row">
          <div className="col-md-4">
            <h6>{cartItem.title}</h6>
          </div>
          <div className="col-md-2">
            <h6>Rs. {cartItem.price}</h6>
          </div>
          <div className="col-md-2">
            <h6>qty {cartItem.quantity}</h6>
          </div>
          <div className="col-md-1">
            <button
              className="btn btn-primary"
              onClick={this.onIncrement.bind(this, cartItem._id)}
            >
              +
            </button>
          </div>
          <div className="col-md-1">
            <button
              className="btn btn-primary"
              onClick={this.onDecrement.bind(
                this,
                cartItem._id,
                cartItem.quantity
              )}
            >
              -
            </button>
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-danger"
              onClick={this.onDelete.bind(this, cartItem._id)}
            >
              Delete
            </button>
          </div>
        </div>
      );
    }, this);
    return (
      <div className="conatiner">
        {cartItemsList}{' '}
        <div className="row">
          <div className="col-md-12">
            Total Amount : {this.props.totalAmount}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button
              className="btn btn-success"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Proceed to Payment
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Thank You!!!
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <h6>Your order have been saved</h6>
                    <p>You will recieve a confirmation on email</p>
                  </div>
                  <div class="modal-footer">
                    <div className="col-md-10">
                      Total : Rs. {this.props.totalAmount}
                    </div>

                    <button
                      type="button"
                      class="btn btn-primary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
    totalAmount: state.cart.totalAmount
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { deleteCartItem: deleteCartItem, updateCart: updateCart },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
