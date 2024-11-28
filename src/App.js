import Landing from "Pages/Landing";
import "./App.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import useSettings from "Hooks/Settings/useSettings";
import { useMemo } from "react";

function App() {
  const { themeName } = useSettings();
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeName,
        },
        typography: {
          fontFamily: '"Funnel Display", sans-serif',
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: {
                textTransform: "capitalize",
                fontSize: "15px",
              },
            },
          },
        },
      }),
    [themeName]
  );
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Landing />
      </ThemeProvider>
    </>
  );
}

export default App;
