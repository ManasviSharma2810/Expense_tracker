import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
import UserReducer from '../redux/slice'
const MyStore = configureStore({
    reducer:{
        user : UserReducer
    }
})
export default MyStore