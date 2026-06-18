const { generateEmbedding } = require("./embedding.service");
const { generateResponse } = require("./llm/geminiService");
const { buildPrompt } = require("./prompt/ promptService");
const { searchSimilarChunks } = require("./qdrant.service");

const processMessage = async (message) => {
  // step1: get embedding of message
  const questionEmbedding = await generateEmbedding(message);
  // step2: search for similar chunks
  const searchResults = await searchSimilarChunks(questionEmbedding);
  // step3: get response
  const contextResponse = searchResults
    .map((result) => result.payload.text)
    .join("\n\n");
  // step4: generate promprt message
  const promptMessage = buildPrompt(message, contextResponse);
  // step5: generate LLM response
  const response = await generateResponse(promptMessage);

  return response;
};

module.exports = {
  processMessage,
};
