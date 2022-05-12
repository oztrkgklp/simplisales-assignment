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

    const restaurant = useSelector((state) => state.restaurant.value);

    const getTypes = (types) => {
        let val = "";
        types.map((type) => {
            val += type.name + ", ";
        });
        return val.slice(0, -2);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="restaurant-dialog">
            <Dialog
                PaperProps={{ sx: { backgroundColor: "#365885 !important", color: "#d3d2df !important" } }}
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <div className="restaurant-detail-dialog">
                    <DialogTitle>
                        <div className="is-new">
                            <FiberNewIcon className="icon" />
                            {restaurant.name}

                            <div onClick={handleClose}>
                                <CloseIcon className="dialog-close-icon" />
                            </div>
                        </div>
                    </DialogTitle>
                    <DialogContent className="dialog-info">
                        <div className={"detail-is-open " + (restaurant.open ? "open" : "closed")}>
                            {restaurant.open ? (
                                <div className="is-open">
                                    <EventAvailableIcon /> <p>Open</p>
                                </div>
                            ) : (
                                <div className="is-open">
                                    <EventBusyIcon /> <p>Closed</p>
                                </div>
                            )}
                        </div>
                        <img src={restaurant.picture.url} />

                        <DialogContentText color={"#d3d2df"}>
                            <Card className="info">
                                <div className="entry">
                                    <Grid container>
                                        <Grid xs={6} md={6} lg={6} xl={6}>
                                            <div className="keys">Location</div>
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6}>
                                            <div className="values">{restaurant.restaurantAddressSlugCityName}</div>
                                        </Grid>
                                    </Grid>
                                </div>
                                <Divider />
                                <div className="entry">
                                    <Grid container>
                                        <Grid xs={6} md={6} lg={6} xl={6}>
                                            <div className="keys">Postal Code</div>
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6}>
                                            <div className="values">{restaurant.restaurantAddressPostalCode}</div>
                                        </Grid>
                                    </Grid>
                                </div>
                                <Divider />
                                <div className="entry">
                                    <Grid container>
                                        <Grid xs={6} md={6} lg={6} xl={6}>
                                            <div className="keys">Distance</div>
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6}>
                                            <div className="values">{restaurant.distance}</div>
                                        </Grid>
                                    </Grid>
                                </div>
                                <Divider />
                                <div className="entry">
                                    <Grid container>
                                        <Grid xs={6} md={6} lg={6} xl={6}>
                                            <div className="keys">Minimum Order Amount</div>
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6}>
                                            <div className="values">{restaurant.minOrderAmount}</div>
                                        </Grid>
                                    </Grid>
                                </div>
                                <Divider />
                                <div className="entry">
                                    <Grid container>
                                        <Grid xs={6} md={6} lg={6} xl={6}>
                                            <div className="keys">Delivery</div>
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6}>
                                            <div className="values">{restaurant.delivery ? <CheckIcon/> : <CloseIcon />}</div>
                                        </Grid>
                                    </Grid>
                                </div>
                                <Divider />
                                <div className="entry">
                                    <Grid container>
                                        <Grid xs={6} md={6} lg={6} xl={6}>
                                            <div className="keys">Average Score</div>
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6}>
                                            <div className="values">{restaurant.avgScore}</div>
                                        </Grid>
                                    </Grid>
                                </div>
                                <Divider />
                                <div className="entry">
                                    <Grid container>
                                        <Grid xs={6} md={6} lg={6} xl={6}>
                                            <div className="keys">Types</div>
                                        </Grid>
                                        <Grid xs={6} md={6} lg={6} xl={6}>
                                            <div className="values">{getTypes(restaurant.types)}</div>
                                        </Grid>
                                    </Grid>
                                </div>
                                <Divider />
                            </Card>
                        </DialogContentText>
                    </DialogContent>
                </div>
            </Dialog>
        </div>
    );
}
