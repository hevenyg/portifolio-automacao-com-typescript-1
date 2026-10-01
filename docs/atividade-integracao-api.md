# Atividade — Testes de Integração de API

## 1. Objetivo

Esta atividade tem como objetivo compreender os principais métodos HTTP utilizados em APIs REST, seus respectivos códigos de status e a estrutura de payloads JSON.

Também foram desenvolvidos testes de integração utilizando TypeScript, Vitest e a API pública JSONPlaceholder, com o objetivo de validar operações de consulta, criação, atualização e exclusão de usuários.

---

## 2. Tecnologias utilizadas

- TypeScript
- Vitest
- Node.js
- Fetch API
- JSON
- API REST
- JSONPlaceholder
- GitHub Codespaces

---

## 3. API utilizada

Para a realização dos testes foi utilizada a API pública JSONPlaceholder.

URL base:

https://jsonplaceholder.typicode.com

Recurso utilizado:

/users

Os testes foram realizados diretamente contra a API, sem utilização de mocks, permitindo validar a comunicação entre o teste e o serviço HTTP.

---

## 4. Métodos HTTP

### 4.1 GET

O método GET é utilizado para consultar ou recuperar informações de um recurso.

Exemplo:

GET /users/1

No teste desenvolvido, foi esperado o código de status 200 OK.

Além do status, foram verificadas propriedades importantes da resposta:

- id
- name
- email

### 4.2 POST

O método POST é utilizado para enviar dados ao servidor e criar um novo recurso.

Exemplo:

POST /users

Payload enviado:

{
  "name": "Heveny Santos",
  "username": "heveny",
  "email": "heveny@email.com"
}

O teste verificou o código 201 Created.

Também foram validados:

- id
- name
- email

### 4.3 PUT

O método PUT é utilizado para atualizar um recurso.

Neste teste foi enviada uma nova representação do usuário:

{
  "name": "Heveny Carla",
  "username": "heveny",
  "email": "heveny.novo@email.com"
}

Requisição:

PUT /users/1

O teste esperou 200 OK e verificou se os dados atualizados foram retornados corretamente.

### 4.4 PATCH

O método PATCH é utilizado para realizar uma atualização parcial de um recurso.

Diferentemente do exemplo de PUT, neste teste apenas o e-mail foi enviado:

{
  "email": "novoemail@email.com"
}

Requisição:

PATCH /users/1

O teste esperou 200 OK e verificou se o e-mail retornado correspondia ao valor enviado.

### 4.5 DELETE

O método DELETE é utilizado para solicitar a exclusão de um recurso.

Requisição:

DELETE /users/1

Neste teste, foi esperado 200 OK.

Observação: o código de status de uma operação DELETE pode variar conforme o contrato da API. APIs também podem utilizar 204 No Content. Neste projeto foi utilizado 200 de acordo com o comportamento observado na API JSONPlaceholder durante a execução do teste.

---

## 5. Diferença entre PUT, PATCH e DELETE

| Método | Finalidade | Corpo da requisição |
|---|---|---|
| PUT | Atualizar um recurso | Normalmente contém a representação completa do recurso |
| PATCH | Atualizar parcialmente um recurso | Contém apenas os campos que serão alterados |
| DELETE | Excluir um recurso | Normalmente não possui corpo |

Exemplo prático:

PUT:

{
  "name": "Heveny Carla",
  "username": "heveny",
  "email": "heveny.novo@email.com"
}

PATCH:

{
  "email": "novoemail@email.com"
}

A diferença principal observada nos testes é que o PATCH permite enviar somente a informação que precisa ser modificada.

---

## 6. Principais códigos de status HTTP

| Código | Nome | Significado |
|---|---|---|
| 200 | OK | Requisição processada com sucesso |
| 201 | Created | Recurso criado com sucesso |
| 202 | Accepted | Requisição aceita para processamento |
| 204 | No Content | Requisição processada sem conteúdo na resposta |
| 400 | Bad Request | Requisição inválida |
| 401 | Unauthorized | Autenticação necessária ou inválida |
| 403 | Forbidden | Acesso não permitido |
| 404 | Not Found | Recurso não encontrado |
| 409 | Conflict | Conflito com o estado atual do recurso |
| 422 | Unprocessable Content | Dados não puderam ser processados |
| 500 | Internal Server Error | Erro interno no servidor |
| 502 | Bad Gateway | Resposta inválida de um servidor intermediário |
| 503 | Service Unavailable | Serviço temporariamente indisponível |

---

## 7. Estrutura de um payload JSON

Um payload JSON representa os dados enviados ou recebidos por uma API.

Exemplo:

{
  "name": "Heveny Santos",
  "username": "heveny",
  "email": "heveny@email.com"
}

Neste exemplo:

- name representa o nome do usuário;
- username representa o nome de usuário;
- email representa o endereço de e-mail.

O JSON utiliza pares de chave e valor.

---

## 8. Testes de integração desenvolvidos

Os testes foram implementados no arquivo:

tests/api/usuarios.test.ts

Foram desenvolvidos cinco cenários:

| ID | Cenário | Método | Resultado |
|---|---|---|---|
| CT-INT-001 | Consultar usuário | GET | Passou |
| CT-INT-002 | Criar usuário | POST | Passou |
| CT-INT-003 | Atualizar usuário | PUT | Passou |
| CT-INT-004 | Atualizar parcialmente usuário | PATCH | Passou |
| CT-INT-005 | Excluir usuário | DELETE | Passou |

---

## 9. Resultado da execução

Comando utilizado:

npx vitest run tests/api/usuarios.test.ts

Resultado final:

Test Files  1 passed (1)

Tests       5 passed (5)

Todos os cinco testes desenvolvidos foram executados com sucesso.

---

## 10. Estrutura do projeto

A documentação desta atividade está organizada da seguinte forma:

portifolio-automacao-com-typescript/
│
├── docs/
│   └── atividade-integracao-api.md
│
├── tests/
│   └── api/
│       └── usuarios.test.ts
│
├── src/
├── utils/
├── package.json
├── package-lock.json
└── README.md

---

## 11. Conclusão

A atividade permitiu praticar conceitos fundamentais de integração com APIs REST.

Foram realizados testes utilizando os métodos GET, POST, PUT, PATCH e DELETE, verificando códigos de status HTTP e dados retornados pela API.

Também foi possível compreender, na prática, a diferença entre PUT e PATCH, principalmente em relação à atualização completa e parcial de recursos.

A implementação dos testes com TypeScript e Vitest possibilitou automatizar as validações e obter um resultado reproduzível durante a execução.

Ao final da atividade, os cinco cenários de integração foram executados com sucesso.
