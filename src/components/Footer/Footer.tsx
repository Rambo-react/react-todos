import { Box } from '@mui/material'
import React from 'react'
import { CountActiveTodo } from './CountActiveTodo/CountActiveTodo'
import { ClearButton } from './ClearButton/ClearButton'
import { Filter } from './Filter/Filter'

export const Footer = React.memo(() => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        alignItems: 'center',
      }}
    >
      <CountActiveTodo />
      <Filter />
      <ClearButton />
    </Box>
  )
})

Footer.displayName = 'Footer'
