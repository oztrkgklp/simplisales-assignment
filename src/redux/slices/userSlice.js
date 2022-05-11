import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { graphQLService } from "/services";

//#region Slice
const { actions, reducer } = createSlice({
    name: "User",
    initialState: {
        value: {},
    },
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUser.fulfilled, (state, action) => {});
        builder.addCase(getUser.rejected, (state, action) => {});
    },
});
//#endregion Slice

//#region Thunks
const getUser = createAsyncThunk("getUser", async (params, ThunkAPI) => {
    var response = await graphQLService.getUserInfo().then((result) => ThunkAPI.dispatch(actions.setUser(result.data)));
    return response;
});
//#endregion Thunks

export { getUser, actions };
export default reducer;
