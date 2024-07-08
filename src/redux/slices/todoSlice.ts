import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../../models/Todo'
import { v4 as uuidv4 } from 'uuid'

const initialState = [] as Todo[]

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.push(action.payload)
      },
      prepare: (description) => ({
        payload: {
          id: uuidv4(),
          description,
          completed: false,
        } as Todo,
      }),
    },
    removeTodo(state, action: PayloadAction<string>) {
      const index = state.findIndex((todo) => todo.id === action.payload)
      state.splice(index, 1)
    },
    toggleStatusTodo(state, action: PayloadAction<string>) {
      const index = state.findIndex((todo) => todo.id === action.payload)
      state[index].completed = !state[index].completed
    },
    clearCompletedTodos(state) {
      return state.filter((todo) => todo.completed === false)
    },
  },
})

export const { addTodo, removeTodo, toggleStatusTodo, clearCompletedTodos } =
  todoSlice.actions
export default todoSlice.reducer
