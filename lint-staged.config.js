// lint-staged.config.js
module.exports = {
    '*.{js,tsx,ts,d.ts}': ['eslint --fix'],
    '*.{ts,tsx,d.ts}': [() => 'npx tsc --noEmit -p tsconfig.json --pretty'],
  };
  