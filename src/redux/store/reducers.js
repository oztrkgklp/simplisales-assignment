import { combineReducers } from "@reduxjs/toolkit";
import reducers from "./../slices";

// Combine reducers and combine them into a single reducer.
const reducer = combineReducers({
    restaurants: reducers.restaurants.reducer,
    restaurant: reducers.restaurant.reducer,
    isSignedIn: reducers.isSignedIn.reducer,
    user: reducers.user.reducer,
    pastOrders: reducers.pastOrders.reducer,
    order: reducers.order.reducer,
});

export default reducer;
