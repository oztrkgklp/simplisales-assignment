import { combineReducers } from "@reduxjs/toolkit";
import reducers from "./../slices";

// Combine reducers and combine them into a single reducer.
const reducer = combineReducers({
    test: reducers.test.reducer,
});

export default reducer;
