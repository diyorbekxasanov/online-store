import  api  from "./reducers/Middleware/api";
import { configureStore } from "@reduxjs/toolkit";
import PushUser, { PushCart } from "./reducers/reducer/reducer";

const store = configureStore({
    reducer:{
        PushCart,
        PushUser
    },
    middleware:[
        api
    ]
})

export default store