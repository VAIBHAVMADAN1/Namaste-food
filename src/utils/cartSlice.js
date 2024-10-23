import { createSlice } from "@reduxjs/toolkit"

const items = localStorage.getItem('items');
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: items ? JSON.parse(items) : []
    },
    reducers: {
        // mutating the state here
        addItem: (state, action)=>{
            state.items.push(action.payload);
            const items = localStorage.getItem('items');
            if (!items) {
                localStorage.setItem('items', JSON.stringify([action.payload,]));
            }
            else{
                localStorage.setItem('items', JSON.stringify([...(JSON.parse(items)), action.payload]))
            }
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
