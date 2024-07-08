import { Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

export const CountActiveTodo = () => {
  const count = useSelector(
    (state: RootState) =>
      state.todos.filter((todo) => todo.completed === false).length
  )

  return (
    <Typography variant='h5' component='h5' fontSize='1rem' fontWeight={300}>
      {count > 1
        ? `${count} items left`
        : count === 0
        ? `0 item`
        : `1 item left`}
    </Typography>
  )
}
