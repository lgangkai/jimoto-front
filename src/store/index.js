import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/user";
import locationReducer from "./modules/location";

const store = configureStore({
    reducer: {
        user: userReducer,
        location: locationReducer,
    }
})

export default store;