import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Filter } from '../../models/Filter'

const initialState = { status: 'all' } as Filter

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
