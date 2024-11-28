import { Formik } from "formik";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  InputLabel,
  TextField,
  Grid2,
  FormHelperText,
  Select,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  MenuItem,
  Button,
  Tooltip,
} from "@mui/material";
import * as Yup from "yup";
import useTasks from "Hooks/Tasks/useTasks";
import { v4 as uuidv4 } from "uuid";

const priorities = [
  { level: "Low", color: "primary" },
  { level: "Medium", color: "warning" },
  { level: "High", color: "error" },
];

const states = ["Pending", "In Progress", "Completed"];

const TaskModal = ({ open, handleClose, data }) => {
  const { addTaskAction, editTaskAction } = useTasks();
  const initialValues = {
    title: data?.title || "",
    description: data?.description || "",
    priority: data?.priority || "",
    state: data?.state || "Pending",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Task title is required."),
    description: Yup.string().notRequired(),
    priority: Yup.string().required("Priority is required."),
    state: Yup.string().required("State is required."),
  });
  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{data ? "Edit Task" : "Add Task"}</DialogTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            if (data) {
              editTaskAction({ id: data.id, ...values });
              handleClose();
            } else {
              const id = uuidv4();
              addTaskAction({ id: id, ...values });
              handleClose();
            }
          }}
        >
          {({
            values,
            handleSubmit,
            handleBlur,
            handleChange,
            touched,
            errors,
          }) => (
            <form onSubmit={handleSubmit}>
              <DialogContent dividers>
                <Grid2 container spacing={3}>
                  <Grid2 size={12}>
                    <Stack spacing={1}>
                      <InputLabel>Title</InputLabel>
                      <TextField
                        size="small"
                        name="title"
                        id="title"
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Add title"
                        fullWidth
                        error={Boolean(touched.title && errors.title)}
                      />
                      {touched.title && errors.title && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-email-login"
                        >
                          {errors.title}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid2>

                  <Grid2 size={12}>
                    <Stack spacing={1}>
                      <InputLabel>Description</InputLabel>
                      <TextField
                        size="small"
                        name="description"
                        id="description"
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Add description"
                        fullWidth
                        multiline
                        rows={3}
                        error={Boolean(
                          touched.description && errors.description
                        )}
                      />
                      {touched.description && errors.description && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-email-login"
                        >
                          {errors.description}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid2>

                  <Grid2 size={12}>
                    <Stack spacing={1}>
                      <FormControl>
                        <FormLabel>Priority</FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="priority"
                          id="priority"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.priority}
                        >
                          {priorities.map((item, index) => (
                            <FormControlLabel
                              key={index}
                              value={item.level}
                              control={
                                <Radio
                                  color={item.color}
                                  sx={{ color: `${item.color}.main` }}
                                />
                              }
                              label={item.level}
                            />
                          ))}
                        </RadioGroup>
                      </FormControl>

                      {touched.priority && errors.priority && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-email-login"
                        >
                          {errors.priority}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid2>

                  <Grid2 size={12}>
                    <Stack spacing={1}>
                      <InputLabel>State</InputLabel>
                      <FormControl>
                        <Tooltip
                          title={
                            data && "You can edit state by dragging the cards."
                          }
                        >
                          <Select
                            size="small"
                            name="state"
                            id="state"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.state}
                            placeholder="Select state"
                            disabled={data ? true : false}
                          >
                            {states.map((item, index) => (
                              <MenuItem key={index} value={item}>
                                {item}
                              </MenuItem>
                            ))}
                          </Select>
                        </Tooltip>
                      </FormControl>

                      {touched.state && errors.state && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-email-login"
                        >
                          {errors.state}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid2>
                </Grid2>
              </DialogContent>
              <DialogActions>
                <Stack direction={"row"} spacing={2} sx={{ p: 1, px: 2 }}>
                  <Button onClick={handleClose} color="error">
                    Cancel
                  </Button>
                  <Button type="submit" variant="contained">
                    Submit
                  </Button>
                </Stack>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
    </>
  );
};

export default TaskModal;
