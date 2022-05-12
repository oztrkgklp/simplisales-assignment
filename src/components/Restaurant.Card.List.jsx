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
    // const restaurants = useSelector((state) => state.restaurants.value);
    const restaurants = [
        {
            picture: {
                url: "/bg.jpg",
            },
            name: "Restaurant 1",
            restaurantAddressSlugCityName: "London",
            isNew: true,
            open: true,
            restaurantAddressPostalCode: "SW11 4LX",
            types: [
                {
                    name: "Fish and chips"
                },
                {
                    name: "Indian"
                }
            ],
            distance: 3555.76,
            minOrderAmount: 1,
            avgScore: 4,
            delivery: false,
        },
        {
            picture: {
                url: "/bg.jpg",
            },
            name: "Restaurant 1",
            restaurantAddressSlugCityName: "London",
            isNew: false,
            open: true,
            restaurantAddressPostalCode: "SW11 4LX",
            types: [
                {
                    name: "Fish and chips"
                },
                {
                    name: "Indian"
                }
            ],
            distance: 3555.76,
            minOrderAmount: 1,
            avgScore: 4,
            delivery: false,
        },
        {
            picture: {
                url: "/bg.jpg",
            },
            name: "Restaurant 1",
            restaurantAddressSlugCityName: "London",
            isNew: true,
            open: false,
            restaurantAddressPostalCode: "SW11 4LX",
            types: [
                {
                    name: "Fish and chips"
                },
                {
                    name: "Indian"
                }
            ],
            distance: 3555.76,
            minOrderAmount: 1,
            avgScore: 4,
            delivery: false,
        },
        {
            picture: {
                url: "/bg.jpg",
            },
            name: "Restaurant 1",
            restaurantAddressSlugCityName: "London",
            isNew: false,
            open: true,
            restaurantAddressPostalCode: "SW11 4LX",
            types: [
                {
                    name: "Fish and chips"
                },
                {
                    name: "Indian"
                }
            ],
            distance: 3555.76,
            minOrderAmount: 1,
            avgScore: 4,
            delivery: false,
        },
        {
            picture: {
                url: "/bg.jpg",
            },
            name: "Restaurant 1",
            restaurantAddressSlugCityName: "London",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus non doloribus cupiditate, eligendi recusandae consectetur vel, adipisci, aut omnis eius distinctio cum nulla. Accusantium aliquam vel mollitia odio, doloremque autem?",
            isNew: false,
            open: false,
            restaurantAddressPostalCode: "SW11 4LX",
            types: [
                {
                    name: "Fish and chips"
                },
                {
                    name: "Indian"
                }
            ],
            distance: 3555.76,
            minOrderAmount: 1,
            avgScore: 4,
            delivery: false,
        },
        {
            picture: {
                url: "/bg.jpg",
            },
            name: "Restaurant 1",
            restaurantAddressSlugCityName: "London",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus non doloribus cupiditate, eligendi recusandae consectetur vel, adipisci, aut omnis eius distinctio cum nulla. Accusantium aliquam vel mollitia odio, doloremque autem?",
            isNew: true,
            open: false,
            restaurantAddressPostalCode: "SW11 4LX",
            types: [
                {
                    name: "Fish and chips"
                },
                {
                    name: "Indian"
                }
            ],
            distance: 3555.76,
            minOrderAmount: 1,
            avgScore: 4,
            delivery: false,
        },
        {
            picture: {
                url: "/bg.jpg",
            },
            name: "Restaurant 1",
            restaurantAddressSlugCityName: "London",
            isNew: false,
            open: true,
            restaurantAddressPostalCode: "SW11 4LX",
            types: [
                {
                    name: "Fish and chips"
                },
                {
                    name: "Indian"
                }
            ],
            distance: 3555.76,
            minOrderAmount: 1,
            avgScore: 4,
            delivery: false,
        },
        {
            picture: {
                url: "/bg.jpg",
            },
            name: "Restaurant 1",
            restaurantAddressSlugCityName: "London",
            isNew: true,
            open: false,
            restaurantAddressPostalCode: "SW11 4LX",
            types: [
                {
                    name: "Fish and chips"
                },
                {
                    name: "Indian"
                }
            ],
            distance: 3555.76,
            minOrderAmount: 1,
            avgScore: 4,
            delivery: false,
        },
        {
            picture: {
                url: "/bg.jpg",
            },
            name: "Restaurant 1",
            restaurantAddressSlugCityName: "London",
            isNew: false,
            open: true,
            restaurantAddressPostalCode: "SW11 4LX",
            types: [
                {
                    name: "Fish and chips"
                },
                {
                    name: "Indian"
                }
            ],
            distance: 3555.76,
            minOrderAmount: 1,
            avgScore: 4,
            delivery: false,
        },
    ];

    useEffect(() => {
        // dispatch(reducers.restaurants.getRestaurants(delivery, index, limit));
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
