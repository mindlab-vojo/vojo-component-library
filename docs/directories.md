# Estrutura de diretórios

Esta árvore de diretórios representa a estrutura fundamental do projeto e arquivos de configuração obrigatórios.

```sh
|-.github/
|-.storybook/
|-build/
|-coverage/
|-dist/
|-docs/
|-node_modules/
|-public/
|-src/
|  |-components/
|  |-style/
|  |-ThemeManager/
|  |-.babelrc
|  |-.index.js
|  |-.setupTests.js
|
|-.eslint
|-.gitignore
|-.index.js
|-LICENSE
|-package.json
|-README.md
|-rollup.config.js
|-yarn.lock

```

## **Observações:**

- `build` - Este arquivos será gerado apenas caso seja executado o comando `yarn build`, o diretório é ignorado pelo `.gitignore`
- `coverage` - Este arquivos será gerado apenas caso seja executado o comando `yarn test --coverage`, o diretório é ignorado pelo `.gitignore`
- `dist` - Este arquivos será gerado apenas caso seja executado o comando `yarn rollup`, o diretório é ignorado pelo `.gitignore`
- `node_modules` - Este arquivos será gerado apenas caso seja executado o comando `yarn install`, o diretório é ignorado pelo `.gitignore`