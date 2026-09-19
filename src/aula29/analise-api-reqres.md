# Análise da API Pública ReqRes

## 1. Endpoint GET – Listagem de Usuários

### Endpoint/Rota

/api/users?page=2

### Método HTTP

GET

### URL Completa

https://reqres.in/api/users?page=2

### Headers

N/A

### Body

N/A

### Status Code Esperado

200 OK

### Payload de Retorno

```json
{
  "page": 2,
  "per_page": 6,
  "total": 12,
  "total_pages": 2,
  "data": []
}