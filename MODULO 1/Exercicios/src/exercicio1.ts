//🧩 Exercício 1 – Criando uma Promise simples
//Crie uma função chamada esperar3Segundos que retorna uma Promise que se resolve após 3 segundos com a mensagem "Tempo concluído".

function esperar3Segundos(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("Tempo concluído"))
        }, 300);
    });
}

esperar3Segundos();