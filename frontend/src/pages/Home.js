import React, { useEffect } from 'react'

import {
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
  } from '@material-ui/core';
  import Layout from '../components/Layout';
  import useStyles from '../utils/styles';
  import { useSelector ,useDispatch } from 'react-redux'
  import useDateFormat from '../hooks/dateFormat'
  import usePriceFormat from '../hooks/priceFormat'
  import {getRobots,addToCard} from '../redux/actions/index'
  

  export default function Home() {
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getRobots())
    // Safe to add dispatch to the dependencies array
    }, [dispatch])
  

    const dateFormat = useDateFormat();
    const priceFormat = usePriceFormat();

    const robots = useSelector((state) => state.robot.robots)
    const cartItems = useSelector((state) => state.card.cartItems)
    const totalPrice= useSelector((state) => state.card.totalPrice)
     
    console.log('333333ddd',robots)
    return (
      <Layout>
        <div>
          <h1>Products</h1>
          
          <Grid container columns={12} >
          <Grid item xs={12} md={8} >
          <Grid container >

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
            ))}</Grid>
            </Grid>
 
            <Grid item xs={12} md={4} >
            <Card >
                  
                    <CardContent>
                   
                     
                      <Grid container >
                        {
                          cartItems?.map((item)=>(
                            <React.Fragment key={item.id}>
                             <Grid item xs={6} md={6} >
                        {item.qty} {priceFormat(item.price)}
                        </Grid>
                        <Grid item xs={6} md={6} className={classes.right}>
                        {item.name}
                        </Grid>
                       
                        
                            </React.Fragment>
                          ))
                        }
                         <Grid item xs={12} md={12} className={classes.right}>
                        {priceFormat(totalPrice)}
                        </Grid>
                        </Grid>
                     
                      
                     
                     
                    </CardContent>
                 
                 
                </Card>
            </Grid>
          </Grid>
        </div>
      </Layout>
    );
  }