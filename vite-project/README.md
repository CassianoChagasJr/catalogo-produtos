# Catálogo de Produtos

Este projeto é uma aplicação web desenvolvida com React e Vite para exibir um catálogo de produtos com busca, paginação e carregamento dinâmico de dados consumidos de uma API pública.

Ele foi desenvolvido como parte da disciplina de Programação para Web 2, no curso de Tecnologia em Análise e Desenvolvimento de Sistemas do Instituto Federal de Pernambuco, Campus Jaboatão dos Guararapes.

## Funcionalidades principais

- Exibição de produtos em cards com imagem, categoria, título e preço.
- Busca textual para localizar produtos no catálogo.
- Paginação para navegar entre páginas de resultados.
- Estados de carregamento e erro para melhorar a experiência do usuário.
- Interface organizada e responsiva, com componentes reutilizáveis.

## Tecnologias utilizadas

- React 19
- Vite
- JavaScript ES6+
- CSS Modules
- Fetch API para integração com a API de produtos

## Estrutura do Projeto

Principais arquivos e pastas:

- src/App.jsx - Componente principal que monta o layout e a aplicação
- src/main.jsx - Ponto de entrada React e renderização do app
- src/context/ProductContext.jsx - Estado global do catálogo e lógica de busca/paginação
- src/services/api.js - Funções para buscar produtos e categorias da API
- src/components/SearchBar/SearchBar.jsx - Barra de pesquisa do catálogo
- src/components/Grid/Grid.jsx - Exibe a grade de cards de produtos
- src/components/Card/Card.jsx - Card de produto com imagem, categoria, título e preço
- src/components/Layout/Layout.jsx - Layout com header e footer
- src/components/Header/Header.jsx - Cabeçalho da aplicação e ação de voltar ao início
- src/components/Footer/Footer.jsx - Rodapé da aplicação

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

**Aluno:** Cassiano Do Espirito Santo Chagas Junior 

**Turma:** ADS 2025.2

**Professor:** Josino Neto
