import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import reducers from "/redux/slices";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Card, CardHeader, Grid } from "@material-ui/core";
import { ShoppingBagOutlined } from "@mui/icons-material";

const OrderDataGrid = ({ setOpen }) => {
    const dispatch = useDispatch();
    // const orders = useSelector((state) => state.pastOrders.value);
    const orders = [
        {
            uid: "sfasfas",
            address: {
                addressLine1: "Lillieshall Road, London",
                addressLine2: "",
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
                addressLine2: "",
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
                addressLine2: "",
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
    const [limit, setLimit] = useState(5);

    const generateAddress = (order) => {
        const { addressLine1, addressLine2, city, country, flatNumber } = order.address;
        return addressLine1 + (addressLine2 === "" ? ` ${addressLine2}` : addressLine2) + ` Flat no:${flatNumber}` + ` ${city.name}` + ` ${country.name}`;
    };

    useEffect(() => {
        // dispatch(reducers.pastOrders.setPastOrders({ index, limit }));
    }, []);

    const columns = [
        { field: "id", headerName: "", width: 90, editable: false },
        {
            field: "restaurant",
            headerName: "Restaurant",
            minWidth: 120,
            flex: 1,
            editable: false,
        },
        {
            field: "amount",
            headerName: "Amount($)",
            flex: 1,
            type: "number",
            editable: false,
            minWidth: 100,
            sortable: true,
        },
        {
            field: "quantity",
            headerName: "Number of Products",
            minWidth: 120,
            flex: 1,
            editable: false,
            sortable: false,
        },
        {
            field: "orderDate",
            headerName: "Order Date",
            editable: false,
            sortable: true,
            minWidth: 130,
            flex: 1,
            type: "dateTime",
        },
        {
            field: "deliveryTime",
            headerName: "Delivery Time",
            editable: false,
            sortable: true,
            minWidth: 100,
            flex: 1,
            type: "number",
        },
        {
            field: "deliveryFee",
            headerName: "Delivery Fee",
            editable: false,
            sortable: true,
            minWidth: 100,
            flex: 1,
            type: "number",
        },
        {
            field: "earnedPoints",
            headerName: "Earned Points",
            editable: false,
            sortable: true,
            minWidth: 100,
            flex: 1,
            type: "number",
        },
        {
            field: "address",
            headerName: "Address",
            editable: false,
            sortable: false,
            minWidth: 300,
            flex: 1,
        },
    ];

    const rows = orders.map((order, index) => {
        let quantity = 0;
        order.items.map((item) => (quantity += item.quantity));
        return {
            id: index + 1,
            restaurant: order.restaurant.name,
            amount: order.total,
            quantity: quantity,
            orderDate: order.orderDate,
            deliveryFee: order.deliveryFee,
            deliveryTime: order.deliveryTime,
            earnedPoints: order.earnedPoints,
            address: generateAddress(order),
            uid: order.uid,
        };
    });

    return (
        <div>
            <Box className="order-card-list-container">
                <Grid container>
                    <Grid xs={12} md={12} lg={12}>
                        <CardHeader avatar={<ShoppingBagOutlined />} title="My Orders" className="card-header" />
                    </Grid>
                </Grid>
                <div className="data-grid-container">
                    <Card className="card">
                        <DataGrid
                            onCellClick={(cell, event) => {
                                dispatch(reducers.order.setOrder(orders.filter((order) => order.uid === cell.row.uid)[0]));
                                setOpen(true)
                            }}
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            className="grid"
                            disableMultipleSelection={true}
                        />
                    </Card>
                </div>
            </Box>
        </div>
    );
};

export default OrderDataGrid;
