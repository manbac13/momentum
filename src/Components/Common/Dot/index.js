import { Box } from "@mui/material";

const Dot = ({color}) => {
    console.log('color to dot', color)
  return (
    <Box
      width={"14px"}
      height={"14px"}
      sx={{ borderRadius: "50%", backgroundColor: `${color}` }}
    ></Box>
  );
};

export default Dot;