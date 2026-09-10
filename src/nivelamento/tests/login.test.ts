import { test, expect, vi } from 'vitest';

// Simular login lento
function loginlento(usuario: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`BEM VINDO, ${usuario}!`);
        }, 5000);
    });
}

test('Simular login usando fake timers', async () => {

    // Ligando a máquina do tempo
    vi.useFakeTimers();

    console.log('Iniciando Cenário de teste');

    // Chamando usuário sem await
    const promessalogin = loginlento('Dona Redonda');

    // Avançando o tempo em 5 segundos
    vi.advanceTimersByTime(5000);

    // Pegando o resultado da Promise
    const resultado = await promessalogin;

    // Verificar o resultado
    expect(resultado).toBe('BEM VINDO, Dona Redonda!');

    console.log('Sucesso!!! Teste realizado na velocidade da luz');

    // Desligando a máquina do tempo
    vi.useRealTimers();
});