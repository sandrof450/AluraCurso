// const nome = prompt("Digite o seu nome:");
// const idade = Number(prompt("Digite sua idade: "));

// const mensagem = `O seu nome é ${nome} e sua idade é ${idade} anos`;

// document.querySelector("h1").innerHTML = mensagem;

function handlerClick(event){
    event.preventDefault();

    const formData = new FormData(event.target);

    const name = formData.get("name");
    const birthYear = formData.get("birth_year");

    const currentYear = new Date().getFullYear();
    const age = new Date().getFullYear();

    const message = `${name} tem ${age} anos de idade.`;

    const paragraph = document.getElementById("");

    console.log("O evento chegou");
    console.log(event.target);
}

