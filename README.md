# Catálogo de Produtos

Este projeto é uma aplicação web desenvolvida com React e Vite para exibir um catálogo de produtos em estilo moderno, com busca, paginação e carregamento dinâmico de dados consumidos de uma API pública.

Ele foi desenvolvido como parte da disciplina de Programação para Web 2, no curso de Tecnologia em Análise e Desenvolvimento de Sistemas do Instituto Federal de Pernambuco, Campus Jaboatão dos Guararapes.

## Funcionalidades principais

- Exibição de produtos em cards com imagem, categoria, título e preço.
- Busca textual em tempo real para encontrar produtos no catálogo.
- Paginação simples para navegar entre páginas de resultados.
- Estados de carregamento e erro para melhor experiência do usuário.
- Interface responsiva e organizada com componentes reutilizáveis.

## Tecnologias utilizadas

- React 19
- Vite
- JavaScript ES6+
- CSS Modules
- Fetch API para integração com a API de produtos

## Estrutura do projeto

- src/components: componentes da interface como header, grid, cards e barra de busca.
- src/context: gerenciamento do estado global dos produtos.
- src/services: funções para consumo da API.
- src/App.jsx: ponto de entrada da aplicação.

## Como executar o projeto

1. Acesse a pasta do projeto:
   ```bash
   cd vite-project
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra o navegador no endereço exibido no terminal, normalmente:
   ```bash
   http://localhost:5173
   ```

## Como buildar a aplicação

Para gerar a versão de produção, execute:

```bash
npm run build
```

O resultado ficará na pasta dist.
