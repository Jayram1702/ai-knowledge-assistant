import { QdrantClient } from "@qdrant/js-client-rest";

export const qdrantClient = new QdrantClient({
  host: "localhost",
  port: 6333,
});

export const createCollection = async () => {
  try {
    await qdrantClient.createCollection("ai_knowledge", {
      vectors: {
        size: 3072,
        distance: "Cosine",
      },
    });
  } catch (error) {
    console.log("collection already exists");
  }
};

export const saveEmbedding = async (id, vector, text) => {
  await qdrantClient.upsert("ai_knowledge", {
    wait: true,
    points: [
      {
        id: id,
        vector,
        payload: {
          text: text,
        },
      },
    ],
  });
};

export const searchSimilarChunks = async (vectors) => {
  const searchResult = await qdrantClient.search("ai_knowledge", {
    vector: vectors,
    limit: 5,
  });
  return searchResult;
};
