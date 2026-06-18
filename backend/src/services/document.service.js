import { chunkText } from "./chunk.service.js";
import { generateEmbedding } from "./embedding.service.js";
import { saveEmbedding } from "./qdrant.service.js";

export const processDocument = async (pdfText) => {
  const chunks = await chunkText(pdfText);
  const documents = [];

  let id = 1;

  for (const chunk of chunks) {
    const embedding = await generateEmbedding(chunk.pageContent);

    await saveEmbedding(id++, embedding, chunk.pageContent);

    documents.push({
      textContent: chunk.pageContent,
      embedding,
    });
  }

  return documents;
};
