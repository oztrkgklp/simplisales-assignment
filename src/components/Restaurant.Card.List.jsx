import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import reducers from "/redux/slices";
import RestaurantCard from "./Restaurant.Card";
import { Box, Card, CardContent, Grid } from "@material-ui/core";
import { CardHeader } from "@mui/material";
import { FastfoodOutlined } from "@mui/icons-material";
import Pagination from "@mui/material/Pagination";

const RestaurantCardList = ({ setOpen }) => {
    const [delivery, setDelivery] = useState(false);
    const [index, setIndex] = useState(0);
    const [limit, setLimit] = useState(9);

    const dispatch = useDispatch();
    const restaurants = useSelector((state) => state.restaurants.value);

    useEffect(() => {
        dispatch(reducers.restaurants.getRestaurants({delivery, index, limit}));
    }, [delivery]);

    return (
        <Box className="restaurant-card-list-container">
            <CardHeader avatar={<FastfoodOutlined />} title="Restaurants" className="card-header" />
            <CardContent>
                <div className="restaurant-list">
                    <Grid container spacing={5}>
                        {restaurants.map((restaurant) => {
                            return (
                                <Grid item xs={12} md={6} lg={4}>
                                    <RestaurantCard
                                        restaurant={restaurant}
                                        onClick={() => {
                                            dispatch(reducers.restaurant.setRestaurant(restaurant));
                                            setOpen(true);
                                        }}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </div>
                <div className="pagination">
                    <Pagination count={1} size="small" />
                </div>
            </CardContent>
        </Box>
    );
};

export default RestaurantCardList;
