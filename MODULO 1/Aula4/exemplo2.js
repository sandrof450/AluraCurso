const people = [
    {
      name: "Lucas",
      age: 20,
      height: 170,
      occupation: "Programador",
    },
    {
      name: "Matheus",
      age: 16,
      height: 160,
      occupation: "Estudante",
    },
    {
      name: "Fernanda",
      age: 24,
      height: 168,
      occupation: "Corretora de imóveis",
    },
  ];
  
  function introducePerson(person) {
    console.log(`Olá, ${person.name}. Aqui estão as suas informações:`);
    console.log(`Idade: ${person.age}.`);
    console.log(`Ocupação: ${person.occupation}.`);
  }
  
  function executaPraCadaUm(list, callback = console.log) {
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
  
      callback(item);
    }
  }
  
  // executaPraCadaUm(people, function (person) {
  //   console.log(person.name);
  // });
  
  console.log("FOR EACH"); // execute isso para cada item
  people.forEach(function (person) {
    console.log(person.age);
  });
  console.log("\n");
  
  ////////
  
  console.log("MAP"); // Transformar cada item
  const ages = people.map((person) => {
    // arrow function
    return person.age;
  });
  console.log("ages: ", ages);
  console.log("\n");
  
  ////////
  
  // Filtrar
  console.log("FILTER"); // Transformar cada item
  const notLegalAges = people.filter((person) => {
    return person.age < 18;
  });
  console.log("notLegalAges: ", notLegalAges);
  console.log(
    "notLegalAges: ",
    notLegalAges.map((p) => p.name)
  );
  console.log("\n");
  
  // Encontrar um item
  console.log("FIND");
  const the20YearsPerson = people.find((person) => {
    return person.age === 20;
  });
  if (the20YearsPerson) {
    console.log("the20YearsPerson: ", the20YearsPerson.name);
  } else {
    console.log("the20YearsPerson: ", "not found");
  }
  console.log("\n");
  
  // Verificar se há algum
  console.log("SOME");
  const hasSomeoneWith20Years = people.some((person) => {
    return person.age < 18;
  });
  console.log("hasSomeoneWith20Years: ", hasSomeoneWith20Years);
  console.log("\n");
  
  // Reduzir
  console.log("REDUCE");
  const numbers = [1, 2, 3, 4, 5, 9];
  
  const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.log("sum: ", sum);
  console.log("\n");
  
   