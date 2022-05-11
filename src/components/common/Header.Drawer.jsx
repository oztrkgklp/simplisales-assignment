import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@material-ui/core";
import { Logout } from "@mui/icons-material";

const Drawer = () => {
    return (
        <div className="drawer-container">
            <Toolbar sx={{ backgroundColor: "#365379", borderRadius: "3px" }}>
                <Typography className="drawer-logo">Simplisales</Typography>
            </Toolbar>
            <Divider />
            <List>
                <ListItem key="Profile">
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon className="drawer-icons" />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem key="My Orders">
                    <ListItemButton>
                        <ListItemIcon>
                            <ShoppingBasketIcon className="drawer-icons" />
                        </ListItemIcon>
                        <ListItemText primary="My Orders" />
                    </ListItemButton>
                </ListItem>
                <ListItem key="Restaurants">
                    <ListItemButton>
                        <ListItemIcon>
                            <FastfoodIcon className="drawer-icons" />
                        </ListItemIcon>
                        <ListItemText primary="Restaurants" />
                    </ListItemButton>
                </ListItem>
                <div className="drawer-footer">
                <ListItem key="Logout">
                    <ListItemButton>
                        <ListItemIcon>
                            <Logout className="logout-icon" />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </ListItem>
                    <p>&copy; 2022 Gökalp Öztürk</p>
                </div>
            </List>
        </div>
    );
};

export default Drawer;
