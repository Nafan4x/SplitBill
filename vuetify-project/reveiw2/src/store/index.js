import { createStore } from "vuex";
import persons from "./modules/persons";
import products from "./modules/products";

export default createStore({
    modules: {
        persons,
        products,
    }
});