import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDo, ToDosState } from "../types/typing";


type Todo = Omit<ToDo, 'completed'>

export const initialState: ToDosState = {
  todos:[],
};

const toDos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDo: (state,  action : PayloadAction<ToDo>) => { 
       state.todos.push({...action.payload});
    },
    deleteToDo: (state, { payload }: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
    toggleToDo: (state, { payload }: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editToDo: (state, { payload }: PayloadAction<Todo>) => {
      const todo = state.todos.find((todo) => todo.id === payload.id);
      if (todo) {
        todo.title = payload.title || todo.title
        todo.body = payload.body || todo.body
      }
    },
  },
});

export const {
  addToDo,
  deleteToDo,
  toggleToDo,
  editToDo
} = toDos.actions;
export default toDos.reducer;