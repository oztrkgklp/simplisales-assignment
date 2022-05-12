import { Card, CardContent, Grid } from "@material-ui/core";
import React from "react";

const Home = () => {
    return (
        <div className="page">
            <div className="home-container">
                <Card className="home-card-title">
                    <div className="title">Simplisales</div>
                </Card>
                <Card className="home-card">
                    <CardContent>
                        <div className="home-card-text">This project was developed for the assignment given by Simplisales company.</div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Home;
