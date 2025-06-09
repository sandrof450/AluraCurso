// //Exemplo de Função void
// function sayCongratulation2(name: string){
    
//     console.log(`sayCongratulation2: Hello,  ${name}. Happy birthday!`);
// }

// //Exemplo de função com retorno number
// function sayCongratulation(name: string): number{
//     return name.length;
// }

// function sum(x: number, y: number): number{
//     return x + y;
// }

// export {
//     sayCongratulation,
//     sayCongratulation2,
//     sum
// };



function recebeLivro(titulo: string, ano: number){
    const _titulo: string = titulo;
    const _ano: number = ano;

    console.log(`\n\nTitulo: ${_titulo}\nano ${_ano}`);
};

function avaliarLivro(anoDoLivro: number): string{
    const anoAtual = new Date().getFullYear();
    const anoPublicacao = (anoAtual - anoDoLivro)
    let mensagem: string;

    if(anoPublicacao > 5){
        mensagem = "Livro é velho";
    }else{
        mensagem = "Livro novo"
    }
    return mensagem;
}

export{
    recebeLivro,
    avaliarLivro
}