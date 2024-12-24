<template>
  <v-card class="card">
    <v-tabs 
      v-model="tab" 
      bg-color="#212121"
    >
      <v-tab 
        class="tab"
        value="one" 
        text="who to whom"
      />
      <v-tab 
        class="tab"
        value="two"
        text="to whom who"
      />
    </v-tabs>

    <v-card-text>
      <v-tabs-window 
        v-model="tab"
        class="window-params"
      >
        <v-tabs-window-item 
          value="one"
          class="tab-item"
        > 
          <TabItem 
            v-for="item in depts"
            v-if="depts.length"
            :key="item.id"
            :name="item[0]"
            :dept="item[1]"
            :firsttab="true"
            class="item"
          />

          <TabItem 
            v-else
          />
        </v-tabs-window-item>

        <v-tabs-window-item 
          value="two"
          class="tab-item"
        > 
          <TabItem 
            v-for="item in depts2"
            v-if="depts2.length"
            :key="item.id"
            :name="item[0]"
            :dept="item[1]"
            :firsttab="false"
            class="item"
          />
          <TabItem 
            v-else                
          />
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>

<script>
import {mapState} from "vuex"
import TabItem from "./TabItem.vue";
export default {
    components: [TabItem],
    data: () => ({
        tab: null,
        depts: [],
        depts2: [],
    }), 

    computed: {
        ...mapState("persons", ["persons"]),
        ...mapState("products", ["products"]),  
    },
    mounted(){
        this.depts = this.calculateDebts(this.products, this.persons);// Кто - кому
        this.depts2 = this.transformDebts(this.depts);// Кому-кто
    },
    
    methods:{
        transformDebts(debts) {
            const reversedMap = new Map();

            debts.forEach(([debtor, creditors]) => {
                Object.entries(creditors).forEach(([creditor, amount]) => {
                    if (!reversedMap.has(creditor)) {
                        reversedMap.set(creditor, {});
                    }
                    reversedMap.get(creditor)[debtor] = amount;
                });
            });

            return Array.from(reversedMap, ([debtor, creditors]) => [debtor, creditors]);
        },
        transformData(data) {
            return data.map((item) => ({
                id: item.id,
                name: item.name,
                price: item.price,
                persons: item.persons.map((person) => person.id.toString()), // Преобразуем id участников в строки
                buyer: item.buyer.id.toString(), // Преобразуем id покупателя в строку
            }))},

        calculateDebts(purchases, persons) {
            // Преобразуем массив persons в карту id -> name
            const personsMap = persons.reduce((map, person) => {
                map[person.id] = person.name;
                return map;
            }, {});

            // Трансформируем данные
            purchases = this.transformData(purchases);

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
                for (const creditor in totalDebt[debtor]) {
                    const debt = totalDebt[debtor][creditor];

                    if (totalDebt[creditor] && totalDebt[creditor][debtor]) {
                        const counterDebt = totalDebt[creditor][debtor];

                        if (debt > counterDebt) {
                            if (!finalDebts[debtor]) finalDebts[debtor] = {};
                            finalDebts[debtor][creditor] = debt - counterDebt;
                            delete totalDebt[creditor][debtor];
                        } else if (debt < counterDebt) {
                            if (!finalDebts[creditor]) finalDebts[creditor] = {};
                            finalDebts[creditor][debtor] = counterDebt - debt;
                        }
                    } else {
                        if (!finalDebts[debtor]) finalDebts[debtor] = {};
                        finalDebts[debtor][creditor] = debt;
                    }
                }
            }

            // Преобразуем ID в имена
            return Object.entries(finalDebts).map(([debtorId, creditors]) => {
                const debtorName = personsMap[debtorId] || `Unknown (${debtorId})`; // Заменяем id должника на имя
                const creditorsWithNames = Object.entries(creditors).reduce((result, [creditorId, amount]) => {
                    const creditorName = personsMap[creditorId] || `Unknown (${creditorId})`; // Заменяем id кредитора на имя
                    result[creditorName] = amount;
                    return result;
                }, {});

                return [debtorName, creditorsWithNames];
            });
        }
    },
}
</script>

<style scoped>
    .card{
        width: 100%;
    }
    .tab{
        width: 50%;
    }
    .tab-item{
        overflow-y: auto;
    }
    .card-person{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }
    .item{
        margin-bottom: 10px;
    }
    .window-params{
        height: 440px;
        overflow-y: auto;
    }
</style>