//hotm.art/w5vTj6s
//ALURA15

import OpenAI from "openai";
import readline from "readline";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI();

// Função para ler input do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função principal
async function criarBiografia() {
  rl.question("Digite o nome do autor: ", async (nomeAutor) => {
    const systemPrompt =
      "Você é um assistente literário especializado em criar biografias de autores.";
    const userPrompt = `Crie uma mini biografia do autor ${nomeAutor} destacando seus principais feitos, contribuições e informações relevantes sobre sua vida.`;

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      });

      const resposta = response.choices[0].message.content;
      console.log(`\nMini Biografia:\n${resposta}`);
    } catch (error) {
      console.error("Erro ao acessar a API:", error);
    } finally {
      rl.close();
    }
  });
}

criarBiografia();
