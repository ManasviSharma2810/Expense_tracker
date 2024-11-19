import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name: 'user',
    initialState: {
      data: [],
    },
    reducers:{
     addUser(state,action)  {
        state.data.push(action.payload)
     } 
    }

});
export const {addUser} = Slice.actions;
export default Slice.reducer
