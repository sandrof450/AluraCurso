const createPrompt = require("prompt-sync");
const promt = createPrompt();

const a = 8;
const b = 2;
let result = 0;

// result += a;
// result -= b;
// result *= 4;
// result /= 8;

result = 2 ** 3;// 2 x 2 x 2 = 8
result **= 2;// 8 x 8 = 64

console.log(`Resultado: ${result}`);