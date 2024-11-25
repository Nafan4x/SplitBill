import {createStore} from "vuex";

export default createStore({
    state: {
        id: 1,
        //persons: [{id: 0, name: '123'}, {id: 1, name: '321'}],
        persons: [],
        fcheck: false,
        namecheck: false,
        products: [],

        prodnamecheck: false,
        prodpersoncheck: false,
        prodbuyercheck: false
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
        updateProductPersons(state, { id, value }) {
            const item = state.products.find(item => item.id === id);
            if (item){
              item.persons = value;
            }
        },
        updateProductBuyer(state, { id, value }) {
            const item = state.products.find(item => item.id === id);
            if (item) {
              item.buyer = value;
            }
        },
        checkProdNames(state){
            state.prodnamecheck = true;
            state.products.forEach(item =>{
                if(item.name == "" || !item.price){
                    state.prodnamecheck = false;
                }
            })
        },
        checkProdBuyer(state){
            state.prodbuyercheck = true;

            state.products.forEach(item =>{
                if(!item.buyer){
                    state.prodbuyercheck = false;
                }
            })
        },
        checkProdPersons(state){
            state.prodpersoncheck = true;
            state.products.forEach(item =>{
                if(!item.persons|| item.persons.length == 0 ){
                    state.prodpersoncheck = false;
                }
            })
        }


        
    }
})