//модуль для проверки состояний на странице продуктов
const state = {
    prodnamecheck: false,
    prodpersoncheck: false,
    prodbuyercheck: false,
    prodLen: false,
};

const mutations = {
    //проверка ввода имени и цены
    checkProdNames(state, products) {
        if (Array.isArray(products)) {
            state.prodnamecheck = products.every(item => item.name && item.price);
        } else {
            state.prodnamecheck = false;
        }
    },
    //проверка выбора покупателя
    checkProdBuyer(state, products) {
        if (Array.isArray(products)) {
            state.prodbuyercheck = products.every(item => item.buyer);
        } else {
            state.prodbuyercheck = false;
        }
    },
    //проверка выбора пользователей
    checkProdPersons(state, products) {
        if (Array.isArray(products)) {
            state.prodpersoncheck = products.every(item => item.persons && item.persons.length > 0);
        } else {
            state.prodpersoncheck = false;
        }
    },
    //проверка количества
    checkProdLen(state, products) {
        if (Array.isArray(products)) {
            state.prodLen = products.length > 1;
        } else {
            state.prodLen = false;
        }
    }
    
};

const getters = {
    isProdNamesValid: (state) => state.prodnamecheck,
    isProdBuyerValid: (state) => state.prodbuyercheck,
    isProdPersonsValid: (state) => state.prodpersoncheck,
    isProductCountValid: (state) => state.prodLen,
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
};
