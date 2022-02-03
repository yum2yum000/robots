import * as actionTypes from '../types';
import { toast } from 'react-toastify';
import { changeRobots } from './robots';

function handlehandleItemsCard(data) {
  return {
    type: actionTypes.CARDS_LIST,
    payload: data,
  };
}
function decrementCartItem(data) {
  return {
    type: actionTypes.DECREMENT_CARTITEM,
    payload: data,
  };
}

export const handleItemsCard = (robot) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems;
  const cartItemsQuantity = cartItems.length;
  const stock = robot.stock;
  stock > 0
    ? checkCartItem()
    : toast.error('out of stock !', { position: toast.POSITION.TOP_CENTER });

  function checkCartItem() {
    let cartItem = [];
    const existItem = cartItems?.find((x) => x.id === robot.id);

    if (existItem) {
      const existItemedRobot = cartItems.map((x) => {
        const culmutivePrice =
          Number(robot?.price?.toString().replace(/[^0-9.-]+/g, '')) *
          (existItem.qty + 1);
        return x.id === robot.id
          ? {
              ...existItem,
              qty: existItem.qty + 1,
              price: culmutivePrice.toFixed(2),
              stock: existItem.stock - 1,
            }
          : x;
      });
      cartItem = existItemedRobot;
      handleChangeCardItems(cartItem);
    } else {
      cartItemsQuantity <= 4
        ? addItem()
        : toast.error('exceeded !', { position: toast.POSITION.TOP_CENTER });
      function addItem() {
        cartItem = [...cartItems, { ...robot, qty: 1, stock: robot.stock - 1 }];
        handleChangeCardItems(cartItem);
      }
    }
  }

  function handleChangeCardItems(cartItem) {
    const editedRobot = { ...robot, stock: stock - 1 };
    dispatch(changeRobots(editedRobot));
    dispatch(handlehandleItemsCard(cartItem));
  }
};

export const handleIncrement = (robot) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems;
  const robots = getState().robot.robots;
  const stock = robot.stock;
  stock > 0
    ? checkCartItem()
    : toast.error('out of stock !', { position: toast.POSITION.TOP_CENTER });
  function checkCartItem() {
    const robotItem = robots?.find((x) => x.id === robot.id);
    const cartItemEdited = cartItems.map((x) => {
      const culmutivePrice =
        Number(robotItem?.price?.toString().replace(/[^0-9.-]+/g, '')) *
        (robot.qty + 1);
      return x.id === robot.id
        ? {
            ...robot,
            qty: robot.qty + 1,
            price: culmutivePrice.toFixed(2),
            stock: robot.stock - 1,
          }
        : x;
    });
    const editedRobot = { ...robotItem, stock: stock - 1 };
    dispatch(changeRobots(editedRobot));
    dispatch(handlehandleItemsCard(cartItemEdited));
  }
};

export const handleDecrement = (robot) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems;
  const robots = getState().robot.robots;
  const stock = robot.stock;
  const qty = robot.qty;
  let cartItemEdited = {};

  const robotItem = robots?.find((x) => x.id === robot.id);

  cartItemEdited = cartItems.map((x) => {
    const culmutivePrice =
      Number(robotItem?.price?.toString().replace(/[^0-9.-]+/g, '')) *
      (robot.qty - 1);
    return x.id === robot.id
      ? {
          ...robot,
          qty: robot.qty - 1,
          price: culmutivePrice.toFixed(2),
          stock: robot.stock + 1,
        }
      : x;
  });
  const editedRobot = { ...robotItem, stock: stock + 1 };
  dispatch(changeRobots(editedRobot));
  dispatch(handlehandleItemsCard(cartItemEdited));

  // dispatch(decrementCartItem(id));
};
