# Decisoes de projeto - Receitas Favoritas

## Tecnologia escolhida

- [ ] Nativo (Kotlin)
- [x] Hibrido (React Native com Expo)

Escolhi React Native com Expo porque permite desenvolver mais rapido, testar no celular com o Expo Go e criar uma interface mobile funcional com menos configuracao inicial. Como o prazo do projeto e curto, essa escolha facilita entregar CRUD, navegacao, persistencia local e telas organizadas sem precisar configurar Android Studio ou Xcode.

## Persistencia escolhida

A persistencia escolhida foi `AsyncStorage` da biblioteca `@react-native-async-storage/async-storage`.

Usei essa opcao porque o app precisa salvar uma lista simples de receitas localmente, sem necessidade de servidor ou banco de dados externo. O `AsyncStorage` permite guardar os dados no celular em formato JSON e recupera-los quando o aplicativo for aberto novamente, atendendo ao requisito de persistencia local de forma simples e eficiente.

## Estrutura de navegacao

O app possui 3 telas principais conectadas pelo `React Navigation` com `createNativeStackNavigator`:

| Tela | Funcao |
|---|---|
| RecipesListScreen | Mostra todas as receitas cadastradas com busca por nome e filtros por categoria. |
| RecipeFormScreen | Permite criar uma nova receita ou editar uma receita existente (reutilizavel). |
| RecipeDetailsScreen | Mostra todos os detalhes da receita: ingredientes, modo de preparo e tempo. |

As telas se comunicam por parametros de navegacao. Ao clicar em uma receita da lista, o app envia o `id` da receita para a tela de detalhes. Ao clicar em editar, o mesmo `id` e enviado para a tela de formulario, que carrega os dados ja preenchidos automaticamente.

## Funcionalidade que eu queria implementar mas nao deu tempo

Eu queria implementar o filtro funcional por categoria (Doces, Salgadas, Rapidas). Os chips de categoria ja aparecem na tela de listagem, porem o filtro ainda nao esta conectado. Para implementar, eu adicionaria um campo `categoria` no formulario, salvaria esse valor no AsyncStorage junto com a receita e filtraria a lista pelo chip selecionado antes de renderizar o FlatList.

## Trecho que eu escrevi sem ajuda de IA

```js
function validateRecipe() {
  // AJUSTADO MANUALMENTE: validacao simples para impedir cadastro vazio.
  if (!name.trim()) return 'Informe o nome da receita.';
  if (!preparationTime.trim()) return 'Informe o tempo de preparo.';
  if (!ingredients.trim()) return 'Informe os ingredientes.';
  if (!preparation.trim()) return 'Informe o modo de preparo.';
  return '';
}
```

Esse trecho verifica se os campos obrigatorios foram preenchidos antes de salvar a receita. Se algum campo estiver vazio, a funcao retorna uma mensagem de erro que e exibida em destaque na tela. Se todos estiverem preenchidos, retorna texto vazio e o cadastro prossegue normalmente.

## Uso de IA

Usei IA como apoio para organizar a estrutura inicial do projeto, planejar os documentos obrigatorios e revisar a logica do CRUD. A validacao dos campos, os ajustes de layout, nomes de variaveis e a revisao do fluxo de navegacao foram feitos e revisados manualmente por mim durante o desenvolvimento.
docs: atualiza decisoes de projeto

