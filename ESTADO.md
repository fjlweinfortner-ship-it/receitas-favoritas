# Plano de Estado - Colecao de Receitas

| Dado | Local no codigo | Como e atualizado |
|---|---|---|
| Lista de receitas | `RecipesListScreen`, usando `useState<Recipe[]>` | Ao abrir a tela, carrega do `AsyncStorage`. Ao salvar, editar ou excluir, a lista e recarregada. |
| Receita selecionada | Parametro de navegacao `route.params.recipeId` | Ao clicar em um card da lista, o id da receita e enviado para a tela de detalhes. |
| Nome da receita | Estado local da `RecipeFormScreen` | Atualizado pelo `onChangeText` do campo nome. |
| Ingredientes | Estado local da `RecipeFormScreen` | Atualizado pelo `onChangeText` do campo ingredientes. |
| Modo de preparo | Estado local da `RecipeFormScreen` | Atualizado pelo `onChangeText` do campo modo de preparo. |
| Tempo de preparo | Estado local da `RecipeFormScreen` | Atualizado pelo `onChangeText` do campo tempo de preparo. |
| Mensagens de erro | Estado local da `RecipeFormScreen` | Atualizado quando o usuario tenta salvar com algum campo obrigatorio vazio. |
| Dados persistidos | `AsyncStorage`, chave `@recipe_collection:recipes` | Atualizado pelas funcoes `saveRecipe`, `updateRecipe` e `deleteRecipe`. |

## Validacoes basicas

| Campo | Regra |
|---|---|
| Nome | Obrigatorio, nao pode salvar vazio. |
| Ingredientes | Obrigatorio, nao pode salvar vazio. |
| Modo de preparo | Obrigatorio, nao pode salvar vazio. |
| Tempo de preparo | Obrigatorio, deve indicar o tempo em minutos ou texto parecido com "30 min". |

## Estrutura do objeto Receita

```ts
type Recipe = {
  id: string;
  name: string;
  ingredients: string;
  preparation: string;
  preparationTime: string;
  createdAt: string;
  updatedAt: string;
};
```




## Observacao

Os dados persistem localmente via AsyncStorage e sobrevivem ao fechamento do app
