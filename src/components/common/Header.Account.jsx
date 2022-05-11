import React, {useState} from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Grid, Menu, MenuItem } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Account = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="app-bar-icon">
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
                <AccountCircleIcon className="drawer-icons" />
            </IconButton>
            <Menu
                id="profile-icon"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                PaperProps={{
                    style: {
                        backgroundColor: "#365379",
                        color: "#d3d2df",
                    },
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem style={{ color: "#d3d2df", display: "flex", alignItems: "center" }} onClick={handleClose}>
                    <AccountCircleIcon /> <div className="profile-menu-items">Profile</div>
                </MenuItem>
                <MenuItem style={{ color: "red", display: "flex", alignItems: "center" }} onClick={handleClose}>
                    <LogoutIcon /> <div className="profile-menu-items">Logout</div>
                </MenuItem>
            </Menu>
        </div>
    );
};

export default Account;
