import {
    Grid,
  } from '@material-ui/core';

  import Robot from './robot'

 
const RobotList=(props)=>{
const {robots,addToCard,classes }=props


    return(
        <Grid container >

        { robots && robots?.map((robot) => (
          
                <Robot robot={robot} classes={classes} addToCard={addToCard}></Robot>
          
            
          ))}</Grid>
    )
}


export default RobotList