import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

export const chunkText = async (text) => {
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000, // 1000 characters per chunk
    chunkOverlap: 200, // to not lose context between chunks
  });

  return await textSplitter.createDocuments([text]);
};
