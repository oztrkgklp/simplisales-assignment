import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { graphQLService } from "/services";

//#region Slice
const { actions, reducer } = createSlice({
    name: "Orders",
    initialState: {
        value: {
            uid: "0",
            address: {
                addressLine1: "",
                addressLine2: "",
                city: {
                    name: "",
                },
                country: {
                    name: "",
                },
                fullName: "",
                flatNumber: "",
            },
            restaurant: {
                name: "",
                contactMobileNumber: "",
                address: {
                    addressLine1: "",
                    addressLine2: "",
                    city: {
                        name: "",
                    },
                    country: {
                        name: "",
                    },
                    fullName: "",
                    flatNumber: "",
                },
            },
            total: 0.0,
            orderDate: "",
            earnedPoints: 0,
            deliveryFee: 0.0,
            items: [
                {
                    amount: 0.0,
                    totalAmount: 0.0,
                    quantity: 0,
                    name: "",
                    description: "",
                    options: [
                        {
                            multipleSelection: 0,
                            name: "",
                            values: [
                                {
                                    amount: 0,
                                    name: "",
                                    quantity: 0,
                                    quantityAble: 0,
                                },
                            ],
                        },
                    ],
                },
            ],
            deliveryTime: 0,
        },
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
