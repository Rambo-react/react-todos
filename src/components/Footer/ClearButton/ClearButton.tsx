import React from 'react'
import Button from '@mui/material/Button'
import { AppDispatch } from '../../../redux/store'
import { useDispatch } from 'react-redux'
import { clearCompletedTodos } from '../../../redux/slices/todoSlice'

export const ClearButton = React.memo(() => {
  const dispatch = useDispatch<AppDispatch>()
  const onClickHandler = () => {
    dispatch(clearCompletedTodos())
  }
  return (
    <Button
      variant='text'
      onClick={onClickHandler}
      sx={{ textTransform: 'capitalize', marginLeft: 'auto' }}
    >
      Clear Completed
    </Button>
  )
})

ClearButton.displayName = 'ClearButton'
