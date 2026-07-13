import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import App from "./App.jsx";
import "./index.css";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#8ab4f8",
      dark: "#669df6",
      light: "#c2e7ff",
      contrastText: "#07111f",
    },
    secondary: { main: "#c4b5fd" },
    background: { default: "#07080d", paper: "#11131a" },
    text: { primary: "#f4f7fb", secondary: "#a8afbd" },
    divider: "rgba(255, 255, 255, 0.10)",
  },
  shape: { borderRadius: 20 },
  typography: {
    fontFamily: '"Inter", Arial, sans-serif',
    h1: { fontWeight: 800, letterSpacing: "-0.06em" },
    h2: { fontWeight: 780, letterSpacing: "-0.045em" },
    h3: { fontWeight: 720, letterSpacing: "-0.025em" },
    button: { fontWeight: 750, textTransform: "none" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: 48,
          paddingInline: 22,
          borderRadius: 999,
          boxShadow: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 999, fontWeight: 650 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },
  },
});

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Could not find the HTML element with id="root".');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
