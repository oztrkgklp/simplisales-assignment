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
                        
                        <DialogContentText color={"#d3d2df"}>
                           
                        </DialogContentText>
                    </DialogContent>
                </div>
            </Dialog>
        </div>
    );
}
