module.exports = {
    env: {
        browser: true,
        node: true
    },
    extends: ['airbnb-base', 'plugin:vue/vue3-strongly-recommended'],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        indent: 'off',
        // property 명을 따옴표로 묶어야하는 규칙
        quotes: 'off',
        'quote-props': 'off',
        semi: 'off',
        'comma-dangle': 'off',

        // 태그 끝에 꺽새 > 를 한줄띄어서 입력해야 하는 규칙
        'vue/html-closing-bracket-newline': ["error", {
            singleline: 'never',
            multiline: 'never',
        }],
        "vue/html-self-closing": ["error", {
            html: {
              void: 'never',
              normal: 'never',
              component: 'always',
            },
            svg: 'always',
            math: 'always',
        }],
    },
}
