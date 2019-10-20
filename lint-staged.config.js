module.exports = {
  '**/*.ts': () => 'aspida --build && axios-mock-server --build && tsc --noEmit',
  '*.{js,ts}': ['eslint --fix --no-ignore', 'git add'],
  '*.{json,md,yml}': ['prettier --write', 'git add']
}
