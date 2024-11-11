import {createStore} from "vuex";

export default createStore({
    state: {
        id: 1,
        persons: [{id: 0, name: '123'}],
        fcheck: false,
        namecheck: false,
        products: []
    },
    modules: {
        
    },
    mutations: {
        addPerson(state){
            state.persons.push({id: state.id, name: ''});
            state.id += 1;
        },
        
        delPerson(state, id){
            state.persons = state.persons.filter(item => item.id !== id);
        },
        delProduct(state, id){
            state.products = state.products.filter(item => item.id !== id);
        },
        updatePersonName(state, { id, name }) {
            const item = state.persons.find(item => item.id === id);
            if (item) {
              item.name = name;
            }
        },
        checkPersons(state){
            if(state.persons.length > 1){
                state.fcheck = true;
            }
            else{
                state.fcheck = false;
            }
        },
        checkPersonsName(state){
            state.namecheck = true;
            state.persons.forEach(item =>{
                if(item.name == ""){
                    state.namecheck = false;
                }
            })
        },
        addProduct(state){
            state.products.push({id: state.id, name: '', price: ''});
            state.id += 1;
        },
        updateProductName(state, { id, name }) {
            const item = state.products.find(item => item.id === id);
            if (item) {
              item.name = name;
            }
        },
        updateProductPrice(state, { id, name }) {
            const item = state.products.find(item => item.id === id);
            if (item) {
              item.price = name;
            }
        },
        
    }
})