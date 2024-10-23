import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        // mutating the state here
        addItem: (state, action)=>{
            state.items.push(action.payload)
        },
        remoteItem: (state)=>{
            state.items.pop();
        },
        clearCart: (state)=>{
            state.items.length = 0
        }
    }
})
export const {addItem, remoteItem, clearCart}=cartSlice.actions;
export default cartSlice.reducer;
