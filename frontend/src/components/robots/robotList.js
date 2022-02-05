import {
    Grid,
  } from '@material-ui/core';

  import Robot from './robot'

 
const RobotList=(props)=>{
const { robots, handleItemsCard, classes } = props;


    return (
      <Grid container>
        {robots &&
          robots?.map((robot) => (
            <Robot
              key={robot.id}
              robot={robot}
              classes={classes}
              handleItemsCard={handleItemsCard}
            ></Robot>
          ))}
      </Grid>
    );
}


export default RobotList