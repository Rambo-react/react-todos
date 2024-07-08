import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './slices/todoSlice'
import filterReducer from './slices/filterSlice'

export const store = configureStore({
  reducer: { todos: todosReducer, filter: filterReducer },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
