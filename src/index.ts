export const config = {
	'env': {
		es6: true,
		es2017: true,
		es2020: true,
		node: true
	},
	'extends': 'plugin:@typescript-eslint/recommended',
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		ecmaVersion: 2020,
		sourceType: 'module',
		project: './tsconfig.eslint.json'
	},
	'plugins': ['@typescript-eslint'],
	'rules': {
		'for-direction': 0,
		'getter-return': 0,
		'no-await-in-loop': 0,
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'warn',
		'no-console': 0,
		'no-constant-condition': 0,
		'no-control-regex': 0,
		'no-debugger': 'error',
		'no-dupe-args': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty': 0,
		'no-empty-character-class': 'error',
		'no-ex-assign': 0,
		'no-extra-boolean-cast': 0,
		'no-extra-parens': 0,
		'no-extra-semi': 0,
		'no-func-assign': 0,
		'no-inner-declarations': 0,
		'no-invalid-regexp': 'warn',
		'no-irregular-whitespace': [
			'error',
			{
				skipStrings: true,
				skipComments: true,
				skipRegExps: true,
				skipTemplates: true
			}
		],
		'no-obj-calls': 'warn',
		'no-prototype-builtins': 0,
		'no-regex-spaces': 'warn',
		'no-sparse-arrays': 'warn',
		'no-template-curly-in-string': 'error',
		'no-unexpected-multiline': 'error',
		'no-unreachable': 'warn',
		'no-unsafe-finally': 'warn',
		'no-unsafe-negation': 'error',
		'use-isnan': 'error',
		'valid-jsdoc': 0,
		'valid-typeof': 'error',
		'accessor-pairs': 0,
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		'class-methods-use-this': 0,
		'complexity': 0,
		'consistent-return': 0,
		'curly': ['error', 'multi-line', 'consistent'],
		'default-case': 0,
		'dot-location': ['error', 'property'],
		'dot-notation': 0,
		'eqeqeq': ['error', 'smart'],
		'guard-for-in': 'warn',
		'no-alert': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-div-regex': 0,
		'no-else-return': 'warn',
		'no-empty-function': 0,
		'no-empty-pattern': 0,
		'no-eq-null': 'warn',
		'no-eval': 'warn',
		'no-extend-native': 'warn',
		'no-extra-bind': 0,
		'no-extra-label': 'warn',
		'no-fallthrough': 0,
		'no-floating-decimal': 'error',
		'no-global-assign': 0,
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 0,
		'no-implied-eval': 0,
		'no-invalid-this': 0,
		'no-iterator': 0,
		'no-labels': 0,
		'no-lone-blocks': 0,
		'no-loop-func': 0,
		'no-magic-numbers': 0,
		'no-multi-spaces': ['error', { ignoreEOLComments: true }],
		'no-multi-str': 'error',
		'no-new': 0,
		'no-new-func': 'warn',
		'no-new-wrappers': 'warn',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 0,
		'no-proto': 0,
		'no-redeclare': 'error',
		'no-restricted-properties': 0,
		'no-return-assign': 0,
		'no-return-await': 'warn',
		'no-script-url': 0,
		'no-self-assign': 'error',
		'no-self-compare': 'warn',
		'no-sequences': 'error',
		'no-throw-literal': 0,
		'no-unmodified-loop-condition': 0,
		'no-unused-expressions': 0,
		'no-unused-labels': 'error',
		'no-useless-call': 0,
		'no-useless-concat': 'warn',
		'no-useless-escape': 0,
		'no-useless-return': 'warn',
		'no-void': 0,
		'no-warning-comments': 0,
		'no-with': 'error',
		'prefer-promise-reject-errors': 'error',
		'radix': 'error',
		'require-await': 0,
		'vars-on-top': 0,
		'wrap-iife': ['error', 'inside'],
		'yoda': 'error',
		'strict': ['error', 'never'],
		'init-declarations': 0,
		'no-catch-shadow': 'error',
		'no-delete-var': 'error',
		'no-label-var': 'error',
		'no-restricted-globals': 0,
		'no-shadow': 0,
		'no-shadow-restricted-names': 'error',
		'no-undef': 'error',
		'no-undef-init': 0,
		'no-undefined': 0,
		'no-unused-vars': 0,
		'no-use-before-define': 0,
		'callback-return': 0,
		'global-require': 0,
		'handle-callback-err': 0,
		'no-buffer-constructor': 'error',
		'no-mixed-requires': 'error',
		'no-new-require': 'error',
		'no-path-concat': 'warn',
		'no-process-env': 0,
		'no-process-exit': 0,
		'no-restricted-modules': 0,
		'no-sync': 0,
		'array-bracket-newline': ['error', 'consistent'],
		'array-bracket-spacing': [
			'error',
			'never',
			{
				singleValue: false,
				objectsInArrays: false,
				arraysInArrays: false
			}
		],
		'array-element-newline': 0,
		'block-spacing': ['error', 'always'],
		'brace-style': ['error', '1tbs', { allowSingleLine: true }],
		'capitalized-comments': 0,
		'comma-dangle': ['error', 'never'],
		'comma-spacing': 0,
		'comma-style': ['error', 'last'],
		'computed-property-spacing': ['error', 'never'],
		'consistent-this': ['error', 'self'],
		'eol-last': ['error', 'always'],
		'func-call-spacing': ['error', 'never'],
		'func-name-matching': ['warn', 'always'],
		'func-names': ['warn', 'as-needed'],
		'func-style': 0,
		'function-paren-newline': ['error', 'consistent'],
		'id-blacklist': 0,
		'id-length': 0,
		'id-match': 0,
		'indent': 0,
		'jsx-quotes': ['error', 'prefer-double'],
		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true,
				mode: 'strict'
			}
		],
		'keyword-spacing': 0,
		'line-comment-position': 0,
		'linebreak-style': ['error', 'unix'],
		'lines-around-comment': 0,
		'lines-between-class-members': [
			'error',
			'always',
			{ exceptAfterSingleLine: true }
		],
		'max-depth': 0,
		'max-len': 0,
		'max-lines': 0,
		'max-nested-callbacks': 0,
		'max-params': 0,
		'max-statements': 0,
		'max-statements-per-line': ['error', { max: 1 }],
		'multiline-comment-style': 0,
		'multiline-ternary': ['error', 'always-multiline'],
		'new-cap': 0,
		'new-parens': 'error',
		'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
		'no-array-constructor': 0,
		'no-bitwise': 0,
		'no-inline-comments': 0,
		'no-lonely-if': 'error',
		'no-mixed-operators': 'error',
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-multi-assign': 'warn',
		'no-multiple-empty-lines': 'error',
		'no-negated-condition': 'warn',
		'no-nested-ternary': 0,
		'no-new-object': 'error',
		'no-plusplus': 0,
		'no-restricted-syntax': 0,
		'no-tabs': 0,
		'no-ternary': 0,
		'no-trailing-spaces': 'error',
		'no-underscore-dangle': 0,
		'no-unneeded-ternary': 0,
		'no-whitespace-before-property': 'error',
		'nonblock-statement-body-position': 0,
		'object-curly-newline': [
			'error',
			{ multiline: true, consistent: true }
		],
		'object-curly-spacing': ['error', 'always'],
		'object-property-newline': 0,
		'one-var': ['error', 'never'],
		'one-var-declaration-per-line': 0,
		'operator-assignment': ['error', 'always'],
		'operator-linebreak': [
			'error',
			'before',
			{
				overrides: {
					'+': 'after',
					'-': 'after'
				}
			}
		],
		'padded-blocks': ['error', { classes: 'always' }],
		'padding-line-between-statements': 0,
		'quote-props': [
			'error',
			'consistent-as-needed',
			{
				keywords: true,
				unnecessary: true,
				numbers: false
			}
		],
		'quotes': [
			'error',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true
			}
		],
		'require-jsdoc': 0,
		'semi': 0,
		'semi-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'semi-style': ['error', 'last'],
		'sort-keys': 0,
		'sort-vars': 0,
		'space-before-blocks': ['error', 'always'],
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always'
			}
		],
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': ['error', { int32Hint: true }],
		'space-unary-ops': [
			'error',
			{
				words: true,
				nonwords: false
			}
		],
		'spaced-comment': ['error', 'always'],
		'switch-colon-spacing': [
			'error',
			{
				after: true,
				before: false
			}
		],
		'template-tag-spacing': ['error', 'never'],
		'unicode-bom': ['error', 'never'],
		'wrap-regex': 0,
		'arrow-body-style': ['error', 'as-needed'],
		'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
		'arrow-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		'constructor-super': 'error',
		'generator-star-spacing': ['error', 'before'],
		'no-class-assign': 'warn',
		'no-confusing-arrow': 0,
		'no-const-assign': 'error',
		'no-dupe-class-members': 0,
		'no-duplicate-imports': ['error', { includeExports: false }],
		'no-new-symbol': 'warn',
		'no-restricted-imports': 0,
		'no-this-before-super': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-constructor': 0,
		'no-useless-rename': 'error',
		'no-var': 'error',
		'object-shorthand': ['error', 'always'],
		'prefer-arrow-callback': 'error',
		'prefer-const': ['error', { destructuring: 'all' }],
		'prefer-destructuring': [
			'error',
			{
				VariableDeclarator: {
					array: false,
					object: true
				},
				AssignmentExpression: {
					array: true,
					object: false
				}
			}
		],
		'prefer-numeric-literals': 0,
		'prefer-rest-params': 'warn',
		'prefer-spread': 'error',
		'prefer-template': 'warn',
		'require-yield': 'warn',
		'rest-spread-spacing': ['error', 'never'],
		'sort-imports': 0,
		'symbol-description': 'warn',
		'template-curly-spacing': ['error', 'never'],
		'yield-star-spacing': ['error', 'before'],
		'@typescript-eslint/no-invalid-void-type': 'error',
		'@typescript-eslint/dot-notation': [
			'error',
			{
				allowKeywords: true,
				allowPattern: '(^[A-Z])|(^[a-z]+(_[a-z]+)+$)',
				allowPrivateClassPropertyAccess: true
			}
		],
		'@typescript-eslint/keyword-spacing': [
			'error',
			{ before: true, after: true }
		],
		'@typescript-eslint/init-declarations': 'error',
		'@typescript-eslint/no-unsafe-assignment': 'error',
		'@typescript-eslint/prefer-reduce-type-parameter': 'error',
		'@typescript-eslint/class-literal-property-style': 'error',
		'@typescript-eslint/no-unsafe-return': 'error',
		'@typescript-eslint/no-unsafe-member-access': 'warn',
		'@typescript-eslint/no-unsafe-call': 'error',
		'@typescript-eslint/no-base-to-string': 'error',
		'@typescript-eslint/switch-exhaustiveness-check': 'warn',
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
		'@typescript-eslint/no-dupe-class-members': 'error',
		'@typescript-eslint/prefer-as-const': 'error',
		'@typescript-eslint/comma-spacing': [
			'error',
			{ before: false, after: true }
		],
		'@typescript-eslint/no-extra-non-null-assertion': 'error',
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'default',
				format: ['camelCase'],
				leadingUnderscore: 'forbid',
				trailingUnderscore: 'forbid',
				// Ignore the 2 parameters that cannot be camelcased in this selfsame file
				filter: { regex: '^(?:VariableDeclarator|AssignmentExpression)$', match: false }
			},
			{
				selector: 'parameter',
				format: ['camelCase'],
				leadingUnderscore: 'allow'
			},
			{
				selector: 'property',
				modifiers: ['readonly'],
				prefix: ['k'],
				format: ['PascalCase']
			},
			{ selector: 'enumMember', format: ['PascalCase'] },
			{ selector: 'typeLike', format: ['PascalCase'] }
		],
		'@typescript-eslint/default-param-last': 'error',
		'@typescript-eslint/no-extra-semi': 'error',
		'@typescript-eslint/no-throw-literal': 'error',
		'@typescript-eslint/no-implied-eval': 'error',
		'@typescript-eslint/no-invalid-this': 'error',
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': 0,
		'@typescript-eslint/await-thenable': 0,
		'@typescript-eslint/explicit-member-accessibility': 'error',
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/member-ordering': [
			'error',
			{
				'default': [
					'signature',
					'public-instance-field',
					'protected-instance-field',
					'private-instance-field',
					'instance-field',
					'public-constructor',
					'protected-constructor',
					'private-constructor',
					'constructor',
					'public-instance-method',
					'protected-instance-method',
					'private-instance-method',
					'instance-method',
					'public-static-field',
					'protected-static-field',
					'private-static-field',
					'static-field',
					'public-static-method',
					'protected-static-method',
					'private-static-method',
					'static-method'
				]
			}
		],
		'@typescript-eslint/require-await': 'error',
		'@typescript-eslint/no-floating-promises': 'error',
		'@typescript-eslint/unbound-method': 'error',
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/prefer-string-starts-ends-with': 'error',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/no-unnecessary-qualifier': 'error',
		'@typescript-eslint/no-empty-interface': 0,
		'@typescript-eslint/no-extraneous-class': 'error',
		'@typescript-eslint/no-for-in-array': 'error',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-non-null-assertion': 0,
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/consistent-type-definitions': 'error',
		'@typescript-eslint/promise-function-async': 0,
		'@typescript-eslint/restrict-plus-operands': 'error',
		'@typescript-eslint/type-annotation-spacing': 'error',
		'@typescript-eslint/unified-signatures': 'error',
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-use-before-define': [
			'error',
			{ typedefs: false, functions: false }
		],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: { delimiter: 'semi', requireLast: true },
				singleline: { delimiter: 'semi', requireLast: false }
			}
		],
		'@typescript-eslint/no-extra-parens': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/semi': 'error'
	}
};

module.exports = config;
export default config;
