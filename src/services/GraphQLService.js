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
                query: queries.login(email, password),
            })
            .then((response) => {
                if (response.data.loginWithEmail) cookie.save(constants.AUTHORIZATION, "Bearer " + response.data.loginWithEmail.token);
                else return Promise.reject(errors.AUTHENTICATION_FAILED);
            })
    };

    getPastOrders = async (index, limit) => {
        return axios
            .post(constants.API, {
                query: queries.getPastOrders(index, limit),
            }, {
                headers: {
                    [constants.AUTHORIZATION]: cookie.load(constants.AUTHORIZATION)
                }
            })
            .then((response) => {
                if (response.data.pastOrders) return response.data.pastOrders;
                else return Promise.reject(errors.UNKNOWN_ERROR);
            })
    };

    getOrder = async (id) => {
        return axios
            .post(constants.API, {
                query: queries.getOrder(id),
            }, {
                headers: {
                    [constants.AUTHORIZATION]: cookie.load(constants.AUTHORIZATION)
                }
            })
            .then((response) => {
                if (response.data.order) return response.data.order;
                else return Promise.reject(errors.UNKNOWN_ERROR);
            })
    };

    getUserInfo = async () => {
        return axios
            .post(constants.API, {
                query: queries.getUserInfo(),
            }, {
                headers: {
                    [constants.AUTHORIZATION]: cookie.load(constants.AUTHORIZATION)
                }
            })
            .then((response) => {
                if (response.data.user) return response.data.user;
                else return Promise.reject(errors.UNKNOWN_ERROR);
            })
    };

    getRestaurants = async (delivery, index, limit) => {
        return axios
            .post(constants.API, {
                query: queries.getRestaurants(delivery, index, limit),
            }, {
                headers: {
                    [constants.AUTHORIZATION]: cookie.load(constants.AUTHORIZATION)
                }
            })
            .then((response) => {
                if (response.data.restaurants) return response.data.restaurants;
                else return Promise.reject(errors.UNKNOWN_ERROR);
            })
    };

    getRestaurant = async (delivery) => {
        return axios
            .post(constants.API, {
                query: queries.getRestaurant(delivery),
            }, {
                headers: {
                    [constants.AUTHORIZATION]: cookie.load(constants.AUTHORIZATION)
                }
            })
            .then((response) => {
                if (response.data.restaurant) return response.data.restaurant;
                else return Promise.reject(errors.UNKNOWN_ERROR);
            })
    };
}
