const buildPrompt = (message) => {
  return `
  You are a helpful AI assistant.
  
  User Question:
  ${message}
  `;
};

module.exports = {
  buildPrompt,
};
