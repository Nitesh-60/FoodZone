import { createSlice } from "@reduxjs/toolkit";

const restruantMenusSlice = createSlice(
    {
        name: "restruantMenu",
        initialState: {
            restruantMenuList: null
        },
        reducers:{
            addRestruantMenuList: (state, action)=>{
                state.restruantMenuList = action.payload
            }
        }
    }
)

export const {addRestruantMenuList} = restruantMenusSlice.actions

export default restruantMenusSlice.reducer;