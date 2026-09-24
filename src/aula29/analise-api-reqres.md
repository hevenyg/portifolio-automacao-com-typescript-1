# Análise da API Pública ReqRes

## Endpoint 1 — GET /api/users

### 1. Identificação e Finalidade

**Endpoint/Rota:**

`/api/users?page=2`

**Objetivo de Negócio:**

Permite consultar uma lista de usuários cadastrados no sistema.
Em uma aplicação real, essa chamada poderia ser utilizada para
exibir uma lista de usuários em uma tela administrativa.

---

### 2. Estrutura do Request

**Método HTTP:**

`GET`

**URL Completa:**

`https://reqres.in/api/users?page=2`

**Headers (Cabeçalhos):**

Não é necessário enviar `Content-Type`, pois a requisição GET
não possui corpo JSON.

**Body (Corpo):**

`N/A`

---

### 3. Estrutura do Response

**Status Code Esperado:**

`200 OK`

**Payload de Retorno:**

  RUN  v5.0.0 /workspaces/portifolio-automacao-com-typescript

stdout | src/aula29/reqres.test.ts > Método GET para consultar usuários
RESPOSTA GET: {
  page: 2,
  per_page: 6,
  total: 12,
  total_pages: 2,
  data: [
    {
      id: 7,
      email: 'michael.lawson@reqres.in',
      first_name: 'Michael',
      last_name: 'Lawson',
      avatar: 'https://reqres.in/img/faces/7-image.jpg'
    },
    {
      id: 8,
      email: 'lindsay.ferguson@reqres.in',
      first_name: 'Lindsay',
      last_name: 'Ferguson',
      avatar: 'https://reqres.in/img/faces/8-image.jpg'
    },
    {
      id: 9,
      email: 'tobias.funke@reqres.in',
      first_name: 'Tobias',
      last_name: 'Funke',
      avatar: 'https://reqres.in/img/faces/9-image.jpg'
    },
    {
      id: 10,
      email: 'byron.fields@reqres.in',
      first_name: 'Byron',
      last_name: 'Fields',
      avatar: 'https://reqres.in/img/faces/10-image.jpg'
    },
    {
      id: 11,
      email: 'george.edwards@reqres.in',
      first_name: 'George',
      last_name: 'Edwards',
      avatar: 'https://reqres.in/img/faces/11-image.jpg'
    },
    {
      id: 12,
      email: 'rachel.howell@reqres.in',
      first_name: 'Rachel',
      last_name: 'Howell',
      avatar: 'https://reqres.in/img/faces/12-image.jpg'
    }
  ],
  support: {
    url: 'https://benhowdle.im/first-cto-playbook?utm_source=reqres&utm_medium=json&utm_campaign=referral',
    text: 'Become a better CTO. A playbook of painful stories and practical advice from a two-time startup CTO.'
  },
  _meta: {
    powered_by: 'ReqRes',
    docs_url: 'https://app.reqres.in/documentation',
    upgrade_url: 'https://app.reqres.in/upgrade',
    example_url: 'https://app.reqres.in/examples/notes-app',
    variant: 'v1_a',
    message: 'Your data persists here. Add auth, logs, and custom schemas to build a real backend.',
    cta: {
      label: 'See example app',
      url: 'https://app.reqres.in/examples/notes-app'
    },
    context: 'legacy_success'
  }
}

stdout | src/aula29/reqres.test.ts > Método POST para criar um novo usuário
RESPOSTA POST: {
  name: 'Heveny',
  job: 'QA Engineer',
  id: '181',
  createdAt: '2026-09-24T12:56:06.513Z',
  _meta: {
    powered_by: 'ReqRes',
    docs_url: 'https://app.reqres.in/documentation',
    upgrade_url: 'https://app.reqres.in/upgrade',
    example_url: 'https://app.reqres.in/examples/notes-app',
    variant: 'v1_a',
    message: 'Your data persists here. Add auth, logs, and custom schemas to build a real backend.',
    cta: {
      label: 'See example app',
      url: 'https://app.reqres.in/examples/notes-app'
    },
    context: 'legacy_success'
  }
}

 ✓ src/aula29/reqres.test.ts (2 tests) 459ms
   ✓ Método GET para consultar usuários 287ms
   ✓ Método POST para criar um novo usuário 170ms

 Test Files  1 passed (1)
      Tests  2 passed (2)
   Start at  12:56:05
   Duration  627ms (tests 91%, transform 5%, import 3%, worker 1%)
