import React, { useEffect } from 'react'

import {
    Grid,
    Card,
    CardContent,
  } from '@material-ui/core';
  import Layout from '../components/Layout';
  import useStyles from '../utils/styles';
  import { useSelector ,useDispatch } from 'react-redux'
  import {getRobots,handleItemsCard,handleIncrement,handleDecrement} from '../redux/actions/index'
  import RobotList from '../components/robots/robotList'
  import Cart from '../components/basket/cart'

  export default function Home() {
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getRobots())
    // Safe to add dispatch to the dependencies array
    }, [dispatch])
  

 
    const robots = useSelector((state) => state.robot.robots)
    const cartItems = useSelector((state) => state.cart.cartItems)
    const totalPrice= useSelector((state) => state.cart.totalPrice)
    const totalCount= useSelector((state) => state.cart.totalCount)
     
    console.log('333333ddd',robots)
    return (
      <Layout>
        <div>
          <h1>Robots</h1>

          <Grid container spacing={2} 
    justifyContent="center">
            <Grid item xs={12}  sm={6} md={7} lg={8}  className={classes.orderMobile}>
              <RobotList
                robots={robots}
                handleItemsCard={handleItemsCard}
                classes={classes}
              ></RobotList>
       
            </Grid>

            <Grid item xs={12} sm={6} md={5} lg={4}  style={{paddingTop:'30px'}}>
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