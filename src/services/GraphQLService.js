import axios from "axios";
import cookie from "react-cookies";
import constants from "../utils/constants";
import errors from "../utils/errors";

/** Queries */
import queries from "./queries";

export default class {
    constructor() {}

    login = async (email, password) => {
        return axios
            .post(constants.API, {
                data: {
                    query: queries.login(email, password),
                },
            })
            .then((response) => {
                if (data.loginWithEmail) cookie.save(constants.AUTHORIZATION, "Bearer " + response.data.loginWithEmail.token);
                else throw errors.AUTHENTICATION_FAILED;
            })
            .catch((e) => e.message);
    };

    getPastOrders = async (index, limit) => {
        return axios
            .post(constants.API, {
                data: {
                    query: queries.getPastOrders(index, limit),
                },
            })
            .then((response) => {
                if (data.pastOrders) return data.pastOrders;
                else throw errors.UNKNOWN_ERROR;
            })
            .catch((e) => e.message);
    };

    getUserInfo = async () => {
        return axios
            .post(constants.API, {
                data: {
                    query: queries.getUserInfo(),
                },
            })
            .then((response) => {
                if (data.user) return data.user;
                else throw errors.UNKNOWN_ERROR;
            })
            .catch((e) => e.message);
    }

    getRestaurants = async (delivery) => {
        return axios
            .post(constants.API, {
                data: {
                    query: queries.getRestaurants(delivery),
                },
            })
            .then((response) => {
                if (data.restaurant) return data.restaurant;
                else throw errors.UNKNOWN_ERROR;
            })
            .catch((e) => e.message);
    }
}
