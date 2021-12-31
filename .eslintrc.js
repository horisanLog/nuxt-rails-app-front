const INLINE_ELEMENTS = require('./node_modules/eslint-plugin-vue/lib/utils/inline-non-void-elements.json')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'space-in-parens': ['error', 'never'],
    '@typescript-eslint/no-unused-vars': 'warn',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index']
      }
    ],
    'space-before-function-paren': ['error', 'never'],
    'vue/singleline-html-element-content-newline': ['error', {
      ignores: ['pre', 'textarea', ...INLINE_ELEMENTS]
    }]
  }
}
