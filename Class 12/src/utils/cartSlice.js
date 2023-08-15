import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        // state represents the previous state
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        clearCart: (state, action)=>{
            state.items = []
        },
        removeItem: (state, action) => {
            for(let i = 0; i<state.items.length;i++){
                if(state.items[i]===action.payload){
                    state.items.splice(i, 1)
                }
            } 
        }
    },
});

export const { addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;