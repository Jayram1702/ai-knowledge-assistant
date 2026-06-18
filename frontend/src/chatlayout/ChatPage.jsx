import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Paper,
  Avatar,
  InputAdornment,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { sendMessage } from "@/services/ChatApi";
import PdfUpload from "@/shared/PdfUpload";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hey! I am your AI Assistant. How can I help you?" },
  ]);

  const [input, setInput] = useState("");
  const [loadingAPI, setLoadingAPI] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage = { role: "user", text: input };

    setMessages((prev) => [...prev, newMessage]);

    const currentInput = input;

    setInput("");

    try {
      setLoadingAPI(true);
      const data = await sendMessage(currentInput);
      setMessages((prev) => [...prev, { role: "ai", text: data.response }]);
      setLoadingAPI(false);
    } catch (error) {
      console.error(error);
      setLoadingAPI(false);
    }

    // setTimeout(() => {
    //   setMessages((prev) => [
    //     ...prev,
    //     { role: "ai", text: "This is a mock AI response 🤖" },
    //   ]);
    // }, 600);
  };

  return (
    <>
      {/* Messages Area */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 3,
          backgroundColor: "#f7f7f8",
        }}
      >
        {messages.map((msg, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              mb: 2,
            }}
          >
            <Paper
              elevation={1}
              sx={{
                p: 2,
                maxWidth: "60%",
                backgroundColor: msg.role === "user" ? "#1976d2" : "#ffffff",
                color: msg.role === "user" ? "#fff" : "#000",
                borderRadius: 2,
                display: "flex",
                alignItems: "flex-start",
                gap: 1,
              }}
            >
              {msg.role === "ai" && (
                <Avatar sx={{ width: 24, height: 24 }}>AI</Avatar>
              )}

              <Typography variant="body1">{msg.text}</Typography>
            </Paper>
          </Box>
        ))}
        {loadingAPI && (
          <Typography sx={{ mt: 2 }}>AI is thinking...</Typography>
        )}
      </Box>

      {/* Input Box */}
      <Box
        sx={{
          p: 2,
          borderTop: "1px solid #ddd",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "flex-end",
          gap: 1,
        }}
      >
        {/* <PdfUpload /> */}
        <TextField
          fullWidth
          placeholder="Message AI..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <PdfUpload />
                </InputAdornment>
              ),
            },
          }}
        />

        <IconButton
          color="primary"
          onClick={handleSend}
          sx={{
            backgroundColor: "#1976d2",
            color: "#fff",
            "&:hover": { backgroundColor: "#115293" },
          }}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </>
  );
}
