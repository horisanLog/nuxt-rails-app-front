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
    'no-unused-vars': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'vue/multi-word-component-names': [
      'error',
      {
        'ignores': ['index']
      }
    ]
  }
}
