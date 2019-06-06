module.exports = {
  globals: {
    React: false,
    ReactDOM: false
  },
  plugins: ['react'],
  extends: ['manpacker'],
  settings: {
    react: { version: 'detect' }
  },
  rules: {
    'react/jsx-uses-vars': 'error',
    'react/jsx-curly-spacing': ['error', { 'when': 'never', 'children': true }],
    'react/prefer-es6-class': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/self-closing-comp': 'warn',
    'no-extra-boolean-cast': 'warn',
    'react/no-deprecated': 'warn',
    'no-unreachable': 'warn',
    'no-mixed-spaces-and-tabs': 'warn',
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': ['error', { 'maximum': 1 }],
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-sort-props': 'error',
    'react/jsx-uses-react': 'warn',
    'react/no-unknown-property': 'error',
    'react/jsx-closing-bracket-location': 'off',
    'react/no-multi-comp': 'error',
    'react/sort-comp': [1, {
      'order': [
        'init',
        'everything-else',
        'lifecycles',
        'render'
      ],
      'groups': {
        'init': [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'constructor'
        ],
        'lifecycles': [
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentDidCatch',
          'componentWillUnmount'
        ]
      }
    }],
    'react/no-find-dom-node': 'warn',
    'react/jsx-max-depth': ['warn', { 'max': 3 }],
    'react/no-this-in-sfc': 'error',
    'react/sort-prop-types': 'warn',
    'react/static-property-placement': 'error',
    'react/jsx-indent-props': ['error', 'first'],
    'react/jsx-indent': ['error', 2, { checkAttributes: false, indentLogicalExpressions: false }],
    'react/jsx-equals-spacing': ['error', 'never']
  }
}
