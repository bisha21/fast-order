import { createSlice } from "@reduxjs/toolkit"
const initialState={
    cart:[
        {
          pizzaId:12,
          name:"Mediterranean",
          quantity:2,
          unitPrice:16,
          totalPrice:32  
        }
    ]
}
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem(state,actions){
            // payload = newItem
            state.cart.push(actions.payload)
        },
        deleteItem(state,actions){
            // payload= pizzaId
            state.cart= state.cart.filter((item)=>item.pizzaId!==actions.payload)

        },
        increaseItemQuantity(state,actions){
            //payload=pizzaId
            const item=state.cart.find(item=>item.pizzaId===actions.payload);
            
            item.quantity++
            item.totalPrice=item.quantity*item.unitPrice;
        },
        decreaseItemQuantity(state,actions){
            const item= state.cart.find(item=>item.pizzaId===actions.payload);
            if(item.quantity<=1) return;
            item.quantity--;
            item.totalPrice=item.quantity*item.unitPrice;

        },
 clearCart(state){
state.cart= [];

        },
    }
})
export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
export const  getCart= (state)=>state.cart.cart;
export const getTotalCartQuantity = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const getTotalCartPrice = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.unitPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
    state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
  
