import React from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import usePriceFormat from '../../hooks/priceFormat';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Robot = (props) => {
  const {
    totalPrice,
    cartItems,
    classes,
    handleIncrement,
    handleDecrement,
  } = props;
  const priceFormat = usePriceFormat();
  const dispatch = useDispatch();

  return (
    <Grid container>
      {cartItems?.map((item) => (
        <React.Fragment key={item.id}>
          <Grid item xs={6} md={6}>
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
      <Grid item xs={12} md={12} className={classes.right}>
        {priceFormat(totalPrice)}
      </Grid>
    </Grid>
  );
};

export default Robot;
