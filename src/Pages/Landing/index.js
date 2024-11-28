import { Grid2 } from "@mui/material";
import NavBar from "Pages/Navbar";
import TaskManager from "Pages/TaskManager";

const Landing = () => {
  return (
    <>
      <Grid2
        container
        sx={{ py: 3, px: 6, overflowX: "auto", display: "block" }}
        spacing={2}
      >
        <Grid2 size={12} sx={{ minWidth: "900px" }}>
          <NavBar />
        </Grid2>
        <Grid2 size={12} sx={{ minWidth: "900px" }}>
          <TaskManager />
        </Grid2>
      </Grid2>
    </>
  );
};

export default Landing;
