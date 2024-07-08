import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'
import { AppDispatch } from '../../redux/store'
import { setFilter } from '../../redux/slices/filterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

export const Footer = () => {
  const filter = useSelector((state: RootState) => state.filter.status)

  const dispatch = useDispatch<AppDispatch>()

  const onFilterChangeHandler = (
    event: React.MouseEvent<HTMLElement>,
    filterValue: string
  ) => {
    dispatch(setFilter(filterValue))
  }

  return (
    <ToggleButtonGroup
      color='primary'
      value={filter}
      exclusive
      onChange={onFilterChangeHandler}
      aria-label='Platform'
    >
      <ToggleButton value='all'>all</ToggleButton>
      <ToggleButton value='completed'>completed</ToggleButton>
      <ToggleButton value='active'>active</ToggleButton>
    </ToggleButtonGroup>
  )
}
