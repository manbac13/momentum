import { Trash } from "iconsax-react";
import swal from "@sweetalert/with-react";
import { persistor } from "Store";

import { Grid2, Typography, Button } from "@mui/material";

const Data = () => {
  const handleClearClick = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
      closeOnClickOutside: false,
    }).then((willDelete) => {
      if (willDelete) {
        persistor.purge().then(() => {
          setTimeout(() => {
            window.location.reload(); // Reload the page after a delay
          }, 500); // 1000ms = 1 second delay
        });
        swal("Poof! Your data has been cleared! Please wait...", {
          icon: "success",
        });
      } else {
        swal("Your data is safe!");
      }
    });
  };
  return (
    <>
      <Grid2 container>
        <Grid2 size={4}>
          <Typography>Clear Data</Typography>
        </Grid2>
        <Grid2 size={8}>
          <Button
            onClick={handleClearClick}
            color="error"
            variant="contained"
            startIcon={<Trash size="18" />}
          >
            Clear Data
          </Button>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Data;
