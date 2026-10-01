import { test, expect } from "vitest";

const BASE_URL = "https://jsonplaceholder.typicode.com";

test("Deve consultar um usuário", async () => {
    const response = await fetch(`${BASE_URL}/users/1`);

    expect(response.status).toBe(200);
    const usuario = await response.json();

    console.log(usuario);

    expect(usuario).toHaveProperty("id");
    expect(usuario).toHaveProperty("name");
    expect(usuario).toHaveProperty("email");

});

test("Deve criar um usuário", async () => {
    const novoUsuario = {
        name: "Heveny Santos",
        username: "heveny",
        email: "heveny@email.com"
    };

    const response = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(novoUsuario)
    });

    expect(response.status).toBe(201);

    const usuarioCriado = await response.json();

    console.log(usuarioCriado);

    expect(usuarioCriado).toHaveProperty("id");
    expect(usuarioCriado.name).toBe("Heveny Santos");
    expect(usuarioCriado.email).toBe("heveny@email.com");

 
});

test("Deve atualizar um usuário utilizando PUT", async () => {
    const usuarioAtualizado = {
        name: "Heveny Carla",
        username: "heveny",
        email: "heveny.novo@email.com"
    };

    const response = await fetch(`${BASE_URL}/users/1`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuarioAtualizado)
    });

    expect(response.status).toBe(200);

    const resultado = await response.json();

    console.log(resultado);

    expect(resultado.name).toBe("Heveny Carla");
    expect(resultado.email).toBe("heveny.novo@email.com");
});

test("Deve atualizar parcialmente um usuário utilizando PATCH", async () => {
    const alteracao = {
        email: "novoemail@email.com"
    };

    const response = await fetch(`${BASE_URL}/users/1`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(alteracao)
    });

    expect(response.status).toBe(200);

    const resultado = await response.json();

    console.log(resultado);

    expect(resultado.email).toBe("novoemail@email.com");
});

test("Deve excluir um usuário", async () => {
    const response = await fetch(`${BASE_URL}/users/1`, {
        method: "DELETE"
    });

    expect(response.status).toBe(200);
});