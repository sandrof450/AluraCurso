// Dada a lista de números

// const numbers = [2, 7, 87, 62, 100, 59, 26, 1, 97, 62, 98, 76, 47, 13, 96, 71, 67, 21, 30, 44];

// - Criar e exibir uma lista com os números pares;
// - Gerar uma variável com a multiplicação de todos os números
// - Exibir o índice da primeira ocorrencia de um número impar
// - Verificar se há algum número primo na lista

const numbers = [2, 7, 87, 62, 100, 59, 26, 1, 97, 62, 98, 76, 47, 13, 96, 71, 67, 21, 30, 44];

//O filter traz uma lista do mesmo tamanho ou menor, essa lista será colocado condições para que possa ser retornada
const numbersPares = numbers.filter((number) => (number % 2) == 0);
console.log(numbersPares);

//O reduce pegará uma lista e trará algum valor apartir dela, no reduce temos parametro onde podemos definir qual será o valor 
// inicial ou temos a possbilidade de pegar o valor atual que esta sendo percorrido dentro da lista e com isso 
// utilizar para algo, mas sempre teremos apenas um valor final.
const acumeleNumbers = numbers.reduce((acumulator, currentValue) => {
    return acumulator * currentValue;
}, 1);
console.log(acumeleNumbers);

const indexNumberOdd = numbers.findIndex((number) => (number % 2) !== 0);
console.log(`Indice: ${indexNumberOdd}`);

