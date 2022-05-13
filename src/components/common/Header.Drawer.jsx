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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import reducers from "/redux/slices";
import routes from "/routes";

const Drawer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className="drawer-container">
            <Toolbar
                sx={{ backgroundColor: "#365379", borderRadius: "3px", cursor: "pointer" }}
                onClick={() => {
                    navigate(routes.Home);
                }}
            >
                <Typography className="drawer-logo">Simplisales</Typography>
            </Toolbar>
            <Divider />
            <List>
                <ListItem
                    key="Profile"
                    onClick={() => {
                        dispatch(reducers.user.getUser());
                        navigate(routes.Profile);
                    }}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon className="drawer-icons" />
                        </ListItemIcon>
                        <ListItemText primary="My Profile" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem
                    key="Restaurants"
                    onClick={() => {
                        dispatch(reducers.restaurants.getRestaurants({ delivery: false, index: 0, limit: 10 }));
                        navigate(routes.Restaurants);
                    }}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <FastfoodIcon className="drawer-icons" />
                        </ListItemIcon>
                        <ListItemText primary="Restaurants" />
                    </ListItemButton>
                </ListItem>
                <ListItem
                    key="My Orders"
                    onClick={() => {
                        dispatch(reducers.pastOrders.getPastOrders({ index: 0, limit: 10 }));
                        navigate(routes.Orders);
                    }}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <ShoppingBasketIcon className="drawer-icons" />
                        </ListItemIcon>
                        <ListItemText primary="My Orders" />
                    </ListItemButton>
                </ListItem>
                <div className="drawer-footer">
                    <ListItem
                        key="Logout"
                        onClick={() => {
                            dispatch(reducers.isSignedIn.setIsSignedIn(false));
                            navigate(routes.Login);
                        }}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <Logout className="logout-icon" />
                            </ListItemIcon>
                            <ListItemText style={{ textDecoration: "none !important", color: "red" }} primary="Logout" />
                        </ListItemButton>
                    </ListItem>
                    <p>&copy; 2022 Gökalp Öztürk</p>
                </div>
            </List>
        </div>
    );
};

export default Drawer;
