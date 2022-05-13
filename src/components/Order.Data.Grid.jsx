import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import reducers from "/redux/slices";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Card, CardHeader, Grid } from "@material-ui/core";
import { ShoppingBagOutlined } from "@mui/icons-material";

const OrderDataGrid = ({ setOpen }) => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.pastOrders.value);

    const [index, setIndex] = useState(0);
    const [limit, setLimit] = useState(50);

    const generateAddress = (order) => {
        const { addressLine1, addressLine2, city, country, flatNumber } = order.address;
        return addressLine1 + (addressLine2 === "" ? ` ${addressLine2}` : addressLine2) + ` Flat no:${flatNumber}` + ` ${city.name}` + ` ${country.name}`;
    };

    useEffect(() => {
        dispatch(reducers.pastOrders.getPastOrders({ index, limit }));
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
                                setOpen(true);
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
