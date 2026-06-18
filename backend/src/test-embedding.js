import { generateEmbedding } from "./services/embedding.service.js";

const run = async () => {
  const text = "Docker is a containerization platform";
  const prompt = "Hello my name is John";
  const embedding = await generateEmbedding(text);
  const promptEmbedding = await generateEmbedding(prompt);

  console.log("Embedding:", embedding, promptEmbedding);
  console.log("Vector length:", embedding.length, promptEmbedding.length);
};

run();
