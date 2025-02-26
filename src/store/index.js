import {createStore } from "vuex";
import openWeatherApi from "./api";

export default createStore({
    modules: {
        openWeatherApi,
    },
});