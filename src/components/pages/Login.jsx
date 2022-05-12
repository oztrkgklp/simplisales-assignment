import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { graphQLService } from "/services";
import { useDispatch } from "react-redux";
import reducers from "/redux/slices";
import cookie from "react-cookies";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [success, setSuccess] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (success) dispatch(reducers.isSignedIn.setIsSignedIn(true));
    }, [success]);

    useEffect(() => {
        if (rememberMe && success) cookie.save(isSignedIn);
    }, [success, rememberMe]);

    const handleSubmit = (e) => {
        e.preventDefault();
        graphQLService
            .login(email, password)
            .then((result) => setSuccess(true))
            .catch((e) => console.log(e));
    };

    return (
        <div>
            <Container className="login-form-container" component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "#3465a4" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" onChange={(e) => setEmail(e.target.value)} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel onClick={(e) => setRememberMe(!rememberMe)} control={<Checkbox value="allowExtraEmails" color="primary" />} label="Remember me" />
                            </Grid>
                        </Grid>
                        <Button className="login-form-button" type="submit" fullWidth variant="contained" sx={{ borderRadius: "10px", backgroundColor: "#3465a4", mt: 3, mb: 2 }}>
                            Login
                        </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default Login;
