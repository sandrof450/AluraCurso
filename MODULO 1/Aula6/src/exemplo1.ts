import axios from "axios";

type UserType = {
  name: string;
  address: {
    street: string;
  };
};

function getUser() {
  return {
    name: "Alguem",
    address: {
      street: "RUA TAL",
    },
  };
}

console.log("\n\n\n\n");

// // esperar
// try {
//   console.log("ANTES");
//   const result = await axios.get(
//     "https://jsonplaceholder.typicode.com/users/-1"
//   );
//   const user = result.data as UserType;
//   console.log(`${user.name} mora na rua ${user.address.street}`);
//   console.log("DEPOIS");
// } catch (error: any) {
//   console.log(error.message);
// }

// fazer outras coisas
console.log("ANTES");

axios
  .get("https://jsonplaceholder.typicode.com/users/-1")
  .then((result) => {
    const user = result.data as UserType;
    console.log(`${user.name} mora na rua ${user.address.street}`);
  })
  .catch((error) => {
    console.log(error.message);
  });

console.log("OUTRAS COISAS");
 