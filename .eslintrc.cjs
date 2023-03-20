require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json'
  }
}
