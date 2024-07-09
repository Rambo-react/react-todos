import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'
import { AppDispatch } from '../../redux/store'
import { setFilter } from '../../redux/slices/filterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { CountActiveTodo } from './CountActiveTodo/CountActiveTodo'
import { ClearButton } from './ClearButton/ClearButton'

export const Footer = () => {
  const filter = useSelector((state: RootState) => state.filter.status)

  const dispatch = useDispatch<AppDispatch>()

  const onFilterChangeHandler = (
    event: React.MouseEvent<HTMLElement>,
    filterValue: string
  ) => {
    if (filterValue !== null) {
      dispatch(setFilter(filterValue))
    }
  }

  return (
    <Box display='flex' justifyContent='space-between' alignItems='center'>
      <CountActiveTodo />
      <ToggleButtonGroup
        color='primary'
        value={filter}
        exclusive
        onChange={onFilterChangeHandler}
        aria-label='Platform'
      >
        <ToggleButton sx={{ border: 'none' }} value='all'>
          all
        </ToggleButton>
        <ToggleButton sx={{ border: 'none' }} value='completed'>
          completed
        </ToggleButton>
        <ToggleButton sx={{ border: 'none' }} value='active'>
          active
        </ToggleButton>
      </ToggleButtonGroup>
      <ClearButton />
    </Box>
  )
}
