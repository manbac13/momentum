import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  ui: {
    loading: false,
  },
  columns: {
    pending: {
      id: "pending",
      title: "Pending",
      data: [],
    },
    inProgress: {
      id: "inProgress",
      title: "In Progress",
      data: [],
    },
    complete: {
      id: "completed",
      title: "Completed",
      data: [],
    },
  },
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      if (action.payload.state === "Pending") {
        state.columns.pending.data = [
          ...state.columns.pending.data,
          action.payload,
        ];
      } else if (action.payload.state === "In Progress") {
        state.columns.inProgress.data = [
          ...state.columns.inProgress.data,
          action.payload,
        ];
      } else if (action.payload.state === "Completed") {
        state.columns.complete.data = [
          ...state.columns.complete.data,
          action.payload,
        ];
      }
    },
    editTask: (state, action) => {
      const { id, state: taskState } = action.payload;
      if (taskState === "Pending") {
        state.columns.pending.data = state.columns.pending.data?.map((item) =>
          item.id === id ? { ...item, ...action.payload } : item
        );
      } else if (taskState === "In Progress") {
        state.columns.inProgress.data = state.columns.inProgress.data?.map(
          (item) => (item.id === id ? { ...item, ...action.payload } : item)
        );
      } else if (taskState === "Completed") {
        state.columns.complete.data = state.columns.complete.data?.map((item) =>
          item.id === id ? { ...item, ...action.payload } : item
        );
      }
    },
    deleteTask: (state, action) => {
      const { id, state: taskState } = action.payload; // Destructure for readability
      if (taskState === "Pending") {
        state.columns.pending.data = state.columns.pending.data?.filter(
          (item) => item.id !== id
        );
      } else if (taskState === "In Progress") {
        state.columns.inProgress.data = state.columns.inProgress.data?.filter(
          (item) => item.id !== id
        );
      } else if (taskState === "Completed") {
        state.columns.complete.data = state.columns.complete.data?.filter(
          (item) => item.id !== id
        );
      }
    },
    moveTask: (state, action) => {
      const { source, destination } = action.payload;

      if (!destination) return;
      if (
        source.droppableId === destination.droppableId &&
        source.index === destination.index
      )
        return;

      const sourceCol = state.columns[source.droppableId];
      const destCol = state.columns[destination.droppableId];

      if (source.droppableId === destination.droppableId) {
        const newData = Array.from(sourceCol.data);
        const [removed] = newData.splice(source.index, 1);
        newData.splice(destination.index, 0, removed);

        state.columns[source.droppableId].data = newData;
      } else {
        const sourceData = Array.from(sourceCol.data);
        const destData = Array.from(destCol.data);
        const [removed] = sourceData.splice(source.index, 1);
        const updatedItem = {
          ...removed,
          state: destCol.title,
        };
        destData.splice(destination.index, 0, updatedItem);

        state.columns[source.droppableId].data = sourceData;
        state.columns[destination.droppableId].data = destData;
      }
    },
  },
});

const { addTask, setInitialTasks, moveTask, editTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;

export { addTask, setInitialTasks, moveTask, editTask, deleteTask };
