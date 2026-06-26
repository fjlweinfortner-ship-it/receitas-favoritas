# Receitas Favoritas

Aplicativo mobile feito em React Native com Expo para cadastrar, listar, visualizar, editar e excluir receitas favoritas.

## O que o app faz

- Cadastra receitas com nome, tempo de preparo, ingredientes e modo de preparo.
- Lista todas as receitas salvas.
- Mostra os detalhes de uma receita ao tocar no card.
- Permite editar uma receita existente.
- Permite excluir uma receita com confirmacao.
- Salva os dados localmente com `AsyncStorage`, entao as receitas continuam no app depois de fechar e abrir novamente.

## Como abrir no VS Code

1. Abra o VS Code.
2. Clique em `File` > `Open Folder`.
3. Selecione esta pasta:

```text
C:\Users\anapa\Documents\Codex\2026-06-25\chegamos-nossa-etapa-final-de-avalia\receitas-favoritas
```

## Como rodar o app

No terminal do VS Code, rode:

```bash
npm.cmd install
```

Depois rode:

```bash
npm.cmd start
```

Se abrir uma tela do Expo no terminal, escolha uma destas opcoes:

- Pressione `a` para abrir no emulador Android, se voce tiver Android Studio configurado.
- Ou baixe o app **Expo Go** no celular e escaneie o QR Code que aparece no terminal.

## Observacao importante para Windows

Se o comando `npm install` der erro no PowerShell dizendo que scripts foram bloqueados, use sempre:

```bash
npm.cmd install
npm.cmd start
```

Outra opcao e abrir o terminal do VS Code como `Command Prompt` em vez de `PowerShell`.

## Arquivos principais

```text
App.js
src/
├── components/
│   ├── AppButton.js
│   ├── FormField.js
│   ├── Header.js
│   └── RecipeCard.js
├── screens/
│   ├── RecipesListScreen.js
│   ├── RecipeFormScreen.js
│   └── RecipeDetailsScreen.js
├── storage/
│   └── recipeStorage.js
└── models/
    └── Recipe.js
```

## Ordem sugerida de commits

O professor pediu no minimo 8 commits. Sugestao:

```bash
git add .
git commit -m "docs: adiciona planejamento do app"

git add .
git commit -m "chore: configura projeto Expo"

git add .
git commit -m "feat: cria componentes reutilizaveis"

git add .
git commit -m "feat: adiciona persistencia local de receitas"

git add .
git commit -m "feat: cria tela de listagem"

git add .
git commit -m "feat: cria formulario de receita"

git add .
git commit -m "feat: cria tela de detalhes"

git add .
git commit -m "feat: adiciona edicao e exclusao de receitas"
```

Se voce ja tiver feito tudo antes de commitar, ainda assim faca commits separados por arquivo/grupo usando o painel de Source Control do VS Code.

## O que mostrar na apresentacao

- Figma com 3 telas: listagem, formulario e detalhes.
- App rodando no celular ou emulador.
- Cadastro de uma receita.
- Fechar e abrir o app para mostrar que os dados continuam salvos.
- Edicao de ingredientes ou modo de preparo.
- Exclusao com confirmacao.
- Codigo da validacao no arquivo `src/screens/RecipeFormScreen.js`.
- Codigo do armazenamento no arquivo `src/storage/recipeStorage.js`.
