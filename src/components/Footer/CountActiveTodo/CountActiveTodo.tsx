import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

export const CountActiveTodo = React.memo(() => {
  const count = useSelector(
    (state: RootState) =>
      state.todos.filter((todo) => todo.completed === false).length
  )

  return (
    <Typography variant='body1' sx={{ opacity: '0.8' }}>
      {count > 1
        ? `${count} items left`
        : count === 0
        ? `0 item`
        : `1 item left`}
    </Typography>
  )
})

CountActiveTodo.displayName = 'CountActiveTodo'
