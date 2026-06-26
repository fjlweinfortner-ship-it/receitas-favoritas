# Roteiro do Figma - Colecao de Receitas

## Nome do app

Receitas Favoritas

## Estilo visual baseado no modelo enviado

- Tema: culinaria moderna, com cards brancos, fotos de comida e botoes verdes.
- Cores:
  - Fundo: `#F8F5F0`
  - Primaria: `#2D6A4F`
  - Secundaria: `#E85D04`
  - Texto principal: `#2B2B2B`
  - Card: `#FFFFFF`
  - Erro/exclusao: `#C1121F`
- Fonte: Inter, Roboto ou a fonte padrao do Figma.
- Componentes com borda arredondada entre 14 e 22 px.
- Usar fotos reais de pratos nos cards e na tela de detalhes.

## Tela 1 - Listagem de receitas

Objetivo: mostrar as receitas cadastradas e permitir criar uma nova.

Elementos:

```text
Topo:
Receitas

Campo de busca:
Buscar receitas...

Filtros:
Todas | Doces | Salgadas | Rapidas

Lista:
[Card Receita]
Nome: Bolo de cenoura
Categoria: Sobremesa
Tempo: 45 min
Imagem da receita

[Card Receita]
Nome: Macarrao alho e oleo
Categoria: Prato principal
Tempo: 20 min
Imagem da receita

Botao:
+ Nova receita
```

Estados importantes:

- Quando nao houver receitas, mostrar: "Nenhuma receita cadastrada ainda."
- Ao clicar no card, navegar para detalhes.
- Ao clicar em "Nova receita", navegar para formulario.

## Tela 2 - Formulario de cadastro/edicao

Objetivo: criar ou editar uma receita.

Elementos:

```text
Topo:
Nova receita / Editar receita

Campo:
Nome da receita

Campo:
Tempo de preparo

Campo grande:
Ingredientes

Campo grande:
Modo de preparo

Botao:
Salvar receita
```

Validacoes para explicar na apresentacao:

- Se nome estiver vazio, mostrar erro.
- Se ingredientes estiver vazio, mostrar erro.
- Se modo de preparo estiver vazio, mostrar erro.
- Se tempo estiver vazio, mostrar erro.

Versao de edicao:

- O titulo pode mudar para "Editar receita".
- Os campos ja aparecem preenchidos.
- O botao pode ficar como "Salvar alteracoes".

## Tela 3 - Detalhes da receita

Objetivo: visualizar a receita completa e acessar editar/excluir.

Elementos:

```text
Topo:
Bolo de cenoura
Tempo de preparo: 45 min

Imagem grande da receita

Informacoes rapidas:
45 min | Receita | Favorita

Secao:
Ingredientes
- 3 cenouras
- 2 ovos
- 2 xicaras de farinha

Secao:
Modo de preparo
Bata os ingredientes, misture a farinha e leve ao forno...

Botoes:
Editar
Excluir
```

Ao clicar em excluir:

```text
Modal/alerta:
Excluir receita?
Essa acao nao pode ser desfeita.

Botoes:
Cancelar
Excluir
```

## Fluxo com setas no Figma

```text
Listagem -> Nova receita -> Formulario -> Salvar -> Listagem
Listagem -> Card da receita -> Detalhes
Detalhes -> Editar -> Formulario preenchido -> Salvar -> Detalhes/Listagem
Detalhes -> Excluir -> Confirmacao -> Listagem
```

## Componentes para identificar no Figma

Crie uma area chamada "Componentes" e coloque:

| Componente | Uso |
|---|---|
| Botao primario | Nova receita, salvar |
| Botao secundario | Editar |
| Botao de perigo | Excluir |
| Card de receita | Item reutilizado na lista |
| Input de texto | Nome e tempo |
| Textarea | Ingredientes e modo de preparo |
| Header | Titulo das telas |

## Texto curto para apresentar o design

Escolhi uma interface simples para facilitar o cadastro rapido de receitas. A tela inicial mostra apenas o nome e o tempo de preparo, porque essas sao as informacoes mais importantes na hora de escolher uma receita. Os detalhes ficam em uma tela separada para nao deixar a lista poluida. O botao de exclusao fica na tela de detalhes para evitar apagar uma receita sem querer.
## Status: concluido
