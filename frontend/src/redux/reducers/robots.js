import * as actionTypes from '../types';


const initialState = {
    robots:null
    
};


const getRobots=(state, action)=>{
  return{
      ...state,
      robots:action.payload
    
  }
}
const changeRobots=(state, action)=>{


    const robot=action.payload
    const index=state.robots.findIndex((item)=>item.id===robot.id)
    state.robots[index]=robot
    console.log('index',index)

  return{
      robots: state.robots
    
  }

}




const robotReducer=( state = initialState,action)=>{
    switch ( action.type ) {
        case actionTypes.ROBOTS_LIST: return getRobots(state, action);
        case actionTypes.ROBOTS_CHANGE: return changeRobots(state, action);
       

        default:
            return state;
    }
}

export default robotReducer