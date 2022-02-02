import { combineReducers } from 'redux';


import robotReducer from './robots';
import cartReducer from './carts';


const rootReducer = combineReducers({

    robot: robotReducer,
    cart: cartReducer,

});

export default rootReducer;