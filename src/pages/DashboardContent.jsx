import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { DataGrid } from "@mui/x-data-grid";
import { Button, CardHeader, Container, ListSubheader, Stack } from "@mui/material";
import { Dashboard } from "@mui/icons-material";
import DashboardHeader from "../components/header";
import SimpleInfoCard from "../components/singleValCard.jsx";

const rows = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "Material UI", col2: "Modern" },
  { id: 3, col1: "DataGrid", col2: "Component" },
  { id: 4, col1: "Theme", col2: "Switcher" },
];

const columns = [
  { field: "col1", headerName: "Column One", flex: 1 },
  { field: "col2", headerName: "Column Two", flex: 1 },
];

export default function DashboardContent() {
  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* <CardHeader
        title="Dashboard Overview"
        subheader="Summary of key data metrics"
        action={
          <Stack direction="row" spacing={1}>

            <Button variant="outlined" size="small">
              Another Action
            </Button>

            <Button variant="contained" size="small">
              Action
            </Button>
          </Stack>
        }
        slots={{
          title: Typography,
          subheader: Typography,
        }}

        slotProps={{
          title: { variant: "h3", fontWeight: 700 },
          subheader: { variant: "body2", color: "text.secondary" },
        }}
        sx={{ p: 0, mb: 2 }}
      /> */}

      <DashboardHeader />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
          gap: 2,
        }}
      >
      <SimpleInfoCard
        label="Active Users"
        number={1289}
        tooltip="Total number of currently active users"
      />
      <SimpleInfoCard
        label="Active Users"
        number={1289}
        tooltip="Total number of currently active users"
      />
            <SimpleInfoCard
        label="Active Users"
        number={1289}
        tooltip="Total number of currently active users"
      />
            <SimpleInfoCard
        label="Active Users"
        number={1289}
        tooltip="Total number of currently active users"
      />
      </Box>

      <Paper
        sx={{
          height: { xs: 300, sm: 400, md: 600 },
          width: "100%",
          mb: 4,
          boxShadow: 2,
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          sx={{
            border: "none",
            fontSize: "body2.fontSize",
          }}
        />
      </Paper>

      <Typography
        variant="h3"
        sx={{
          mb: 0,
          fontWeight: 700,
        }}
      >
        Dashboard Overview
      </Typography>

      <Typography
        variant="h4"
        sx={{
          mb: 0,
          fontWeight: 700,
        }}
      >
        Dashboard Overview
      </Typography>

        <Typography
        variant="h5"
        sx={{
          mb: 0,
          fontWeight: 700,
        }}
      >
        Dashboard Overview
      </Typography>

              <Typography
        variant="h6"
        sx={{
          mb: 0,
          fontWeight: 700,
        }}
      >
        Dashboard Overview
      </Typography>

      <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Card Example
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Theming is fully dynamic. Switch themes to see global overrides in
            action.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
