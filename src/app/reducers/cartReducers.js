export function cartReducers(state = { cart: [] }, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      //console.log(action.payload);
      return {
        ...state,
        cart: action.payload,
        totalAmount: totals(action.payload).amount,
        totalQty: totals(action.payload).qty
      };
      break;
    case 'DELETE_CART_ITEM':
      //console.log(action.payload);
      return {
        ...state,
        cart: action.payload,
        totalAmount: totals(action.payload).amount,
        totalQty: totals(action.payload).qty
      };
      break;
    case 'UPDATE_CART':
      const currentBookToUpdate = [...state.cart];
      const indexToUpdate = currentBookToUpdate.findIndex(book => {
        return book._id == action._id;
      });
      const newBookToUpdate = {
        ...currentBookToUpdate[indexToUpdate],
        quantity: currentBookToUpdate[indexToUpdate].quantity + action.unit
      };

      const cartUpdate = [
        ...currentBookToUpdate.slice(0, indexToUpdate),
        newBookToUpdate,
        ...currentBookToUpdate.slice(indexToUpdate + 1)
      ];
      return {
        cart: cartUpdate,
        totalAmount: totals(cartUpdate).amount,
        totalQty: totals(cartUpdate).qty
      };
      break;
  }
  return state;
}

//Calculate Totals
export function totals(payloadArr) {
  const totalAmount = payloadArr
    .map(cart => {
      return cart.quantity * cart.price;
    })
    .reduce((a, b) => {
      return a + b;
    }, 0); //start from index 0
  const totalQty = payloadArr
    .map(cart => {
      return cart.quantity;
    })
    .reduce((a, b) => {
      return a + b;
    }, 0); //start from index 0

  return {
    amount: totalAmount.toFixed(2),
    qty: totalQty
  };
}
