/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: ["next/core-web-vitals"],
  ignorePatterns: ["node_modules/", ".next/", "legacy/", "dist/"],
};

module.exports = config;