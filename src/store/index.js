import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/user";
import locationReducer from "./modules/location";
import contentsFilterReducer from "@/store/modules/contents_filter";

const store = configureStore({
    reducer: {
        user: userReducer,
        location: locationReducer,
        contents_filter: contentsFilterReducer
    }
})

export default store;