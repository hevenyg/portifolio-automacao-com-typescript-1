import { test, expect } from 'vitest';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test('Método para criar um novo post', async () => {
  const res = await fetch(`${BASE_URL}/posts/1`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        userId: 1,
      title: 'Meu novo POST DA ATIVIDADE DE PUT',
      body: 'Conteúdo ATIVIDADE PUT',
    }),
  });

  // Testa status code
  expect(res.status).toBe(200);

  // Testa se o retorno é um objeto JSON
  const dados = await res.json();

  expect(dados.title).toBe('Meu novo POST DA ATIVIDADE DE PUT');
  expect(dados.body).toBe('Conteúdo ATIVIDADE PUT');
});