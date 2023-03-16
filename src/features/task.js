import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = [action.payload, ...state.tasks];
      state.tasks = newTask;
    },
    deleteTask: (state, action) => {
      const newTask = state.tasks.filter((task) => task.id !== action.payload);
      state.tasks = newTask;
    },
    finishTask: (state, action) => {
      const newTasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
      state.tasks = newTasks;
    },
  },
});
export const { addTask, deleteTask, finishTask } = taskSlice.actions;
export default taskSlice.reducer;
