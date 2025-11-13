import React, { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import TopBar from "./components/TopBar";
import SideNav from "./components/SideNav";
import DashboardContent from "./pages/DashboardContent";
import { lightTheme } from "./Theme/themes";
import { ThemeManager } from "./Theme/ThemeManager";

function AppContent() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <TopBar onMenuClick={() => setOpen(true)} />
      <Box sx={{ display: "flex", flex: 1 }}>
        <SideNav open={open} onClose={() => setOpen(false)} />
        <Box component="main" sx={{ flexGrow: 1, p: 3, overflow: "auto" }}>
          <DashboardContent />
        </Box>
      </Box>
    </Box>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <ThemeManager>
        <AppContent />
      </ThemeManager>
    </ThemeProvider>
  );
}
