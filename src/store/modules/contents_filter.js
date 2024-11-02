import {createSlice} from "@reduxjs/toolkit";

export const ContentsFilterMap = {
    0: {text: "全ての商品", urlParam: "all"},
    1: {text: "販売中のみ", urlParam: "publishing"},
}

export const ContentsOrderMap = {
    0: {text: "新着順", urlParam: "latest"},
    1: {text: "値段の安い順", urlParam: "cheapest"},
    2: {text: "値段の高い順", urlParam: "highest"},
    3: {text: "いいね順", urlParam: "most-liked"},
}

const contentsFilterStore = createSlice({
    name: "contents_filter",
    initialState: {
        selectedFilter: 0,
        selectedOrder: 0
    },
    reducers: {
        setSelectedFilter(state, action) {
            state.selectedFilter = action.payload;
        },
        setSelectedOrder(state, action) {
            state.selectedOrder = action.payload;
        }
    }
})

const { setSelectedFilter, setSelectedOrder } = contentsFilterStore.actions

const contentsFilterReducer = contentsFilterStore.reducer

export { setSelectedFilter, setSelectedOrder }
export default contentsFilterReducer