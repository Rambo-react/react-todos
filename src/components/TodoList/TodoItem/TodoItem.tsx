import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
} from '@mui/material'
import { Todo } from '../../../models/Todo'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../redux/store'
import { removeTodo, toggleStatusTodo } from '../../../redux/slices/todoSlice'
import { Delete } from '@mui/icons-material'

export const TodoItem = ({ id, description, completed }: Todo) => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <Paper square>
      <ListItem>
        <Checkbox
          edge='start'
          value={completed}
          onChange={() => {
            dispatch(toggleStatusTodo(id))
          }}
        />
        <ListItemText
          style={{
            textDecoration: completed ? 'line-through' : 'none',
            opacity: completed ? '0.8' : 1,
          }}
        >
          {description}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton
            color='error'
            aria-label='delete'
            onClick={() => {
              dispatch(removeTodo(id))
            }}
          >
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Paper>
  )
}
