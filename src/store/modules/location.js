import { createSlice } from "@reduxjs/toolkit";

const LocationStore = createSlice({
    name: "location",
    initialState: {
        latitude: 0.0,
        longitude: 0.0,
        city: "未知",
        ward: "未知",
        displayAddress: "未知"
    },
    reducers: {
        setLocation(state, action){
            state.latitude = action.payload.latitude
            state.longitude = action.payload.longitude
            state.city = action.payload.city
            state.ward = action.payload.ward
            state.displayAddress = action.payload.displayAddress
        }
    }
})

const {setLocation} = LocationStore.actions

const locationReducer = LocationStore.reducer

export { setLocation }
export default locationReducer