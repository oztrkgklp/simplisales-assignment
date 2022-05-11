import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { graphQLService } from "/services";

//#region Slice
const { actions, reducer } = createSlice({
    name: "Restaurants",
    initialState: {
        value: [],
    },
    reducers: {
        setRestaurants: (state, action) => {
            state.value = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getRestaurants.fulfilled, (state, action) => {});
        builder.addCase(getRestaurants.rejected, (state, action) => {});
    },
});
//#endregion Slice

//#region Thunks
const getRestaurants = createAsyncThunk("getRestaurants", async (params, ThunkAPI) => {
    var response = await graphQLService.getRestaurants(params.delivery, params.index, params.limit).then((result) => ThunkAPI.dispatch(actions.setRestaurants(result.data)));
    return response;
});
//#endregion Thunks

export { getRestaurants, actions };
export default reducer;
