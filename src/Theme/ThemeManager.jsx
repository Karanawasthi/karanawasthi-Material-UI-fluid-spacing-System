import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { THEME_REGISTRY, createMuiThemeFromTokens } from "./themes.js";
import { isValidThemeObject, parseThemeJSON } from "./themeUtils.js";

const ThemeContext = createContext(null);

export const useThemeManager = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useThemeManager must be used within ThemeManager");
  return ctx;
};

export const ThemeManager = ({ children }) => {
  const [registry, setRegistry] = useState(() => ({ ...THEME_REGISTRY }));
  const [current, setCurrent] = useState(() => {
    try {
      return localStorage.getItem("appTheme") || "light";
    } catch {
      return "light";
    }
  });

  const muiTheme = useMemo(() => {
    const candidate = typeof current === "string" ? registry[current] : current;
    return candidate;
  }, [registry, current]);

  useEffect(() => {
    try {
      localStorage.setItem("appTheme", typeof current === "string" ? current : "custom");
    } catch {}
  }, [current]);

  const setThemeByName = (name) => {
    if (!registry[name]) {
      console.warn(`[ThemeManager] theme "${name}" not found`);
      return;
    }
    setCurrent(name);
  };

  const addTheme = (name, tokens) => {
    if (!isValidThemeObject(tokens)) throw new Error("Invalid theme tokens");
    const newMuiTheme = createMuiThemeFromTokens(tokens);
    setRegistry((r) => ({ ...r, [name]: newMuiTheme }));
    return newMuiTheme;
  };

  const applyRawTheme = (tokens) => {
    if (!isValidThemeObject(tokens)) throw new Error("Invalid theme tokens");
    const newMuiTheme = createMuiThemeFromTokens(tokens);
    setCurrent(newMuiTheme);
    return newMuiTheme;
  };

  const registerAndApplyFromJSON = (name, input) => {
    const tokens = parseThemeJSON(input);
    addTheme(name, tokens);
    setThemeByName(name);
  };

  return (
    <ThemeContext.Provider
      value={{
        registry,
        currentTheme: current,
        setThemeByName,
        addTheme,
        applyRawTheme,
        registerAndApplyFromJSON,
      }}
    >
      <MuiThemeProvider theme={muiTheme ?? registry.light}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
