// File: SimpleInfoCard.jsx
import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography, Tooltip, Box } from "@mui/material";

export default function SimpleInfoCard({ label, number, tooltip, sx = {} }) {
  return (
    <Tooltip title={tooltip || ""} arrow>
      <Card
        elevation={0}
        sx={{
          borderRadius: 2,
          p: 2,
          minWidth: 160,
          textAlign: "left",
          bgcolor: "background.paper",
          ...sx,
        }}
      >
        <CardContent sx={{p: 1.5, "&:last-child": { pb: 1.5 } }}>
          <Box>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontWeight: 500 }}
            >
              {label}
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontWeight: 500, mt: 0.5, color: "text.primary" }}
            >
              {number}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Tooltip>
  );
}

SimpleInfoCard.propTypes = {
  label: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  tooltip: PropTypes.string,
  sx: PropTypes.object,
};

SimpleInfoCard.defaultProps = {
  tooltip: "",
  sx: {},
};
