Esste é um projeto [**React Native**](https://reactnative.dev) que utiliza o [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Descrição
No aplicativo é possível realizar o CRUD, filtro, pesquisa e favoritar os produtos.
Este é um projeto mobile, desenvolvido em React Native, realizando a gestão de produtos, utilizando os seguintes recursos:

* Context API
* Reducer
* Axios
* Firebase (Remote Configs e Feature Toggles)
* Bottom Tabs
* Atomic Design
* Typescript

# Inicio

## Passos:

Realizar a instalação dos pacotes do projeto pelo seguinte comando:
```bash
yarn

### Android

```bash
yarn android

### iOS

```bash
yarn ios
```

A lista completa com todos os usuários se encontra em https://dummyjson.com/users
Para realizar o login utilze um dos usuarios abaixo:

  username: atuny0
  password: 9uQFF1Lh

  username: hbingley1
  password: CQutx25i8r

  username: rshawe2
  password: OWsTbMUgFc


Os produtos exibidos em destaque são controlados através de uma remote config do Firebase, seguindo a seguinte estrutura:
{
  "attribute": "id",
  "values": []
}

*attribute:* Aqui é definido qual atributo do produto será utlizado para definir os produtos em destaque. `(id, title, brand)`
*values:* Dependendo do valor definido em `attribute`, devem ser informados os produtos. 

Por exemplo caso o atributo definido seja `id`, então deve ser informado na array os id's dos produtos.


É possível também controlar o acesso as funcionalidades Adicionar, Editar, Excluir e Filtrar produtos. O controle é realizado por feature toggle do Firebase;

* add_product: Controla a exibição do botão adicionar produto.
* edit_product: Controla a exibição do botão editar produto.
* delete_product: Controla a exibição do botão excluir produto.
* filter_categories: Controla a exibição do botão filtar produto.


APK Android: [**apk-products**](https://drive.google.com/file/d/1YYlQVvCRgTJf_uU8bR2fPS8FshbKIx5U/view?usp=sharing) 