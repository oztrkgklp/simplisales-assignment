import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { Card, Divider, Grid } from "@material-ui/core";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import FiberNewIcon from "@mui/icons-material/FiberNew";

export default function ResponsiveDialog({ open, setOpen }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    const order = useSelector((state) => state.order.value);
    const orders = useSelector((state) => state.pastOrders.value);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="order-dialog">
            <Dialog
                PaperProps={{ sx: { backgroundColor: "#365885 !important", color: "#d3d2df !important" } }}
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <div className="order-detail-dialog">
                    <DialogTitle>
                        <div className="title">
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
                                        <Grid xs={12} md={12} lg={12} xl={12} className="subtitle">Product Info</Grid>
                                        <Divider />
                                        <Grid xs={6} md={6} lg={6} xl={6} className="keys">
                                            asdasd
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="values">
                                            {" "}
                                            asdads
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider />
                                <Grid xs={12} md={12} lg={6} xl={6}>
                                    <Grid container>
                                    <Grid xs={12} md={12} lg={12} xl={12} className="subtitle">Restaurant Info</Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="keys">
                                            {" "}
                                            asdasd{" "}
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="values">
                                            {" "}
                                            asdasd
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider />
                                <Grid xs={12} md={12} lg={6} xl={6}>
                                    <Grid container>
                                    <Grid xs={12} md={12} lg={12} xl={12} className="subtitle">Customer Info</Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="keys">
                                            {" "}
                                            asdasd{" "}
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="values">
                                            {" "}
                                            asdasd
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider />
                                <Grid xs={12} md={12} lg={6} xl={6}>
                                    <Grid container>
                                    <Grid xs={12} md={12} lg={12} xl={12} className="subtitle">Payment Info</Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="keys">
                                            {" "}
                                            asdasd{" "}
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="values">
                                            {" "}
                                            asdasd
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider />
                                <Grid lg={1} xl={1}></Grid>
                                <Grid xs={12} md={12} lg={10} xl={10}>
                                    <Grid container>
                                    <Grid xs={12} md={12} lg={12} xl={12} className="subtitle">Other</Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="keys">
                                            {" "}
                                            asdasd{" "}
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6} className="values">
                                            {" "}
                                            asdasd
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
