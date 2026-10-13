import js from '@eslint/js'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import importPlugin from 'eslint-plugin-import-x'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  { ignores: ['dist/**', 'dist-ssr/**', 'coverage/**'] },
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,
  {
    files: ['**/*.{js,jsx,cjs,mjs,vue}'],
    plugins: { import: importPlugin },
    languageOptions: {
      ecmaVersion: 'latest',
      globals: { ...globals.browser, ...globals.node }
    },
    rules: {
      'arrow-body-style': ['warn', 'as-needed'],
      'capitalized-comments': [
        'warn',
        'always',
        { ignorePattern: 'theme,?$|locale,?$|localeImport' }
      ],
      'import/order': ['warn', { alphabetize: { order: 'asc', caseInsensitive: true } }],
      'no-useless-assignment': 'off',
      'no-var': 'warn',
      'one-var': ['warn', 'never'],
      'prefer-arrow-callback': 'warn',
      'prefer-const': 'warn',
      'sort-imports': ['warn', { ignoreCase: true, ignoreDeclarationSort: true }],
      'vue/multi-word-component-names': 'off'
    }
  }
]
