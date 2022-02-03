import React from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import usePriceFormat from '../../hooks/priceFormat';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Divider } from '@material-ui/core';
import Box from '@material-ui/core/Box'
const Robot = (props) => {
  const {
    totalCount,
    totalPrice,
    cartItems,
    classes,
    handleIncrement,
    handleDecrement,
  } = props;
  const priceFormat = usePriceFormat();
  const dispatch = useDispatch();

  
  return (
    
    <Grid container alignItems="center"
    justifyContent="center">

{cartItems.length === 0 && <div className={classes.center}>cart is empty</div>}

      {cartItems?.map((item) => (
        <React.Fragment key={item.id} >
        
          <Grid item xs={6} md={6} >
            <ButtonGroup size="small" aria-label="small outlined button group">
              <Button
                onClick={() => dispatch(handleDecrement(item))}
                className={classes.cardButton}
              >
                -
              </Button>
            </ButtonGroup>
            {item.qty}
            <ButtonGroup size="small" aria-label="small outlined button group">
              <Button
                onClick={() => dispatch(handleIncrement(item))}
                className={classes.cardButton}
              >
                +
              </Button>
            </ButtonGroup>
            {priceFormat(item.price)}
          </Grid>
          <Grid item xs={6} md={6} className={classes.right}>
            {item.name}
          </Grid>
         
        </React.Fragment>
      ))}
   
      {
        cartItems.length !== 0 &&  
        <React.Fragment ><Grid container>
           <Grid item xs={6} md={6} className={classes.left}>
            <Box mt={2} > <Divider /> </Box>total price:
          </Grid>
        <Grid item xs={6} md={6} className={classes.right}>
            <Box mt={2} > <Divider /> </Box>
            {priceFormat(totalPrice)}    </Grid>
        </Grid>
        <Grid container>
        <Grid item xs={6} md={6} className={classes.left}>
        total number:
       </Grid>
     <Grid item xs={6} md={6} className={classes.right}>
         
         {totalCount}    </Grid>
     </Grid></React.Fragment>
        
      }
     
    
    </Grid>
    
  );
};

export default Robot;
