import { createCollection, qdrantClient } from "./services/qdrant.service.js";

try {
  await createCollection();

  const collections = await qdrantClient.getCollections();

  console.log("Connected Successfully");
  console.log(collections);

  const result = await qdrantClient.count("ai_knowledge", {
    exact: true,
  });

  const records = await qdrantClient.scroll("ai_knowledge", {
    limit: 10,
    withPayload: true,
  });

  console.log("Count =", JSON.stringify(records, null, 2), result);
} catch (error) {
  console.error("Connection Failed");
  console.error(error);
}
