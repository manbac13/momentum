import { Stack, Typography } from "@mui/material";

const LogoSection = () => {
  return (
    <>
      <Stack direction={"row"} spacing={1} alignItems={"center"}>
        <Typography
          sx={{
            fontFamily: '"Sacramento", cursive',
            fontSize: "48px",
            fontWeight: 500,
          }}
        >
          Momentum
        </Typography>
      </Stack>
    </>
  );
};
export default LogoSection;
