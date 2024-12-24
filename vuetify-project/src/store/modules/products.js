const state = {
    id: 0,
    products: [],
};

const mutations = {
    addProduct(state) {
        state.products.push({ id: state.id, name: "", price: "" });
        state.id += 1;
    },
    delProduct(state, id) {
        state.products = state.products.filter(item => item.id !== id);
    },
    updateProduct(state, { id, field, value }) {
        const item = state.products.find(item => item.id === id);
        if (item) {
            item[field] = value;
        }
    },
};


export default {
    namespaced: true,
    state,
    mutations,
};
