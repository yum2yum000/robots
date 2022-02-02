import * as actionTypes from '../types';

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const addToCard = (state, action) => {
  const cartItems = action.payload;
  const cartItemsEdited = cartItems.filter((item) => item.qty !== 0);
  console.log(cartItemsEdited);
  let totalPrice = 0;
  cartItems.map((item) => {
    totalPrice += Number(item.price);
  });
  console.log(totalPrice.toFixed(2));
  return {
    ...state,
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

// const addToCard=(state, action)=>{
//    const product=action.payload
//    console.log('state.cartItems',state.cartItems)
//    const cartItems=state.cartItems
//    const exist = cartItems.find((x) => x.id === product.id);
//    if (exist) {

//      const data= cartItems.map((x) =>
//         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
//       )
//       return{
//         ...state,
//         cartItems:data

//     }

//   }
//   else {
//     return{
//         ...state,
//         cartItems:[...cartItems, { ...product, qty: 1 }]

//     }
//   }

// }

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CARDS_LIST:
      return addToCard(state, action);
    case actionTypes.DECREMENT_CARTITEM:
      return decrementCartItem(state, action);

    default:
      return state;
  }
};

export default cardReducer;
