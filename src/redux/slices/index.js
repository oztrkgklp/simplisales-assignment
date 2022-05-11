import restaurantsReducer, { getRestaurants, actions as restaurantsActions } from "./restaurantsSlice";
import restaurantReducer, { getRestaurant, actions as restaurantActions } from "./restaurantSlice";
import isSignedInReducer, { actions as isSignedInActions } from "./isSignedInSlice";
import userReducer, { getUser, actions as userActions } from "./userSlice";
import pastOrdersReducer, { getPastOrders, actions as pastOrdersActions } from "./pastOrdersSlice";
import orderReducer, { getOrder, actions as orderActions } from "./orderSlice";


export default {
    restaurants: {
        reducer: restaurantsReducer,
        getRestaurants: getRestaurants,
        setRestaurants: restaurantsActions.setRestaurants,
    },
    restaurant: {
        reducer: restaurantReducer,
        getRestaurants: getRestaurant,
        setRestaurants: restaurantActions.setRestaurants,
    },
    isSignedIn: {
        reducer: isSignedInReducer,
        setIsSignedIn: isSignedInActions.setIsSignedIn,
    },
    user: {
        reducer: userReducer,
        getUser: getUser,
        setUser: userActions.setUser,
    },
    pastOrders: {
        reducer: pastOrdersReducer,
        getPastOrders: getPastOrders,
        setPastOrders: pastOrdersActions.setPastOrders,
    },
    order: {
        reducer: orderReducer,
        getOrder: getOrder,
        setOrder: orderActions.setOrder,
    },
};
