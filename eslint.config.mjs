import nextVitals from 'eslint-config-next/core-web-vitals'
import importPlugin from 'eslint-plugin-import'
import unusedImports from 'eslint-plugin-unused-imports'

const config = [
  ...nextVitals,
  {
    ignores: [
      '.next/**',
      'coverage/**',
      'next-env.d.ts',
      'node_modules/**',
      'out/**',
      'storybook-static/**',
    ],
  },
  {
    plugins: {
      import: importPlugin,
      'unused-imports': unusedImports,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'object',
            'parent',
            'sibling',
            'index',
            'type',
          ],
          'newlines-between': 'always',
          pathGroupsExcludedImportTypes: [
            'react',
            'builtin',
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: '@/components/**',
              group: 'parent',
              position: 'before',
            },
            {
              pattern: '@/hooks/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/const/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/stores/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/api/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/types/**',
              group: 'type',
              position: 'after',
            },
            {
              pattern: '@storybook/*',
              group: 'external',
              position: 'after',
            },
          ],
        },
      ],
      semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
      'semi-spacing': ['error', { after: true, before: false }],
      'semi-style': ['error', 'first'],
      'no-extra-semi': 'error',
      'no-unexpected-multiline': 'error',
      'no-unreachable': 'error',
      'react-hooks/immutability': 'off',
      'react-hooks/incompatible-library': 'off',
      'react-hooks/refs': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/static-components': 'off',
    },
  },
]

export default config
