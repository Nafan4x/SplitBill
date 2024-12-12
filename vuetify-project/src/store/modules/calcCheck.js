//модуль для проверки состояний на странице продуктов
const state = {
    isProdNameValid: false,
    isProdPersonValid: false,
    isProdBuyerValid: false,
    isProdLenValid: false,
};

const mutations = {
    //проверка ввода имени и цены
    checkProdNames(state, products) {
        state.isProdNameValid = Array.isArray(products) && products.every(item => item.name && item.price);
    },
    //проверка выбора покупателя
    checkProdBuyer(state, products) {
        state.isProdBuyerValid = Array.isArray(products) && products.every(item => item.buyer);
    },
    //проверка выбора пользователей
    checkProdPersons(state, products) {
        state.isProdPersonValid = Array.isArray(products) && products.every(item => item.persons && item.persons.length);
    },
    //проверка количества
    checkProdLen(state, products) {
        state.isProdLenValid = Array.isArray(products) && products.length > 1;
    }
    
};

export default {
    namespaced: true,
    state,
    mutations,
};
