import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'
import { setFilter } from '../../../redux/slices/filterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/store'

const buttonsList = ['all', 'completed', 'active'] as String[]

export const Filter = () => {
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
    <ToggleButtonGroup
      color='primary'
      value={filter}
      exclusive
      onChange={onFilterChangeHandler}
      aria-label='Platform'
    >
      {buttonsList.map((el) => (
        <ToggleButton
          sx={{ border: 'none', textTransform: 'capitalize' }}
          value={el}
        >
          {el}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}
