const state = {
    id: 0,
    products: [],
};

const mutations = {
    addProduct(state) {
        state.products.push({ id: state.id, name: '', price: '' });
        state.id += 1;
    },
    delProduct(state, id) {
        state.products = state.products.filter(item => item.id !== id);
    },
    updateProductName(state, { id, name }) {
        const item = state.products.find(item => item.id === id);
        if (item) {
            item.name = name;
        }
    },
    updateProductPrice(state, { id, price }) {
        const item = state.products.find(item => item.id === id);
        if (item) {
            item.price = price;
        }
    },
    updateProductPersons(state, { id, value }) {
        const item = state.products.find(item => item.id === id);
        if (item) {
            item.persons = value;
        }
    },
    updateProductBuyer(state, { id, value }) {
        const item = state.products.find(item => item.id === id);
        if (item) {
            item.buyer = value;
        }
    },
};

const getters = {
    allProducts: (state) => state.products,
    productById: (state) => (id) => state.products.find(item => item.id === id),
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
};
