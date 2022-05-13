import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { Card, Divider, Grid } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";

export default function ResponsiveDialog({ open, setOpen }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    const order = useSelector((state) => state.order.value);

    const generateRestaurantAddress = (address) => {
        const { addressLine1, addressLine2, city, country, flatNumber } = address;
        return addressLine1 + (addressLine2 === "" ? ` ${addressLine2}` : addressLine2) + ` ${city.name}` + ` ${country.name}`;
    };

    const generateCustomerAddress = (address) => {
        const { addressLine1, addressLine2, city, country, flatNumber } = address;
        return addressLine1 + (addressLine2 === "" ? ` ${addressLine2}` : addressLine2) + ` Flat no:${flatNumber}` + ` ${city.name}` + ` ${country.name}`;
    };

    const generateItems = (items) => {
        var itemStr = "";
        items.map((item) => {
            itemStr += item.name + ", ";
        });
        return itemStr.slice(0, -2);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="order-dialog">
            <Dialog
                PaperProps={{ sx: { backgroundColor: "#365885 !important", color: "#d3d2df !important" } }}
                fullScreen={fullScreen}
                open={open}
                maxWidth="lg"
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <div className="order-detail-dialog">
                    <DialogTitle>
                        <div className="title">
                            {order.status === "ORDER_COMPLETED" && <div className="order-completed"><EventAvailableIcon color="green"/><div className="order-completed-text">Order Completed</div></div>}
                            <div className="text">Order #{order.uid}</div>

                            <div onClick={handleClose}>
                                <CloseIcon className="dialog-close-icon" />
                            </div>
                        </div>
                    </DialogTitle>
                    <DialogContent className="dialog-info">
                        <Card className="dialog-card">
                            <Grid container>
                                <Grid xs={12} md={12} lg={6} xl={6}>
                                    <Grid container>
                                        <Grid xs={12} md={12} lg={12} xl={12} className="subtitle">
                                            Product Info
                                        </Grid>
                                        <Divider />
                                        <Grid xs={6} md={6} lg={6} xl={6} className="keys">
                                            Items
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="values">
                                            {generateItems(order.items ? order.items : [])}
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="keys">
                                            Subtotal(£) 
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="values">
                                            {order.subTotal}
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="keys">
                                            Total Price(£)
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="values">
                                            {order.total}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider />
                                <Grid xs={12} md={12} lg={6} xl={6}>
                                    <Grid container>
                                        <Grid xs={12} md={12} lg={12} xl={12} className="subtitle">
                                            Restaurant Info
                                        </Grid>
                                        <Divider />
                                        <Grid xs={6} md={6} lg={6} xl={6} className="keys">
                                            Name
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="values">
                                            {order.restaurant.name}
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="keys">
                                            Address
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="values">
                                            {generateRestaurantAddress(order.restaurant.address)}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider />
                                <Grid xs={12} md={12} lg={6} xl={6}>
                                    <Grid container>
                                        <Grid xs={12} md={12} lg={12} xl={12} className="subtitle">
                                            Customer Info
                                        </Grid>
                                        <Divider />
                                        <Grid xs={6} md={6} lg={6} xl={6} className="keys">
                                            Name
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="values">
                                            {order.address.fullName}
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="keys">
                                            Address
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="values">
                                            {generateCustomerAddress(order.address)}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider />
                                <Grid xs={12} md={12} lg={6} xl={6}>
                                    <Grid container>
                                        <Grid xs={12} md={12} lg={12} xl={12} className="subtitle">
                                            Payment Info
                                        </Grid>
                                        <Divider />
                                        <Grid xs={6} md={6} lg={6} xl={6} className="keys">
                                            Tip
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="values">
                                            {order.tip.amount}
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="keys">
                                            Refund
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="values">
                                            {order.refund.amount}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider />
                                <Grid lg={1} xl={1}></Grid>
                                <Grid xs={12} md={12} lg={10} xl={10}>
                                    <Grid container>
                                        <Grid xs={12} md={12} lg={12} xl={12} className="subtitle">
                                            Other
                                        </Grid>
                                        <Divider />
                                        <Grid xs={6} md={6} lg={6} xl={6} className="keys">
                                            Order Date
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="values">
                                            {order.orderDate}
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="keys">
                                            Delivery Time (minutes)
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="values">
                                            {order.deliveryTime}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid lg={1} xl={1}></Grid>
                            </Grid>
                        </Card>
                    </DialogContent>
                </div>
            </Dialog>
        </div>
    );
}
