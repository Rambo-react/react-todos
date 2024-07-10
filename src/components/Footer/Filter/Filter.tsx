import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useMemo } from 'react'
import { setFilter } from '../../../redux/slices/filterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/store'

const buttonsList = ['all', 'completed', 'active'] as String[]

export const Filter = React.memo(() => {
  const filter = useSelector((state: RootState) => state.filter.status)

  const dispatch = useDispatch<AppDispatch>()

  const onFilterChangeHandler = (
    _event: React.MouseEvent<HTMLElement>,
    filterValue: string
  ) => {
    if (filterValue !== null) {
      dispatch(setFilter(filterValue))
    }
  }

  const ToggleButtons = useMemo(
    () =>
      buttonsList.map((el, idx) => (
        <ToggleButton
          sx={{ border: 'none', textTransform: 'capitalize' }}
          value={el}
          key={idx}
          aria-label={`filter${el}`}
        >
          {el}
        </ToggleButton>
      )),
    [buttonsList]
  )

  return (
    <ToggleButtonGroup
      color='primary'
      value={filter}
      exclusive
      onChange={onFilterChangeHandler}
      aria-label='filter'
    >
      {ToggleButtons}
    </ToggleButtonGroup>
  )
})

Filter.displayName = 'Filter'
