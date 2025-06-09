// 🧩 Exercício 5 – Tratamento de erro
// Crie uma função loginUsuario que retorna uma Promise. Se o usuário e senha estiverem corretos ("admin" e "123"), resolva com "Login bem-sucedido". 
// Caso contrário, rejeite com "Credenciais inválidas".
import createPrompt from "prompt-sync";

const prompt = createPrompt();

const usuario = prompt("Digite seu usuário: ").toLowerCase();
const senha = prompt("Digite sua senha: ").toLowerCase();


function loginUsuario(usuario: string, senha: string){
    return new Promise((resolve, reject) => {
        if(usuario === "admin" && senha === "123")
            resolve("Login bem sucedido");
        else
            reject("Credenciais invalidas");
    });
}

loginUsuario(usuario, senha).then(result => console.log(result)).catch(error => console.log(error));