import { blue, green, lime, orange } from "@ant-design/colors";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import {
  Alert,
  AlertTitle,
  alpha,
  Card,
  CardContent,
  CardHeader,
  Grid2,
  Typography,
  useTheme,
} from "@mui/material";
import TaskCard from "Components/TaskCards";
import useTasks from "Hooks/Tasks/useTasks";

const TaskManager = () => {
  const theme = useTheme();
  const { columns, moveTaskAction } = useTasks();

  const onDragEnd = (result) => {
    moveTaskAction(result);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid2 container spacing={6}>
        {columns &&
          Object.entries(columns).map(([columnId, column]) => (
            <Grid2 size={4} key={columnId}>
              <Card
                sx={{
                  borderRadius: "12px",
                  bosizehadow: "none",
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                  minHeight: 500,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardHeader
                  sx={{ backgroundColor: getAlertColor(column.title) }}
                  title={
                    <Typography color={getFontColor(column.title)}>
                      {column.title}
                    </Typography>
                  }
                />
                <Droppable droppableId={columnId}>
                  {(provided, snapshot) => (
                    <CardContent
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      sx={{
                        flexGrow: 1,
                        p: 2,
                        backgroundColor: snapshot.isDraggingOver
                          ? theme.palette.action.hover // Background color when dragging over
                          : theme.palette.mode === "dark"
                          ? theme.palette.grey[900] // Dark mode default
                          : theme.palette.background.paper, // Light mode default
                        "&:last-child": { pb: 2 },
                      }}
                    >
                      <div style={{ minHeight: "100%" }}>
                        {column.data?.map((item, index) => (
                          <Draggable
                            key={item.id || index}
                            draggableId={(
                              item.id || `item-${index}`
                            ).toString()}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{
                                  ...provided.draggableProps.style,
                                  opacity: snapshot.isDragging ? 0.8 : 1,
                                  marginBottom: "16px",
                                }}
                              >
                                <TaskCard data={item} />
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    </CardContent>
                  )}
                </Droppable>
              </Card>
            </Grid2>
          ))}
      </Grid2>
    </DragDropContext>
  );
};

export default TaskManager;

const getAlertColor = (title) => {
  if (title === "Pending") {
    return alpha(blue[2], 0.6);
  } else if (title === "In Progress") {
    return alpha(orange[2], 0.6);
  } else {
    return alpha(green[2], 0.6);
  }
};

const getFontColor = (title) => {
  if (title === "Pending") {
    return blue[9];
  } else if (title === "In Progress") {
    return orange[9];
  } else {
    return green[9];
  }
};
