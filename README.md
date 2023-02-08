# <p align = "center"> Projeto Customers Registration </p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Matheus Amorim-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/mtsgamorim/Customer-registration?color=4dae71&style=flat-square" />
</p>

## :clipboard: Descrição

Este projeto é uma API de cadastro de clientes que possui seu proprio sistema de validação de CPF

---

## :computer: Tecnologias e Conceitos

- Javascript
- Postgres com Prima
- Jest
- Express
- Orientação a objetos

---

## :rocket: Rotas

```yml
POST /customer
    - Rota para cadastrar um novo cliente
    - headers: {}
    - body:{
        "name": "Lorem ipsum",
        "cpf": "111.256.895-21",
        "birthday": "12/20/1998"
    - Campo CPF aceita formato com mascara xxx.xxx.xxx-xx ou sem máscara xxxxxxxxxxx
    - Campo birthday aceita datas no formato americano MM/DD/YYYY
}
```

```yml
Get /customer/:cpf
    - Rota para buscar cliente pelo seu cpf
    - headers: {}
    - body: {}
    - trocar ':cpf' pelo cpf do cliente que gostaria de buscar, ele aceita cpf com máscara xxx.xxx.xxx-xx ou sem xxxxxxxxxxx
    -exemplo: /customer/111.111.111-11


```

```yml
Get /allcustomers?page=1
    - Rota para buscar todos os clientes, cada listagem de página pega os 10 primeiros clientes
    - headers: {}
    - body: {}
    - Caso queira não usar o page, fazer a requisição direto em /allcustomers retorna todos os clientes.
```

---

## 🏁 Rodando a aplicação

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/mtsgamorim/Customer-registration.git
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Trocar o nome do arquivo .env.example para .env e adicionar o link do banco de dados postgres e a porta escolhida para rodar o servidor.

exemplo

```
DATABASE_URL="postgres://postgres:senha@localhost:5432/meuBanco"
PORT= 4000
```

Agora, faça a migrate do seu banco de dados

```
npm run build
```

Finalizado o processo, é só inicializar o servidor

```
npm start
```

## 🏁 Fazendo os testes da aplicação

Para rodar os testes da aplicação, basta rodar o comando no terminal

```
npm run test
```
