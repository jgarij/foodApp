
import {createSlice} from "@reduxjs/toolkit"
const initialState={
    items:[],
};


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
       
        addToCart:(state,action)=>{
            const item = action.payload.item;
             const itemQuantity=action.payload.itemQuantity;
            // console.log("acion.payload",action.payload)
            const existingItem = state.items.find((i)=>i.name == item.name);
            if(!existingItem){
                state.items.push({
                    ...item,selectedQuantity:itemQuantity
                });
            }
            else{
                existingItem.selectedQuantity+=itemQuantity;
            }
            // console.log("Item addded to cart",item.name,itemQuantity);
            
        },

        removeToCart:(state,action)=>{
            const item = action.payload;
           
            state.items = state.items.filter((i=>i.name !== item.name));
        
        },

        decreaseQuantity :(state,action)=>{
          
            const item = state.items.find((i)=>i.name == action.payload.name);
            if(item){
                if(item.selectedQuantity>1){
                    item.selectedQuantity -=1;
                }
                else{
                    state.items  = state.items.filter(i=>i.name!=item.name)
                }
            }
        },
        increaseQuantity :(state,action)=>{
          
            const item = state.items.find((i)=>i.name == action.payload.name);
            if(item){
                item.selectedQuantity +=1;
            
            }
        },

        clearCart:(state)=>{
            state.items=[];
        }

    }
});
export const {addToCart,decreaseQuantity,increaseQuantity,clearCart,removeToCart} = cartSlice.actions;
export default cartSlice.reducer;