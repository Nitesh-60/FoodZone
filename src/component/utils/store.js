import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import restruantMenusSlice from "./restruantMenusSlice";

const store = configureStore({
    reducer:{
        cart: cartSlice,
        restruantMenu: restruantMenusSlice
    }
})

export default store;