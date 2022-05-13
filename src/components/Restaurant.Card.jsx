import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventBusyIcon from "@mui/icons-material/EventBusy";

const RestaurantCard = ({ restaurant, onClick }) => {
    const { picture, name, restaurantAddressSlugCityName, isNew, open } = restaurant;

    return (
        <div>
            <Card sx={{ maxWidth: 345, display: "relative", backgroundColor: "rgb(163, 221, 241)", cursor: "pointer" }}>
                <div className="restaurant-card" onClick={onClick}>
                    <CardHeader avatar={isNew ? <FiberNewIcon className="new-icon" /> : <div />} title={name} subheader={restaurantAddressSlugCityName.toUpperCase()} className="card-header" />
                    <CardMedia component="img" height="100" image={picture.url.replace("[WIDTH]", 120).replace("[HEIGHT]", 100)} alt={picture.alt} />
                    <CardContent className={open ? "open" : "closed"}>
                        {open ? (
                            <div className="is-open">
                                <EventAvailableIcon /> <p>Open</p>
                            </div>
                        ) : (
                            <div className="is-open">
                                <EventBusyIcon /> <p>Closed</p>
                            </div>
                        )}
                    </CardContent>
                </div>
            </Card>
        </div>
    );
};

export default RestaurantCard;
