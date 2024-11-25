import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../constants/cartItems"

const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducer: {
        //선택 증가
        increase: (state, {payload}) => {
            //버튼 누른 노래의 ID를 가져옴
            const itemId = payload;
            const item = state.cartItems.find((cartItem) => cartItem.id === itemId)
            item.id += 1;
        },

        //선택 감소
        decrease: (state, {payload}) => {
            const itemId = payload;
            const item = state.cartItems.find((cartItem) => cartItem.id === itemId);
            item.id -= 1;
        },

        //악곡 제거 (count = 0)
        removeItem: (state, {payload}) => {
            const itemId = payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },

        //악곡 비우기 (모두 제거)
        clearCart:(state) => {
            state.cartItems = [];
        },

        //전체 선택 계산 (count * cost)
        calulateTotals: (state) => {
            let amount = 0;
            let total = 0;

            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            }) 

            state.amount = amount;
            state.total = total;
        }
    }
})

export const {increase, decrease, removeItem, clearCart, calulateTotals} = cartSlice.actions;
export default cartSlice.reducer;