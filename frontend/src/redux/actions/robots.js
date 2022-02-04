import * as actionTypes from '../types';
import axios from 'axios'

function handleGetRobots(data) {
    return {
      type: actionTypes.ROBOTS_LIST,
      payload:data
    }
  }
function handleChangeRobots(data) {
    return {
      type: actionTypes.ROBOTS_CHANGE,
      payload:data
    }
  }
function handleFilterRobots(data) {
  return {
    type: actionTypes.ROBOTS_FILTER,
    payload: data,
  };
}
  
  export function getRobots() {
    return async dispatch => {
     
      try {
       const response= await axios.get('http://localhost:8000/api/robots')
       const robots=response.data.data
       const robotsEdited=robots.map((item,index)=>({id:index+1,...item}))
        dispatch(handleGetRobots(robotsEdited))
 
     } catch (err) {
         
     }
        
    
    }
  }
  export function changeRobots(data) {
    return  dispatch => {
      dispatch(handleChangeRobots(data));
    }
  }
  export function filterRobots(material) {
    return (dispatch) => {
      dispatch(handleFilterRobots(material));
    };
  }