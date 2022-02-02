import * as actionTypes from '../types';
import {  toast } from 'react-toastify';
import {changeRobots} from './robots'


function handleAddToCard(data) {
  
    return {
      type: actionTypes.CARDS_LIST,
      payload:data
    }
  }
  
  export const addToCard = (robot) => (dispatch, getState) => {

               const cartItems=getState().card.cartItems
               const cartItemsQuantity= cartItems.length
               const stock=robot.stock  
               stock>0?checkCartItem(): toast.error("out of stock !", { position: toast.POSITION.TOP_CENTER });
            

             function checkCartItem(){
                let cartItem=[]
                const existItem = cartItems?.find((x) => x.id === robot.id);

               if (existItem ) {
                 const existItemedRobot= cartItems.map((x) =>{
                     const culmutivePrice=Number((existItem?.price?.toString().replace(/[^0-9.-]+/g,"")))* (existItem.qty + 1)
                   return x.id === robot.id ? { ...existItem, qty: existItem.qty + 1,price:culmutivePrice.toFixed(2) ,stock:existItem.stock-1 } : x
                 }
                   
                  )
                 cartItem=existItemedRobot
                 handleChangeCardItems(cartItem)

              } 
              else {
                cartItemsQuantity<=4?addItem():toast.error("exceeded !", { position: toast.POSITION.TOP_CENTER });
                function addItem(){
                    cartItem=[...cartItems, { ...robot, qty: 1,stock:robot.stock-1 }]
                    handleChangeCardItems(cartItem)
                }
       
              }
              
            
        }
           
           
             
        
        function handleChangeCardItems(cartItem){
           const editedRobot={...robot,stock:stock-1}
                 dispatch(changeRobots(editedRobot))
                 dispatch(handleAddToCard(cartItem))
        }
      
        
    
    
  }
//   export const addToCard = (robot) => (dispatch, getState) => {
  
  
//                const cartItems=getState().card.cartItems
//                let newRobot={}
//                console.log('robot',robot)
//                if(cartItems.length<=4){
//                let cartItem=[]
//                const existItem = cartItems?.find((x) => x.id === robot.id);
//                const stock=robot.stock     
//                console.log('stockk',stock)
//                if (existItem && stock>0) {
                
//                  const existItemedRobot= cartItems.map((x) =>{
//                      console.log('ffff',existItem.price)
//                      const culmutivePrice=Number((existItem?.price?.toString().replace(/[^0-9.-]+/g,"")))* (existItem.qty + 1)
//                    return x.id === robot.id ? { ...existItem, qty: existItem.qty + 1,price:culmutivePrice.toFixed(1) ,stock:existItem.stock-1 } : x
//                  }
                   
//                   )
//                  cartItem=existItemedRobot
//                  handleChangeCardItems(stock,cartItem)
       
            
//               } 
//               else if(!existItem && stock>0){
//                 console.log('22',stock)
                
//                 cartItem=[...cartItems, { ...robot, qty: 1,stock:robot.stock-1 }]
//                 handleChangeCardItems(stock,cartItem)
       
//               }
//               else {
//                 toast.error("error Notification !", { position: toast.POSITION.TOP_CENTER });
//               }
//             }
//             else{
//                 toast.error("exceeded !", { position: toast.POSITION.TOP_CENTER });
//             }
             
        
//         function handleChangeCardItems(stock,cartItem){
//             newRobot={...robot,stock:stock-1}
//                  dispatch(changeRobots(newRobot))
//                  dispatch(handleAddToCard(cartItem))
//         }
      
        
    
    
//   }