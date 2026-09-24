import { test, expect } from 'vitest';

const BASE_URL = 'https://reqres.in';

test('Método GET para consultar usuários', async () => {
  const res = await fetch(`${BASE_URL}/api/users?page=2`);

  // Testa status code
  expect(res.status).toBe(200);

  // Converte o retorno para JSON
  const dados = await res.json();

  // MOSTRA O JSON REAL RETORNADO PELA API
  console.log('RESPOSTA GET:', dados);

  // Testa informações do retorno
  expect(dados.page).toBe(2);
  expect(dados.data).toBeDefined();
  expect(Array.isArray(dados.data)).toBe(true);
});


test('Método POST para criar um novo usuário', async () => {
  const res = await fetch(`${BASE_URL}/api/users`, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      name: 'Heveny',
      job: 'QA Engineer',
    }),
  });

  // Testa status code
  expect(res.status).toBe(201);

  // Converte o retorno para JSON
  const dados = await res.json();

  // MOSTRA O JSON REAL RETORNADO PELA API
  console.log('RESPOSTA POST:', dados);

  // Testa os dados enviados
  expect(dados.name).toBe('Heveny');
  expect(dados.job).toBe('QA Engineer');

  // Testa se a API gerou um ID
  expect(dados.id).toBeDefined();

  // Testa se a API informou a data de criação
  expect(dados.createdAt).toBeDefined();
});