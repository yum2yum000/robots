import * as actionTypes from '../types';

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalCount: 0,
};

const handleItemsCard = (state, action) => {
  const cartItems = action.payload;
  const cartItemsEdited = cartItems.filter((item) => item.qty !== 0);
  console.log(cartItemsEdited);
  let totalPrice = 0;
  let totalCount = 0;
  cartItems.map((item) => {
    totalPrice += Number(item.price);
    totalCount += Number(item.qty);
  });
  console.log(totalPrice.toFixed(2));
  return {
    ...state,
    totalCount,
    cartItems: cartItemsEdited,
    totalPrice: totalPrice.toFixed(1),
    
  };
};
const decrementCartItem = (state, action) => {
  const cartItems = action.payload;
  let totalPrice = 0;
  cartItems.map((item) => {
    totalPrice += Number(item.price);
  });
  console.log(totalPrice.toFixed(2));
  return {
    ...state,
    cartItems: action.payload,
    totalPrice: totalPrice.toFixed(1),
  };
};


const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CARDS_LIST:
      return handleItemsCard(state, action);
    case actionTypes.DECREMENT_CARTITEM:
      return decrementCartItem(state, action);

    default:
      return state;
  }
};

export default cardReducer;
