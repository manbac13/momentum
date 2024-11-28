import {
  Alert,
  AlertTitle,
  Card,
  CardContent,
  CardHeader,
  Grid2,
  useTheme,
} from "@mui/material";
import TaskCard from "Components/TaskCards";

const StatusCard = ({ title = "Pending", data }) => {
  const theme = useTheme();
  const getAlertColor = (title) => {
    if (title === "Pending") {
      return "info";
    } else if (title === "In Progress") {
      return "warning";
    } else {
      return "success";
    }
  };
  console.log("data", data);
  return (
    <>
      <Card
        sx={{
          borderRadius: "12px",
          boxShadow: "none",
          border: `1px solid ${theme.palette.divider}`,
        }}
      >
        <CardHeader
          sx={{ p: 0 }}
          title={
            <Alert color={getAlertColor(title)} icon={false}>
              <AlertTitle sx={{ mb: 0, py: 0.5 }}>{title}</AlertTitle>
            </Alert>
          }
        />
        <CardContent>
          <Grid2 container spacing={2} justifyContent={'center'}>
            {data?.map((item, index) => (
              <Grid2 size={10}>
                <TaskCard data={item} />
              </Grid2>
            ))}
          </Grid2>
        </CardContent>
      </Card>
    </>
  );
};

export default StatusCard;
