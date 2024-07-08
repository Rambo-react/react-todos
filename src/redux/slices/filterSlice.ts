import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = { status: 'all' }

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.status = action.payload
    },
  },
})

export const { setFilter } = filterSlice.actions
export default filterSlice.reducer
