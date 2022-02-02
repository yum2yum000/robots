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
  import useDateFormat from '../../hooks/dateFormat'
  import usePriceFormat from '../../hooks/priceFormat'
  import { useDispatch } from 'react-redux'
const Robot=(props)=>{
const {robot,addToCard,classes}=props
const dateFormat = useDateFormat();
const priceFormat = usePriceFormat();
const dispatch = useDispatch();

    return(
       
        <Grid item xs={12} md={4} key={robot.name} className={classes.marginCard}>
              <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={robot.image}
                    title={robot.name}
                  ></CardMedia>
                  <CardContent>
                    <Typography>{robot.name}</Typography>
                   
                    <Typography>{dateFormat(robot.createdAt)}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography>{priceFormat(robot.price)}</Typography>
                  <Button size="small" color="primary" onClick={()=>dispatch(addToCard(robot))}>
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
              </Grid>
            
    )
}


export default Robot