import { defineConfig } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettierRecommended,
  {
    // Global ignores
    ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'src/e2e/**', 'coverage/**'],
  },
])

export default eslintConfig
