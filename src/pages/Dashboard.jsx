import React, { useState } from "react";
import Box from "@mui/material/Box";
import TopBar from "../components/TopBar";
import SideNav from "../components/SideNav";
import DashboardContent from "./DashboardContent";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useThemeManager } from "../Theme/ThemeManager";

export default function DashboardPage() {
  const [open, setOpen] = useState(false);
  const [jsonText, setJsonText] = useState("");
  const { registry, registerAndApplyFromJSON, addTheme, setThemeByName } = useThemeManager();

  const handleUploadAndApply = () => {
    try {
      // uses registerAndApplyFromJSON which accepts string or object
      const name = `custom-${Date.now()}`;
      registerAndApplyFromJSON(name, jsonText);
      setJsonText("");
      alert(`Registered and applied theme: ${name}`);
    } catch (e) {
      alert("Invalid theme JSON: " + e.message);
    }
  };

  const handleAddPreset = () => {
    // Example: create and add a new token-based theme programmatically
    const tokenTheme = {
      palette: {
        mode: "light",
        primary: { main: "#ff6b6b" },
        secondary: { main: "#5b21b6" },
        background: { default: "#fff7ed", paper: "#fff1e6" },
        text: { primary: "#111827" },
      },
      shape: { borderRadius: 20 },
      typography: { fontFamily: "Inter, sans-serif" },
    };
    try {
      addTheme("sunset", tokenTheme);
      setThemeByName("sunset");
    } catch (e) {
      alert("Could not add theme: " + e.message);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
      <TopBar onMenuClick={() => setOpen(true)} />
      <SideNav open={open} onClose={() => setOpen(false)}/>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DashboardContent />

        <Paper sx={{ m: 3, p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Inject a theme (JSON)
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Paste a theme tokens JSON which should include `palette`, `shape`, or `typography` keys (example shown in placeholder).
          </Typography>

          <TextField
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
            placeholder={`{ "palette": { "mode":"light", "primary": {"main":"#00aaff"} } }`}
            fullWidth
            multiline
            minRows={4}
            sx={{ my: 2 }}
          />

          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={handleUploadAndApply}>
              Register & Apply
            </Button>
            <Button variant="outlined" onClick={() => setJsonText(JSON.stringify({
              palette: {
                mode: "light",
                primary: { main: "#00aaff" },
                secondary: { main: "#ff8a00" }
              },
              shape: { borderRadius: 16 }
            }, null, 2))}>
              Insert Example JSON
            </Button>

            <Button variant="text" onClick={handleAddPreset}>Add "sunset" theme</Button>
          </Stack>

          <Typography variant="subtitle1" sx={{ mt: 3 }}>
            Available themes:
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
            {Object.keys(registry).map((k) => (
              <Button key={k} size="small" onClick={() => setThemeByName(k)}>
                {k}
              </Button>
            ))}
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}
