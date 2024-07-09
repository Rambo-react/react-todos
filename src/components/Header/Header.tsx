import { Typography } from '@mui/material'
import React from 'react'

export const Header = React.memo(() => {
  return (
    <Typography textAlign='center' component='h1' variant='h3' mb={1}>
      react todos
    </Typography>
  )
})

Header.displayName = 'Header'
