import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

/**
 * 🌊 Fluid scaling functions
 */

// Fluid font sizing — scales between min and max across viewport width
const fluid = (min, max) => `clamp(${min}px, calc(${min}px + (${max} - ${min}) * ((100vw - 360px) / (1920 - 360))), ${max}px)`;

// Fluid spacing utility
const fluidSpace = (min, max) => `clamp(${min}px, calc(${min}px + (${max} - ${min}) * ((100vw - 360px) / (1920 - 360))), ${max}px)`;

/**
 * 🌈 Responsive typography presets (fluid across screen)
 */
const fluidTypography = {
  h1: { fontSize: fluid(28, 56), fontWeight: 700, lineHeight: 1.2 },
  h2: { fontSize: fluid(24, 48), fontWeight: 600, lineHeight: 1.25 },
  h3: { fontSize: fluid(20, 36), fontWeight: 600, lineHeight: 1.3 },
  h4: { fontSize: fluid(18, 28), fontWeight: 500, lineHeight: 1.35 },
  h5: { fontSize: fluid(16, 24), fontWeight: 500, lineHeight: 1.4 },
  h6: { fontSize: fluid(14, 20), fontWeight: 600, lineHeight: 1.5 },
  body1: { fontSize: fluid(14, 18), fontWeight: 400, lineHeight: 1.6 },
  body2: { fontSize: fluid(12, 16), fontWeight: 400, lineHeight: 1.6 },
  button: { fontSize: fluid(13, 18), fontWeight: 600, textTransform: "none" },
  caption: { fontSize: fluid(11, 14), lineHeight: 1.4 },
};

/**
 * 🌐 Shared fluid component overrides
 */
const fluidComponents = {
    MuiCssBaseline: {
    styleOverrides: {
      "*": {
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      },
       "*::-webkit-scrollbar": {
        width: "6px",
        height: "6px",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "#9ca3af", // base grey tone or use theme.palette.grey[400]
        borderRadius: "2px",
      },
      "*::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#6b7280", // darker grey
      },
      "*::-webkit-scrollbar-track": {
        backgroundColor: "transparent",
      },
      /* Firefox support */
      // "*": {
      //   scrollbarWidth: "thin",
      //   scrollbarColor: "#9ca3af transparent",
      // },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        padding: fluidSpace(4, 12),
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        padding: fluidSpace(2, 10),
        borderRadius: fluidSpace(8, 20),
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
        padding: fluidSpace(12, 32),
        borderRadius: fluidSpace(8, 20),
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        padding: `${fluidSpace(8, 14)} ${fluidSpace(16, 28)}`,
        borderRadius: fluidSpace(6, 12),
      },
    },
  },
  MuiDataGrid: {
    styleOverrides: {
      root: {
        border: "none",
        fontSize: fluid(12, 16),
      },
      cell: {
        "&:focus": { outline: "none" },
        padding: fluidSpace(4, 12),
      },
      footerContainer: {
        fontSize: fluid(12, 16),
        padding: fluidSpace(6, 16),
      },
    },
    defaultProps: {
      pageSize: 5,
      rowsPerPageOptions: [5, 10],
    },
  },
};

/**
 * 🌤 Create theme helper
 */
export const createMuiThemeFromTokens = (tokens) =>
  createTheme({
    palette: tokens.palette || {},
    typography: {
      fontFamily: "Inter, sans-serif",
      ...fluidTypography,
    },
    shape: tokens.shape || { borderRadius: 12 },
    components: { ...fluidComponents, ...(tokens.components || {}) },
  });

/**
 * ☀️ Light Theme
 */
export const lightTheme = createMuiThemeFromTokens({
  palette: {
    mode: "light",
    primary: { main: "#6b29b8ff" },
    secondary: { main: "#9c27b0" },
    background: { default: "#ebeff7ff", paper: "#ffffff" },
    text: { primary: "#222222" },
    error: { main: red[700] },
  },
});

/**
 * 🌑 Dark Theme
 */
export const darkTheme = createMuiThemeFromTokens({
  palette: {
    mode: "dark",
    primary: { main: "#905ec9ff" },
    secondary: { main: "#f48fb1" },
    background: { default: "#121212", paper: "#1f1f1f" },
    text: { primary: "#ffffff" },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
          backgroundColor: "#1f1f1f",
        },
      },
    },
  },
});

/**
 * 🎨 Theme registry
 */
export const THEME_REGISTRY = {
  light: lightTheme,
  dark: darkTheme,
};
