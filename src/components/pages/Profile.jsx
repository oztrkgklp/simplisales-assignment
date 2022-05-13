import { Box, Grid, Divider } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import reducers from "/redux/slices";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { CloseOutlined } from "@material-ui/icons";
import CheckIcon from "@mui/icons-material/Check";

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);

    useEffect(() => {
        dispatch(reducers.user.getUser());
    }, []);

    const generateAddress = (address) => {
        const { addressLine1, addressLine2, city, country, flatNumber } = address;
        return addressLine1 + (addressLine2 === "" ? ` ${addressLine2}` : addressLine2) + ` Flat no:${flatNumber}` + ` ${city.name}` + ` ${country.name}`;
    };

    console.log(user);

    return (
        <div className="page">
            <Box className="profile-container">
                <div className="profile-header">
                    <AccountCircleIcon className="profile-header-icon" />
                    <div className="profile-header-text">My Profile</div>
                    <div className="profile-bar"></div>
                </div>
                <Grid container className="grid-container">
                    <Grid xs={12} md={12} lg={6} xl={6}>
                        <Grid container>
                            <Grid xs={12} md={12} lg={12} xl={12} className="subtitle">
                                Personal Info
                            </Grid>
                            <Divider />
                            <Grid xs={6} md={6} lg={6} xl={6} className="keys">
                                First Name
                            </Grid>
                            <Grid xs={6} md={6} lg={6} xl={6} className="values">
                                {user.firstName}
                            </Grid>
                            <Grid xs={6} md={6} lg={6} xl={6} className="keys">
                                Last Name
                            </Grid>
                            <Grid xs={6} md={6} lg={6} xl={6} className="values">
                                {user.lastName}
                            </Grid>
                            <Grid xs={6} md={6} lg={6} xl={6} className="keys">
                                E-mail
                            </Grid>
                            <Grid xs={6} md={6} lg={6} xl={6} className="values">
                                {user.email}
                            </Grid>
                            <Grid xs={6} md={6} lg={6} xl={6} className="keys">
                                Phone
                            </Grid>
                            <Grid xs={6} md={6} lg={6} xl={6} className="values">
                                {user.mobileNumber}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={12} md={12} lg={6} xl={6}>
                        <Grid container>
                            <Grid xs={12} md={12} lg={12} xl={12} className="subtitle">
                                Addresses
                            </Grid>
                            <Divider />
                            {user.addresses.map((address, index) => (
                                <Grid container>
                                    <Grid xs={6} md={6} lg={6} xl={6} className="keys">
                                        Address {index + 1}
                                    </Grid>
                                    <Grid xs={6} md={6} lg={6} xl={6} className="values">
                                        {generateAddress(address)}
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid xs={12} md={12} lg={12} xl={12} className="subtitle">
                        Account Verification
                    </Grid>
                    <Grid xs={12} md={12} lg={6} xl={6}>
                        <Grid container className="profile-verified">
                            <Grid xs={6} md={6} lg={6} xl={6} className="keys">
                                Email Verified
                            </Grid>
                            <Grid xs={6} md={6} lg={6} xl={6} className="values">
                                {user.emailVerified ? <CheckIcon /> : <CloseOutlined color="error" />}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={12} md={12} lg={6} xl={6}>
                        <Grid container className="profile-verified">
                            <Grid xs={6} md={6} lg={6} xl={6} className="keys">
                                SMS Verified
                            </Grid>
                            <Grid xs={6} md={6} lg={6} xl={6} className="values">
                                {user.smsVerified ? <CheckIcon /> : <CloseOutlined color="error" />}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Profile;
