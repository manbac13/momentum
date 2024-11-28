import {
  Alert,
  AlertTitle,
  Card,
  CardActions,
  CardHeader,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import TaskModal from "Components/TaskModal";
import { Edit2, More, Trash } from "iconsax-react";
import { useState } from "react";
import swal from "sweetalert";
import "./index.css";
import useTasks from "Hooks/Tasks/useTasks";

const TaskCard = ({ data }) => {
  const theme = useTheme();
  const { deleteTaskAction } = useTasks();
  const [addTaskOpen, setAddTaskOpen] = useState(false);

  const handleAddTaskClose = () => {
    setAddTaskOpen(false);
  };
  const getAlertColor = (prior) => {
    if (prior === "High") {
      return "error";
    } else if (prior === "Medium") {
      return "error";
    } else {
      return "error";
    }
  };

  const getChipColor = (prior) => {
    if (prior === "High") {
      return "error";
    } else if (prior === "Medium") {
      return "warning";
    } else {
      return "success";
    }
  };

  const getBorderColor = (prior, theme) => {
    if (prior === "High") {
      return theme.palette.error.dark;
    } else if (prior === "Medium") {
      return theme.palette.warning.dark;
    } else {
      return theme.palette.success.dark;
    }
  };

  //menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (data) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this task!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
      closeOnClickOutside: false,
    }).then((willDelete) => {
      if (willDelete) {
        console.log("Item deleted");
        deleteTaskAction(data);
        swal("Poof! Your task has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your task is safe!");
      }
    });
  };

  return (
    <>
      <Card
        sx={{
          border:
            theme.palette.mode === "dark"
              ? `1px dashed ${theme.palette.grey[800]}`
              : "none",
        }}
      >
        <CardHeader
          sx={{ p: 0 }}
          title={
            <Alert
              severity={getAlertColor(data.priority)}
              icon={false}
              action={
                <IconButton
                  size="small"
                  sx={{ alignSelf: "center" }}
                  onClick={handleClick}
                >
                  <More size="18" style={{ rotate: "90deg" }} />
                </IconButton>
              }
            >
              <AlertTitle sx={{ mb: 0, py: 0.5 }}>
                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                  <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                    {data.title}
                  </Typography>
                  <Chip
                    size="small"
                    variant="outlined"
                    color={getChipColor(data.priority)}
                    label={data.priority}
                    sx={{ borderRadius: "4px" }}
                  />
                </Stack>
              </AlertTitle>
            </Alert>
          }
        />
        {data.description && (
          <CardActions sx={{ p: 2 }}>
            <Typography
              sx={{
                fontSize: "14px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {data.description}
            </Typography>
          </CardActions>
        )}
      </Card>
      <TaskModal
        open={addTaskOpen}
        handleClose={handleAddTaskClose}
        data={data}
      />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            setAddTaskOpen(true);
            console.log("data to be edited", data);
          }}
        >
          <Edit2 size="16" style={{ marginRight: "8px" }} />
          Edit
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleDelete(data);
          }}
        >
          <Trash size="16" style={{ marginRight: "8px" }} />
          Delete
        </MenuItem>
      </Menu>
    </>
  );
};

export default TaskCard;
