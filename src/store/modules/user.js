import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
    name: "user",
    initialState: {
        userId: -1
    },
    reducers: {
        setUserId(state, action){
            state.userId = action.payload
        }
    }
})

const {setUserId} = userStore.actions

const userReducer = userStore.reducer

export { setUserId }
export default userReducer