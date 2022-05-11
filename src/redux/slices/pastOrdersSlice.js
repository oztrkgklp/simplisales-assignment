import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { graphQLService } from "/services";

//#region Slice
const { actions, reducer } = createSlice({
    name: "PastOrders",
    initialState: {
        value: [],
    },
    reducers: {
        setPastOrders: (state, action) => {
            state.value = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getPastOrders.fulfilled, (state, action) => {});
        builder.addCase(getPastOrders.rejected, (state, action) => {});
    },
});
//#endregion Slice

//#region Thunks
const getPastOrders = createAsyncThunk("getPastOrders", async (params, ThunkAPI) => {
    var response = await graphQLService.getPastOrders(params.index, params.limit).then((result) => ThunkAPI.dispatch(actions.setPastOrders(result.data)));
    return response;
});
//#endregion Thunks

export { getPastOrders, actions };
export default reducer;
