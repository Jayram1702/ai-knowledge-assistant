import ChatPage from "@/chatlayout/ChatPage";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import AppSidebar from "./AppSidebar";

const AppHeader = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <AppSidebar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
        }}
      >
        {/* Header */}

        <AppBar position="static" elevation={1}>
          <Toolbar disableGutters>
            <Typography variant="h6">AI Assistant</Typography>
          </Toolbar>
        </AppBar>
        <ChatPage />
      </Box>
    </Box>
  );
};

export default AppHeader;
