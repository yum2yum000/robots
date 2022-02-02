import React, { useEffect } from 'react'

import {
    Grid,
    Card,
    CardContent,
  } from '@material-ui/core';
  import Layout from '../components/Layout';
  import useStyles from '../utils/styles';
  import { useSelector ,useDispatch } from 'react-redux'
  import {getRobots,addToCard,handleIncrement,handleDecrement} from '../redux/actions/index'
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
     
    console.log('333333ddd',robots)
    return (
      <Layout>
        <div>
          <h1>Products</h1>
          
          <Grid container columns={12} >
          <Grid item xs={12} md={8} >
            <RobotList robots={robots} addToCard={addToCard} classes={classes}></RobotList>
          {/* <Grid container >

          { robots && robots?.map((product) => (
              <Grid item xs={12} md={4} key={product.name} className={classes.marginCard}>
                <Card >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{product.name}</Typography>
                     
                      <Typography>{dateFormat(product.createdAt)}</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Typography>{priceFormat(product.price)}</Typography>
                    <Button size="small" color="primary" onClick={()=>dispatch(addToCard(product))}>
                      Add to cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}</Grid> */}
            </Grid>
 
            <Grid item xs={12} md={4} >
            <Card >
                  
                    <CardContent>
                      <Cart handleIncrement={handleIncrement} handleDecrement={handleDecrement} cartItems={cartItems} totalPrice={totalPrice} classes={classes}></Cart>

                    </CardContent>
                 
                 
                </Card>
            </Grid>
          </Grid>
        </div>
      </Layout>
    );
  }