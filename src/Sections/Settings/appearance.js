import { Box, Grid2, Stack, Typography, useTheme } from "@mui/material";
import useSettings from "Hooks/Settings/useSettings";
import { Moon, Sun1 } from "iconsax-react";

const Appearance = () => {
  const theme = useTheme();
  const { setThemeAction, themeName } = useSettings();
  console.log("theme name", themeName);
  return (
    <>
      <Grid2 container>
        <Grid2 size={4}>
          <Typography>Choose Theme</Typography>
        </Grid2>
        <Grid2 size={4}>
          <Stack direction={"row"} spacing={3}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={1}
              sx={{
                py: 1,
                px: 2,
                border: `1px solid ${theme.palette.grey[100]}`,
                borderRadius: "8px",
                cursor: "pointer",
                color: themeName === "light" && "#fff",
                backgroundColor:
                  themeName === "light" ? theme.palette.primary.main : "none",
                transition: "0.5s ease-in-out",
              }}
              onClick={() => setThemeAction("light")}
            >
              <Sun1 size="18" />
              <Typography>Light</Typography>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={1}
              sx={{
                py: 1,
                px: 2,
                border:
                  theme.palette.mode === "dark"
                    ? `1px solid ${theme.palette.grey[100]}`
                    : `1px solid ${theme.palette.grey[900]}`,
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor:
                  themeName === "dark"
                    ? theme.palette.background.default
                    : "none",
                transition: "0.5s ease-in-out",
              }}
              onClick={() => setThemeAction("dark")}
            >
              <Moon size="18" />
              <Typography>Dark</Typography>
            </Stack>
          </Stack>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Appearance;
