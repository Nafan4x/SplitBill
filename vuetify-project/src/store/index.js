import {createStore} from "vuex";

export default createStore({
    state: {
        id: 1,
        persons: [],
        fcheck: false,
        namecheck: false,
        products: [{"id":4,"name":"Milk","price":"200","buyer":"Tim","persons":["Kate"]},{"id":5,"name":"Bear","price":"1000","buyer":"Jack","persons":["Tim","Jack","Kate"]},{"id":6,"name":"Bread","price":"50","buyer":"Tim","persons":["Tim","Jack"]},{"id":7,"name":"Cola","price":"50","buyer":"Tim","persons":["Kate"]}],
        // products: [
        //     { price: 100, buyer: "Alice", persons: ["Alice", "Bob", "Charlie"] },
        //     { price: 200, buyer: "Bob", persons: ["Alice", "Bob", "Charlie", "David"] },
        //     { price: 50, buyer: "Charlie", persons: ["Alice", "Charlie"] },
        //     { price: 150, buyer: "David", persons: ["Bob", "David"] },
        //     { price: 300, buyer: "Alice", persons: ["Alice", "Bob", "Charlie", "Eve"] },
        //     { price: 75, buyer: "Eve", persons: ["Eve", "Charlie", "David"] },
        //     { price: 400, buyer: "Bob", persons: ["Alice", "Bob"] },
        //     { price: 120, buyer: "Charlie", persons: ["Charlie", "David", "Eve"] },
        //     { price: 90, buyer: "David", persons: ["Alice", "David", "Eve"] },
        //     { price: 60, buyer: "Eve", persons: ["Bob", "Eve", "Charlie"] },
        //   ],

        calcCheck: {
                prodnamecheck: false,
                prodpersoncheck: false,
                prodbuyercheck: false,
                prodLen: false
        }
        
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
            state.calcCheck.prodnamecheck = true;
            state.products.forEach(item =>{
                if(item.name == "" || !item.price){
                    state.calcCheck.prodnamecheck = false;
                }
            })
        },
        checkProdBuyer(state){
            state.calcCheck.prodbuyercheck = true;

            state.products.forEach(item =>{
                if(!item.buyer){
                    state.calcCheck.prodbuyercheck = false;
                }
            })
        },
        checkProdPersons(state){
            state.calcCheck.prodpersoncheck = true;
            state.products.forEach(item =>{
                if(!item.persons|| item.persons.length == 0 ){
                    state.calcCheck.prodpersoncheck = false;
                }
            })
        },
        checkProdLen(state){
            if(state.products.length > 1){
                state.calcCheck.prodLen = true;
            }
            else{
                state.calcCheck.prodLen = false;
            }
        }


        
    }
})