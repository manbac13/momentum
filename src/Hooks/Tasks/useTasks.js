import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  editTask,
  moveTask,
  setInitialTasks,
} from "Store/AddTask";

function useTasks() {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state?.tasks?.columns);

  //action
  const addTaskAction = (params) => dispatch(addTask(params));
  const setInitialTasksAction = (params) => dispatch(setInitialTasks(params));
  const moveTaskAction = (params) => dispatch(moveTask(params));
  const editTaskAction = (params) => dispatch(editTask(params));
  const deleteTaskAction = (params) => dispatch(deleteTask(params));

  return {
    columns,
    addTaskAction,
    setInitialTasksAction,
    moveTaskAction,
    editTaskAction,
    deleteTaskAction,
  };
}

export default useTasks;
