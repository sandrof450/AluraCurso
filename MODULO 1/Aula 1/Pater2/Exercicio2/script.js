//Mostrar na tela o autor a data em qual foi criada o livro e nome do livro

function handlerClick(event){
    event.preventDefault();

    const formData = new FormData(event.target);
    const nameActor = formData.get("name");
    const nameBook = formData.get("name_book");
    const release_date = formData.get("release_date");

    const currentYear = new Date().getFullYear();
    const years = currentYear - release_date;

    const message = `O autor ${nameActor} teve seu livro ${nameBook} publicado em ${release_date}. O livro tem ${years} anos`;

    document.querySelector("p").innerHTML = message;
}

document.getElementById("myForm").addEventListener(
    "submit", handleFormSubmit
);
