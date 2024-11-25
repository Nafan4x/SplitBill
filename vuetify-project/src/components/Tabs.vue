<template>
  <v-card class="card">
    <v-tabs v-model="tab" bg-color="#212121">
      <v-tab class='tab' value="one">who to whom</v-tab>
      <v-tab class='tab' value="two">to whom who</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="one" class="tab-item"> 
            <TabItem
                v-for="item in this.depts"
                :name="item[0]"
                :dept="item[1]"
            />

        </v-tabs-window-item>

        <v-tabs-window-item value="two" class="tab-item">
            <v-card class="card-person" v-for="person in persons"  variant="outlined">
                <h3>
                    Person {{ person.name }} should be given
                </h3>
                <p>
                     123 - 321   
                </p>
            </v-card>
        </v-tabs-window-item>

      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data: () => ({
      tab: null,
      depts: []
 
    }), 

 
    computed: {
        ...mapState({
            persons: state => state.persons,
            products: state => state.products
        }),
        
    },
    mounted(){
        this.depts = this.calculateDebts(this.products);
        
    },
    
    methods:{
        calculateDebts(purchases) {
            const totalSpent = {};
            const totalDebt = {};


            purchases.forEach((item) => {
                const { price, buyer, persons } = item;


                if (!totalSpent[buyer]) totalSpent[buyer] = 0;
                totalSpent[buyer] += price;


                const share = price / persons.length;


                persons.forEach((user) => {
                if (user !== buyer) {
                    if (!totalDebt[user]) totalDebt[user] = {};
                    if (!totalDebt[user][buyer]) totalDebt[user][buyer] = 0;
                    totalDebt[user][buyer] += share;
                    }
                });
            });


            const finalDebts = {};

            for (const debtor in totalDebt) {
                for (const creditor in totalDebt[debtor]) 
                {
                const debt = totalDebt[debtor][creditor];


                if (totalDebt[creditor] && totalDebt[creditor][debtor]) {
                    const counterDebt = totalDebt[creditor][debtor];

                    if (debt > counterDebt) 
                    {
                    if (!finalDebts[debtor]) finalDebts[debtor] = {};
                    finalDebts[debtor][creditor] = debt - counterDebt;
                    delete totalDebt[creditor][debtor];
                    } 
                    else if (debt < counterDebt) 
                    {
                    if (!finalDebts[creditor]) finalDebts[creditor] = {};
                    finalDebts[creditor][debtor] = counterDebt - debt;
                    }
                } 
                else {
                    if (!finalDebts[debtor]) finalDebts[debtor] = {};
                    finalDebts[debtor][creditor] = debt;
                }
                }
            }

            const list = Object.entries(finalDebts);
            console.log(list)
            return list;
        }
    },
  }
</script>

<style scoped>
    .card{
        width: 100%;
        height: 100%;
    }
    .tab{
        width: 50%;
    }
    .tab-item{
        height: 100%;
    }
    .card-person{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }

</style>