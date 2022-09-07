import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addNewTask: (state, action) => {
      const newTask = action.payload;
      state.value = [...state.value, newTask];
    },
    updateTask: (state, action) => {
      const taskDetail = action.payload;
      const taskIndex = state.value.findIndex(
        (item) => item.id === taskDetail.id
      );
      state.value[taskIndex].name = taskDetail.name;
      state.value[taskIndex].description = taskDetail.description;
      state.value[taskIndex].date = taskDetail.date;
      state.value[taskIndex].priority = taskDetail.priority;
    },
    updateStatusTask: (state, action) => {
      const taskDetail = action.payload;
      const taskIndex = state.value.findIndex(
        (item) => item.id === taskDetail.id
      );
      state.value[taskIndex].status = taskDetail.status;
    },
    removeTask: (state, action) => {
      const id = action.payload;
      state.value = state.value.filter((item) => item.id !== id);
    },

    removeTaskByStatus: (state) => {
      state.value = state.value.filter((item) => item.status !== true);
    },
    clearTask: (state) => {
      state.value = [];
    },
  },
});

export const {
  removeTask,
  addNewTask,
  clearTask,
  updateTask,
  updateStatusTask,
  removeTaskByStatus,
} = taskSlice.actions;

export default taskSlice.reducer;
