module.exports = {
  globals: {
    React: false,
    ReactDOM: false
  },
  plugins: ['react'],
  extends: ['manpacker'],
  rules: {
    'react/jsx-uses-vars': 'error'
  }
}
