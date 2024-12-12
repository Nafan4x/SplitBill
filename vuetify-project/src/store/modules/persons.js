const state = {
    id: 0,
    persons: [],
    isPersonLenValid: false,
    isNameValid: false,
};

const mutations = {
    addPerson(state) {
        state.persons.push({ id: state.id, name: '' });
        state.id += 1;
    },
    delPerson(state, id) {
        state.persons = state.persons.filter(item => item.id !== id);
    },
    updatePersonName(state, { id, name }) {
        const item = state.persons.find(item => item.id === id);
        if (item) {
            item.name = name;
        }
    },
    checkPersons(state) {
        state.isPersonLenValid = state.persons.length > 1;
    },
    checkPersonsName(state) {
        state.isNameValid = state.persons.every(item => item.name !== "");
    },
};

const getters = {
    allPersons: (state) => state.persons,
    isMultiplePersons: (state) => state.isPersonLenValid,
    areAllNamesValid: (state) => state.isNameValid,
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
};
