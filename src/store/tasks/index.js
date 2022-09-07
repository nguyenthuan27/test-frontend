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
    removeItem: (state, action) => {
      const id = action.payload;
      state.value = state.value.filter((item) => item.id !== id);
    },

    clearTask: (state) => {
      state.value = [];
    },
  },
});

export const { addItem, addNewTask, clearTask } = taskSlice.actions;

export default taskSlice.reducer;
