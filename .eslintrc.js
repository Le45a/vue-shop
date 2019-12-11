module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    "quotes": ['error', 'single'],
    //强制不使用分号结尾
    "semi": ['error','never'],
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/require-v-for-key': 'warning',
    "vue/max-attributes-per-line": "off",
    "vue/singleline-html-element-content-newline": "off"
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
