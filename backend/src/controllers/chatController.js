const { processMessage } = require("../services/chatService");

exports.sendMessage = async (req, res) => {
  try {
    const { message } = req.body;

    const response = await processMessage(message);

    return res.json({
      success: true,
      response,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
