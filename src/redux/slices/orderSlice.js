import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { graphQLService } from "/services";

//#region Slice
const { actions, reducer } = createSlice({
    name: "Orders",
    initialState: {
        value: {},
    },
    reducers: {
        setOrder: (state, action) => {
            state.value = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getOrder.fulfilled, (state, action) => {});
        builder.addCase(getOrder.rejected, (state, action) => {});
    },
});
//#endregion Slice

//#region Thunks
const getOrder = createAsyncThunk("getOrder", async (params, ThunkAPI) => {
    var response = await graphQLService.getOrder(params).then((result) => ThunkAPI.dispatch(actions.setOrder(result.data)));
    return response;
});
//#endregion Thunks

export { getOrder, actions };
export default reducer;
