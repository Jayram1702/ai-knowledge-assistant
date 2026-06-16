import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

const AppSidebar = () => {
  const drawerWidth = 280;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">Chats</Typography>
      </Box>
      <Divider />
      <List>
        <ListItem button>
          <ListItemText primary="New Chat" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Chat 1" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default AppSidebar;
