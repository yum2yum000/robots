import { combineReducers } from 'redux';


import robotReducer from './robots';
import cardReducer from './cards';


const rootReducer = combineReducers({

    robot: robotReducer,
    card: cardReducer,

});

export default rootReducer;