import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { graphQLService } from "/services";

//#region Slice
const { actions, reducer } = createSlice({
    name: "Restaurant",
    initialState: [],
    reducers: {
        setRestaurant: (state, action) => {
            state.value = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getRestaurant.fulfilled, (state, action) => {});
        builder.addCase(getRestaurant.rejected, (state, action) => {});

    },
});
//#endregion Slice

//#region Thunks
const getRestaurant = createAsyncThunk("getRestaurant", async (params, ThunkAPI) => {
    var response = await graphQLService.getRestaurant(params).then((result) => ThunkAPI.dispatch(actions.setRestaurants(result.data)));
    return response;
});
//#endregion Thunks

export { getRestaurant, actions };
export default reducer;
