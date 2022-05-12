import { createSlice } from "@reduxjs/toolkit";

//#region Slice
const { actions, reducer } = createSlice({
    name: "IsSignedIn",
    initialState: {
        value: true,
    },
    reducers: {
        setIsSignedIn: (state, action) => {
            state.value = action.payload;
        },
    },
});
//#endregion Slice

//#region Thunks
//#endregion Thunks

export { actions };
export default reducer;
