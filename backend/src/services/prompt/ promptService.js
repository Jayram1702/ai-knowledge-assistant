const buildPrompt = (question, context) => {
  return `
  You are a helpful AI assistant.

  Answer ONLY using the context provided belo.

  If the answer is not found in the context, 

  say:

  "I could not find that information in the uploaded documents."

  Context:
  ${context}
  
  Question:
  ${question}
  `;
};

module.exports = {
  buildPrompt,
};
