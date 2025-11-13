import { useState } from "react";
import {
  Box,
  CardHeader,
  IconButton,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";

export default function DashboardHeader() {
  const [open, setOpen] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <CardHeader
        title="Dashboard Overview"
        subheader="Summary of key data metrics"
        action={
          <Stack direction="row" spacing={1}>
            <Button color="primary" onClick={handleOpen} size="small" startIcon={<AddIcon />}>
              Add Metric
            </Button>
            <Button variant="outlined" size="small" startIcon={<SettingsIcon/>}>
              Configure 
            </Button>
          </Stack>
          }
        slots={{
          title: Typography,
          subheader: Typography,
        }}
        slotProps={{
          title: { variant: "h4", fontWeight: 700 },
          subheader: { variant: "body2", color: "text.secondary" },
        }}
        sx={{
          p: 0,
          mb: 2,
          alignItems: "center",
        }}
      />

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Add New Metric</DialogTitle>
        <DialogContent dividers>
          <Typography variant="body1">
            Here you can configure a new dashboard metric or import data.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
