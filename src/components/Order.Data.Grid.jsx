import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import reducers from "/redux/slices";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@material-ui/core";

const OrderCardList = ({ setOpen }) => {
    const dispatch = useDispatch();
    // const orders = useSelector((state) => state.pastOrders.value);
    const orders = [
        {
            uid: "sfasfas",
            address: {
                addressLine1: "Lillieshall Road, London",
                addresLine2: "",
                city: {
                    name: "London",
                },
                country: {
                    name: "England",
                },
                fullName: "Ahmet Dogan",
                flatNumber: "13",
            },
            restaurant: {
                name: "Coocina Burgers",
                contactMobileNumber: "+442034892525",
            },
            total: 24.95,
            orderDate: "2019-02-15T16:58:29Z",
            earnedPoints: 4900,
            deliveryFee: 2.5,
            items: [
                {
                    amount: 10.49,
                    totalAmount: 21.98,
                    quantity: 2,
                    name: "Pink Chargrilled Burger",
                    description:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione perferendis dignissimos error fuga, sed itaque ea, ipsam sunt saepe sapiente quod provident iure autem tempora? Deleniti officiis ea veniam nobis.",
                    options: [
                        {
                            multipleSelection: 1,
                            name: "Select Bun",
                            values: [
                                {
                                    amount: 0,
                                    name: "Pink Chargrilled Burger",
                                    quantity: 1,
                                    quantityAble: 1,
                                },
                            ],
                        },
                        {
                            multipleSelection: 1,
                            name: "Add Ons",
                            values: [
                                {
                                    amount: 0,
                                    name: "Potato Wedges",
                                    quantity: 1,
                                    quantityAble: 1,
                                },
                            ],
                        },
                    ],
                },
            ],
            deliveryTime: 45,
        },
        {
            uid: "sfasfas",
            address: {
                addressLine1: "Lillieshall Road, London",
                addresLine2: "",
                city: {
                    name: "London",
                },
                country: {
                    name: "England",
                },
                fullName: "Ahmet Dogan",
                flatNumber: "13",
            },
            restaurant: {
                name: "Coocina Burgers",
                contactMobileNumber: "+442034892525",
            },
            total: 24.95,
            orderDate: "2019-02-15T16:58:29Z",
            earnedPoints: 4900,
            deliveryFee: 2.5,
            items: [
                {
                    amount: 10.49,
                    totalAmount: 21.98,
                    quantity: 2,
                    name: "Pink Chargrilled Burger",
                    description:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione perferendis dignissimos error fuga, sed itaque ea, ipsam sunt saepe sapiente quod provident iure autem tempora? Deleniti officiis ea veniam nobis.",
                    options: [
                        {
                            multipleSelection: 1,
                            name: "Select Bun",
                            values: [
                                {
                                    amount: 0,
                                    name: "Pink Chargrilled Burger",
                                    quantity: 1,
                                    quantityAble: 1,
                                },
                            ],
                        },
                        {
                            multipleSelection: 1,
                            name: "Add Ons",
                            values: [
                                {
                                    amount: 0,
                                    name: "Potato Wedges",
                                    quantity: 1,
                                    quantityAble: 1,
                                },
                            ],
                        },
                    ],
                },
            ],
            deliveryTime: 45,
        },
        {
            uid: "sfasfas",
            address: {
                addressLine1: "Lillieshall Road, London",
                addresLine2: "",
                city: {
                    name: "London",
                },
                country: {
                    name: "England",
                },
                fullName: "Ahmet Dogan",
                flatNumber: "13",
            },
            restaurant: {
                name: "Coocina Burgers",
                contactMobileNumber: "+442034892525",
            },
            total: 24.95,
            orderDate: "2019-02-15T16:58:29Z",
            earnedPoints: 4900,
            deliveryFee: 2.5,
            items: [
                {
                    amount: 10.49,
                    totalAmount: 21.98,
                    quantity: 2,
                    name: "Pink Chargrilled Burger",
                    description:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione perferendis dignissimos error fuga, sed itaque ea, ipsam sunt saepe sapiente quod provident iure autem tempora? Deleniti officiis ea veniam nobis.",
                    options: [
                        {
                            multipleSelection: 1,
                            name: "Select Bun",
                            values: [
                                {
                                    amount: 0,
                                    name: "Pink Chargrilled Burger",
                                    quantity: 1,
                                    quantityAble: 1,
                                },
                            ],
                        },
                        {
                            multipleSelection: 1,
                            name: "Add Ons",
                            values: [
                                {
                                    amount: 0,
                                    name: "Potato Wedges",
                                    quantity: 1,
                                    quantityAble: 1,
                                },
                            ],
                        },
                    ],
                },
            ],
            deliveryTime: 45,
        },
    ];

    const [index, setIndex] = useState(0);
    const [limit, setLimit] = useState(9);

    const generateAddress = (order) => {
        const { addressLine1, addressLine2, city, country, flatNumber } = order.address;
        return addressLine1 + (addressLine2.length > 0 ? ` ${addressLine2}` : addresLine2) + ` Flat no:${flatNumber}` + ` ${city.name}` + ` ${country.name}`;
    };

    useEffect(() => {
        // dispatch(reducers.pastOrders.setPastOrders({ index, limit }));
    }, []);

    const columns = [
        { field: "id", headerName: "", width: 90, editable: false },
        {
            field: "restaurant",
            headerName: "Restaurant",
            width: 150,
            editable: false,
        },
        {
            field: "Amount($)",
            headerName: "Last name",
            width: 150,
            type: "number",
            editable: false,
            sortable: true,
        },
        {
            field: "deliveryTime",
            headerName: "Delivery Time",
            editable: false,
            sortable: false,
            width: 160,
            type: "number",
        },
        {
            field: "deliveryFee",
            headerName: "Delivery Fee",
            editable: false,
            sortable: false,
            width: 160,
            type: "number",
        },

        {
            field: "quantity",
            headerName: "Number of Products",
            width: 110,
            editable: false,
            sortable: false,
        },
        {
            field: "earnedPoints",
            headerName: "Earned Points",
            editable: false,
            sortable: false,
            width: 160,
            type: "number",
        },
        {
            field: "orderDate",
            headerName: "Order Date",
            editable: false,
            sortable: false,
            width: 160,
            type: "dateTime",
        },
        {
            field: "address",
            headerName: "Address",
            editable: false,
            sortable: false,
            width: 160,
        },
    ];

    return (
        <Box className="order-card-list-container">
            
        </Box>
    );
};

export default OrderCardList;
