import { Button, Grid2, Stack, useTheme } from "@mui/material";
import AnalyzeModal from "Components/AnalyzeModal";
import SettingsModal from "Components/SettingsModal";
import TaskModal from "Components/TaskModal";
import { Add, Book, Chart, Setting2 } from "iconsax-react";
import { useState } from "react";
import LogoSection from "Sections/Navbar/Logosection";

const NavBar = () => {
  const theme = useTheme();
  const [addTaskOpen, setAddTaskOpen] = useState(false);
  const [settingsOpen, setSettingOpen] = useState(false);
  const [analyzeOpen, setAnalyzeOpen] = useState(false);

  const handleAddTaskClose = () => {
    setAddTaskOpen(false);
  };
  const handleSettingsClose = () => {
    setSettingOpen(false);
  };
  const handleAnalyzeClose = () => {
    setAnalyzeOpen(false);
  };
  const giveButtonStyle = (mode) => {
    if (mode === "light") {
      return {
        color: "#121212",
        borderColor: "#121212",
      };
    } else {
      return {
        color: "#fff",
        borderColor: "#fff",
      };
    }
  };
  return (
    <>
      <Grid2 container>
        <Grid2
          size={{ xs: 0, sm: 0, md: 3 }}
        >
          <LogoSection />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 12, md: 9 }}
          sx={{
            display: "flex",
            justifyContent: "flex-end" ,
            alignItems: "center",
          }}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={3}>
            <Button
              startIcon={<Add />}
              variant="outlined"
              onClick={() => setAddTaskOpen(true)}
              sx={giveButtonStyle(theme.palette.mode)}
            >
              Add Task
            </Button>
            <Button
              startIcon={<Chart size="20" />}
              variant="outlined"
              sx={giveButtonStyle(theme.palette.mode)}
              onClick={() => setAnalyzeOpen(true)}
            >
              Analyse
            </Button>
            <Button
              startIcon={<Setting2 size="20" />}
              variant="outlined"
              sx={giveButtonStyle(theme.palette.mode)}
              onClick={() => setSettingOpen(true)}
            >
              Settings
            </Button>
          </Stack>
        </Grid2>
      </Grid2>
      <TaskModal open={addTaskOpen} handleClose={handleAddTaskClose} />
      <SettingsModal open={settingsOpen} handleClose={handleSettingsClose} />
      <AnalyzeModal open={analyzeOpen} handleClose={handleAnalyzeClose} />
    </>
  );
};

export default NavBar;
