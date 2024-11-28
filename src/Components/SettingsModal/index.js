import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Add } from "iconsax-react";
import { useState } from "react";
import Appearance from "Sections/Settings/appearance";
import Data from "Sections/Settings/data";

const {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Tab,
  Stack,
  IconButton,
} = require("@mui/material");

const SettingsModal = ({ open, handleClose }) => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            Settings
            <IconButton size="small" onClick={() => handleClose()}>
              <Add size="24" style={{ rotate: "45deg" }} />
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent dividers sx={{ height: "60vh" }}>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  indicatorColor="none"
                >
                  <Tab disableRipple label="Appearance" value="1" />
                  <Tab disableRipple label="Data" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Appearance />
              </TabPanel>
              <TabPanel value="2">
                <Data />
              </TabPanel>
            </TabContext>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SettingsModal;
