import { createSlice } from "@reduxjs/toolkit";
import {setToken, getToken, removeToken} from "@/utils";

const userStore = createSlice({
    name: "user",
    initialState: {
        accessToken: getToken() || '',
    },
    reducers: {
        setAccessToken(state, action){
            state.accessToken = action.payload
            setToken(action.payload)
        },
        clearUserInfo(state) {
            state.accessToken = ''
            removeToken()
        }
    }
})

const { setAccessToken, clearUserInfo } = userStore.actions

const userReducer = userStore.reducer

export { setAccessToken, clearUserInfo }
export default userReducer