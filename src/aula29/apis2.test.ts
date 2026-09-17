import { test, expect } from 'vitest';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test('Método para criar um novo post', async () => {
  const res = await fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: 1,
      title: 'Meu novo Post',
      body: 'Conteúdo do meu novo post',
    }),
  });

  // Testa status code
  expect(res.status).toBe(201);

  // Testa se o retorno é um objeto JSON
  const dados = await res.json();

  expect(dados.title).toBe('Meu novo Post');
  expect(dados.body).toBe('Conteúdo do meu novo post');
});

