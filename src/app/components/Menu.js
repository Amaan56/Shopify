import React from 'react';
import { connect } from 'react-redux';

class Menu extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          Shopify
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                Contact
              </a>
            </li>
          </ul>
          <ul class="navbar-nav navbar-right">
            <li class="nav-item">
              <a class="nav-link" href="/admin">
                Admin
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/cart">
                Your Cart{this.props.totalQty > 0 ? (
                  <span class="badge badge-warning">{this.props.totalQty}</span>
                ) : (
                  ''
                )}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps(state) {
  return { totalQty: state.cart.totalQty };
}
export default connect(mapStateToProps)(Menu);
