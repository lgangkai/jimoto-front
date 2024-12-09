import {createSlice} from "@reduxjs/toolkit";

export const ContentsTypeMap = {
    0: {text: "販売ポスト", urlParam: "sell"},
    1: {text: "購入ポスト", urlParam: "buy"}
}

export const ContentsFilterMap = {
    0: {text: "全ての商品", urlParam: "all"},
    1: {text: "販売中のみ", urlParam: "publishing"},
}

export const ContentsOrderMap = {
    0: {text: "新着順", urlParam: "latest"},
    1: {text: "場所の近い順", urlParam: "nearest"},
    2: {text: "値段の安い順", urlParam: "cheapest"},
    3: {text: "値段の高い順", urlParam: "highest"},
    4: {text: "いいね順", urlParam: "most-liked"},
}

export const DefaultPageSize = 18

const contentsFilterStore = createSlice({
    name: "contents_filter",
    initialState: {
        selectedType: 0,
        selectedFilter: 0,
        selectedOrder: 0,
        page: {
            page: 1,
            pageSize: DefaultPageSize,
        },
    },
    reducers: {
        setSelectedType(state, action) {
            state.selectedType = action.payload;
        },
        setSelectedFilter(state, action) {
            state.selectedFilter = action.payload;
        },
        setSelectedOrder(state, action) {
            state.selectedOrder = action.payload;
        },
        setPage(state, action) {
            state.page = action.payload;
        }
    }
})

const { setSelectedType, setSelectedFilter, setSelectedOrder, setPage } = contentsFilterStore.actions

const contentsFilterReducer = contentsFilterStore.reducer

export { setSelectedType, setSelectedFilter, setSelectedOrder, setPage }
export default contentsFilterReducer