module.exports = {
  root: true,
  extends: 'standard-with-typescript',
  ignorePatterns: ["dist/*"],
  parserOptions: {
    project: './tsconfig.json'
  }
}
