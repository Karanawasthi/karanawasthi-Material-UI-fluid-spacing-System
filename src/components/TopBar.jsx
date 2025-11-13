import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useThemeManager } from "../Theme/ThemeManager";

export default function TopBar({ onMenuClick }) {
  const { currentTheme, setThemeByName } = useThemeManager();

  return (
    <AppBar sx={{pl: 4, pr: 4, borderRadius: '0px', backgroundColor: "background.paper", color: "primary.main"}} 
    position="sticky" elevation={5} 
    >
      <Toolbar>
        <IconButton edge="start" onClick={onMenuClick} color="background.paper" sx={{ mr: 4,}}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Dashboard
        </Typography>

        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => setThemeByName(currentTheme === "light" ? "dark" : "light")}
            size="small"
          >
            Toggle
          </Button>
          <Avatar alt="Profile" src="" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
