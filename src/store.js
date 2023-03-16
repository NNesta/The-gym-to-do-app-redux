import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import taskReducer from "./features/task";

const store = configureStore({
  reducer: { task: taskReducer },
});

const TaskProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default TaskProvider;
