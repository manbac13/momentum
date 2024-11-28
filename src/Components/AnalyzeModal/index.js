import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid2,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Dot from "Components/Common/Dot";
import useTasks from "Hooks/Tasks/useTasks";
import { Add } from "iconsax-react";
import React from "react";
import { Cell, Pie, PieChart } from "recharts";

const AnalyzeModal = ({ open, handleClose }) => {
  const theme = useTheme();
  const { columns } = useTasks();

  const convertColumnsToDataArray = (columns) => {
    return [
      { name: "Pending", value: columns.pending.data.length, color: theme.palette.primary.light },
      { name: "In Progress", value: columns.inProgress.data.length, color: theme.palette.warning.light },
      { name: "Completed", value: columns.complete.data.length, color: theme.palette.success.light },
    ];
  };

  const data = convertColumnsToDataArray(columns);
  const COLORS = [
    theme.palette.primary.light,
    theme.palette.warning.light,
    theme.palette.success.light,
  ];
  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            Analyze
            <IconButton size="small" onClick={() => handleClose()}>
              <Add size="24" style={{ rotate: "45deg" }} />
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent dividers>
          <Grid2 container spacing={1}>
            <Grid2 size={8} display={'flex'} justifyContent={'center'}>
              <PieChart width={300} height={300}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={115}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </Grid2>
            <Grid2 size={4} display={'flex'} alignItems={'center'}>
              <Stack direction={"column"} justifyContent={"center"}>
                {data?.map((item, index) => (
                  <Stack direction={"row"} alignItems={"center"} spacing={1} key={index}>
                    <Dot color={item.color}/>
                    <Typography>{item.name}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid2>
          </Grid2>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AnalyzeModal;
