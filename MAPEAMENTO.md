# Mapa de Componentes - Colecao de Receitas

```text
App
├── AppNavigator
│   ├── RecipesListScreen
│   │   ├── Header
│   │   ├── RecipeCard
│   │   ├── EmptyState
│   │   └── FloatingAddButton
│   ├── RecipeFormScreen
│   │   ├── Header
│   │   ├── TextInputField
│   │   ├── TextAreaField
│   │   ├── PrimaryButton
│   │   └── ErrorMessage
│   └── RecipeDetailsScreen
│       ├── Header
│       ├── DetailSection
│       ├── SecondaryButton
│       └── DangerButton
├── components
│   ├── RecipeCard
│   ├── TextInputField
│   ├── TextAreaField
│   ├── PrimaryButton
│   └── Header
├── storage
│   └── recipeStorage
└── models
    └── Recipe
```

## Componentes reutilizaveis

| Componente | Onde aparece | Funcao |
|---|---|---|
| Header | Todas as telas | Mostra o titulo da tela e botao de voltar quando necessario |
| RecipeCard | Tela de listagem | Exibe nome da receita e tempo de preparo |
| TextInputField | Tela de formulario | Entrada de textos curtos, como nome e tempo |
| TextAreaField | Tela de formulario | Entrada de textos longos, como ingredientes e modo de preparo |
| PrimaryButton | Formulario e detalhes | Acao principal, como salvar ou editar |
| DangerButton | Tela de detalhes | Acao de exclusao com confirmacao |

## Fluxo de navegacao

```text
RecipesListScreen
├── clicar em "Nova receita" -> RecipeFormScreen
├── clicar em uma receita -> RecipeDetailsScreen

RecipeDetailsScreen
├── clicar em "Editar" -> RecipeFormScreen com dados preenchidos
├── clicar em "Excluir" -> confirma exclusao -> RecipesListScreen

RecipeFormScreen
├── clicar em "Salvar" -> valida campos -> salva no AsyncStorage -> RecipesListScreen
└── clicar em "Voltar" -> retorna para tela anterior
```
## Componentes reutilizaveis

- AppButton: botao padrao usado em todas as telas
- FormField: campo de formulario reutilizavel
- Header: cabecalho com titulo e botao de voltar
- RecipeCard: card de receita exibido na listagem
