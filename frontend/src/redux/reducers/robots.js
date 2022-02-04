import * as actionTypes from '../types';


const initialState = {
  robots: [],
  filteredRobots:[]
};


const getRobots=(state, action)=>{
    const robots=action.payload
  return{
      ...state,
      robots,
      filteredRobots:robots
    
  }
}
const handleFilterRobots=(state, action)=>{
    const robots=state.robots
    const material=action.payload
    const filteredRobots=material!=='All'?robots.filter((item)=>item.material===material):robots
  return{
      ...state,
      filteredRobots
    
  }
}
const changeRobots=(state, action)=>{
    const robot=action.payload
    const index=state.robots.findIndex((item)=>item.id===robot.id)
    state.robots[index]=robot
    console.log('index',index)

  return{
    ...state,
      robots: state.robots
    
  }

}




const robotReducer=( state = initialState,action)=>{
    switch (action.type) {
      case actionTypes.ROBOTS_LIST:
        return getRobots(state, action);
      case actionTypes.ROBOTS_CHANGE:
        return changeRobots(state, action);
      case actionTypes.ROBOTS_FILTER:
        return handleFilterRobots(state, action);

      default:
        return state;
    }
}

export default robotReducer