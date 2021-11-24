// const eslintConfig = require('eslint-config-react-app');

// console.log(eslintConfig)

module.exports = {
  extends: ['react-app'],
  // extends: [...eslintConfig],
  plugins: [
    // ...
    'react-hooks',
  ],
  rules: {
    // ...
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'warn', // 检查 effect 的依赖
  },
}
