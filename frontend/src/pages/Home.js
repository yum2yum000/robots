import React, { useEffect, useRef } from 'react';
import FilterRobots from '../components/filter/robots';
import {
    Grid,
    Card,
    CardContent,
  } from '@material-ui/core';

  import Layout from '../components/Layout';
  import useStyles from '../utils/styles';
  import { useSelector ,useDispatch,shallowEqual } from 'react-redux'
  import {getRobots,handleItemsCard,handleIncrement,handleDecrement,filterRobots} from '../redux/actions/index'
  import RobotList from '../components/robots/robotList'
  import Cart from '../components/basket/cart'
import {materials} from '../utils/data'

  export default function Home() {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getRobots());
      // Safe to add dispatch to the dependencies array
    }, [dispatch]);

    const { filteredRobots, cartItems, totalPrice, totalCount } = useSelector(
      (state) => {
        return {
          filteredRobots: state.robot.filteredRobots,
          cartItems: state.cart.cartItems,
          totalPrice: state.cart.totalPrice,
          totalCount: state.cart.totalCount,
        };
      },
      shallowEqual
    );

    return (
      <Layout>
        <div>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={8}>
              <h1>Robots</h1>
            </Grid>
            <Grid item xs={4}>
              <FilterRobots
                materials={materials}
                classes={classes}
                filterRobots={filterRobots}
              ></FilterRobots>
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="center">
            <Grid
              item
              xs={12}
              sm={6}
              md={7}
              lg={8}
              className={classes.orderMobile}
            >
              <RobotList
                robots={filteredRobots}
                handleItemsCard={handleItemsCard}
                classes={classes}
              ></RobotList>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={5}
              lg={4}
              style={{ paddingTop: '30px' }}
            >
              <Card>
                <CardContent>
                  <Cart
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                    cartItems={cartItems}
                    totalPrice={totalPrice}
                    classes={classes}
                    totalCount={totalCount}
                  ></Cart>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Layout>
    );
  }