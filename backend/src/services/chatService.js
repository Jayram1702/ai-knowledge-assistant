const { generateResponse } = require("./llm/geminiService");
const { buildPrompt } = require("./prompt/ promptService");

const processMessage = async (message) => {
  const prompt = buildPrompt(message);

  const response = await generateResponse(prompt);

  return response;
};

module.exports = {
  processMessage,
};
