//Função Delay de tempo para retornar promisses
export function aguardar (ms:number): Promise<void>{
    return new Promise(resolve => setTimeout(resolve, ms));
};

