import { createStore } from 'vuex';
import persons from './modules/persons';
import products from './modules/products';
import calcCheck from './modules/calcCheck';

export default createStore({
    modules: {
        persons,
        products,
        calcCheck,
    }
});