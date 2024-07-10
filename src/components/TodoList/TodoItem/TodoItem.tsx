/// <reference types="vite-plugin-svgr/client" />
import React from 'react'
import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../redux/store'
import { Todo } from '../../../models/Todo'
import { removeTodo, toggleStatusTodo } from '../../../redux/slices/todoSlice'
import DelIcon from '../../../assets/delete.svg?react'

export const TodoItem = React.memo(({ id, description, completed }: Todo) => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <Paper square>
      <ListItem aria-label='todoItem'>
        <ListItemText
          aria-label='todoItemText'
          onClick={() => {
            dispatch(toggleStatusTodo(id))
          }}
          sx={{
            cursor: 'pointer',
            textDecoration: completed ? 'line-through' : 'none',
            opacity: completed ? 0.7 : 1,
          }}
        >
          {description}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton
            color='error'
            aria-label='deletebutton'
            onClick={() => {
              dispatch(removeTodo(id))
            }}
          >
            <DelIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Paper>
  )
})

TodoItem.displayName = 'TodoItem'
