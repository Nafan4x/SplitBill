import pluginVue from 'eslint-plugin-vue'
export default [
    // add more generic rulesets here, such as:
    // js.configs.recommended,
    //...pluginVue.configs['flat/recommended'],
    ...pluginVue.configs['flat/vue2-recommended'], // Use this if you are using Vue.js 2.x.
    {
        rules: {
            'indent': ['error', 4], // Установите размер табуляции в 4
        }
    }
]